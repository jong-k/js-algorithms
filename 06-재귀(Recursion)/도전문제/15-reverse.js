// 문자열을 입력받고 거꾸로 뒤집어 반환하는 함수
// 예시
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 1) return str;
  const lastChar = str.substring(str.length - 1);
  const newStr = str.substring(0, str.length - 1);
  return lastChar + reverse(newStr);
}
