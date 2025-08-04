# 토스 NEXT 2022년 코딩테스트 기출 문제

> https://toss.im/career/article/next-developer-2023-sample-questions

## 목차

1. (fe) No More Undefined
2. (android) 토스 자산 목록 정렬

## 1. (fe) No More Undefined

데이터 예시: 어떤 값이라도 undefined일 수 있는 객체

```js
/* repository가 undefined인 경우 */
const object1 = {
  repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
  repository: {
    readme: undefined,
  },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
  repository: {
    readme: {
      extension: "md",
      content: "금융을 쉽고 간편하게",
    },
  },
};
```

입출력 예시

```js
safelyGet(object1, "repository.readme.extension");
// -> 반환 값: undefined

safelyGet(object1, "repository.readme");
// -> 반환 값: undefined

safelyGet(object1, "repository");
// -> 반환 값: undefined

safelyGet(object2, "repository.readme.extension");
// -> 반환 값: undefined

safelyGet(object2, "repository.readme");
// -> 반환 값: undefined

safelyGet(object2, "repository");
// -> 반환 값: { readme: undefined }

safelyGet(object3, "repository.readme.extension");
// -> 반환 값: 'md'

safelyGet(object3, "repository.readme");
// -> 반환 값: { extension: 'md' }
```

조건

- safelyGet 함수는 첫 번째 인자로 객체를, 두 번째 인자로 문자열을 입력받습니다.
- 첫 번째 인자인 객체는 Plain object로만 입력됩니다. 배열이나 함수 등 Plain object가 아닌 객체는 고려하지 않습니다.
- 각 객체의 프로퍼티(Property)는 알파벳으로만 구성됩니다. 점(.)이나 숫자 등을 포함하는 경우는 고려하지 않습니다.
- 각 객체의 값(Value)은 문자열, undefined, 또는 그런 값을 가지는 Plain object만 고려합니다.
- 두 번째 인자인 문자열은 점(.)과 알파벳으로만 구성됩니다. 올바른 JavaScript 프로퍼티 접근 형식을 따릅니다. (foo..bar, .foo, bar. 와 같은 올바르지 않은 형태는 고려하지 않습니다.)

구현

- noMoreUndefined.js

## 2. (android) 토스 자산 목록 정렬

데이터 예시

```js
[
  "20-DE0815",
  "20-CO1299",
  "20-MO0901",
  "20-KE0511",
  "20-SP1102",
  "21-DE0401",
  "21-CO0404",
  "21-MO0794",
  "21-KE0704",
  "21-SP0404",
  "19-DE0401",
  "19-CO0404",
  "19-MO0794",
  "19-KE1204",
  "19-SP0404",
  "2-MO0915", // 유효하지 않은 자산 번호 -> 출력에서 제외
  // 중복된 자산번호 -> 하나의 자산 번호로 출력
];
```

조건

- 토스의 자산관리팀 김토스는 토스 창립 월인 13년도 4월부터 현재인 22년도 8월 까지 등록된 자산을 자산번호에 따라 오름차순으로 정렬하고 싶어 합니다.
- 토스의 자산번호 규칙은 반드시 아래의 9자리 문자열 순서로 구성되어 있으며,
- [등록 연도 2자리]-[취급 자산 코드][등록 월 2자리][등록 순서 번호 2자리]
- 1.등록 연도 > 2.취급 자산 코드 > 3.등록 월 > 4.등록 순서 번호 순서대로 정렬 우선순위를 가지고 있습니다.
