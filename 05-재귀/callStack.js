function takeShower() {
  return "Showering!"; // 3. 반환되고 콜스택에서 takeShower 함수 제거
}

function eatBreakfast() {
  let meal = cookFood(); // 5. eatBreakfast 위에 cookFood 함수 쌓임
  return `Eating ${meal}`; // 7. 반환 후 콜스택에서 eatBreakfast 함수 제거
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)]; // 6. cookFood 함수 실행 후 반환되고 콜스택에서 제거
}

function wakeUp() {
  takeShower(); // 2. wakeUp 위에 takeShower 함수 쌓임
  eatBreakfast(); //4. wakeUp 위에 eatBreakfast 함수 쌓임
  console.log("Ok ready to go to work!"); // 8. 콜스택에 남은 마지막 wakeUp 함수 실행 후 제거됨
}

wakeUp(); // 1. 최초로 wakeUp 함수 호출
