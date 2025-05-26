const q = [];

q.push("FIRST");
q.push("SECOND");
q.push("THIRD");
console.log(q); // FIRST, SECOND, THIRD

// 스택에서는 pop을 썼지만, 큐에서는 shift를 사용한다
// push-shift 조합 대신 unshift-pop 조합 사용도 가능
q.shift(); // FIRST
q.shift(); // SECOND
q.shift(); // THIRD
