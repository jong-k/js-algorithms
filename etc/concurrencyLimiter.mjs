/**
 * 모든 task를 poolSize 개 씩 동시에 실행하고
 * Promise.allSettled() 와 동일한 형식으로 결과 반환
 * @template T
 * @param {Array<() => Promise<T>>} tasks - promise 반환 함수들의 배열
 * @param {number} poolSize - 동시에 실행할 최대 갯수
 * @returns {Promise<Array<
 *   | { status: "fulfilled"; value: T }
 *   | { status: "rejected"; reason: unknown }
 * >>}
 */

async function concurrencyLimiter(tasks, poolSize) {
  const totalTask = tasks.length;
  const results = [];
  let nextIdx = 0;

  async function worker(name) {
    while (true) {
      const i = nextIdx++;
      if (i >= totalTask) break;

      const task = tasks[i];
      const fn = typeof task === "function" ? task : () => Promise.resolve(task);
      console.log(`${name} picks task[${i}]`);
      try {
        const value = await fn();
        console.log(`${name} done task[${i}] ->`, value);
        results[i] = { status: "fulfilled", value };
      } catch (err) {
        console.log(`${name} failed task[${i}] -> err`);
        results[i] = { status: "rejected", reason: err };
      }
    }
  }

  const workers = Array.from({ length: Math.min(poolSize, totalTask) }, (_, k) =>
    worker(`W${k}`),
  );
  await Promise.all(workers);
  return results;
}

// test용 함수
const delayTask =
  (ms, value, fail = false) =>
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => (fail ? reject(new Error(`Fail ${value}`)) : resolve(value)), ms),
    );

const tasks = [
  delayTask(300, "A"),
  delayTask(100, "B"),
  delayTask(200, "C", true),
  delayTask(500, "D"),
  delayTask(50, "E", true),
  delayTask(150, "F"),
];
// CommonJS 에서는 top level await 사용이 안되서
// 즉시실행 함수를 사용하거나
// 파일명을 .mjs 로 바꿔 해당 파일만 ESModule로 만들어야 함
const results = await concurrencyLimiter(tasks, 4);

console.log(results);
