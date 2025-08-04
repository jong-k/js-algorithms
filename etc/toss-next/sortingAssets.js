function solution(assets) {
  const ASSET_CODES = ["SP", "KE", "MO", "CO", "DE"];
  const ASSET_CODE_ORDER = new Map(ASSET_CODES.map((code, index) => [code, index])); // { 'SP' => 0, 'KE' => 1, 'MO' => 2, 'CO' => 3, 'DE' => 4 }

  function parseAsset(asset) {
    if (asset.length !== 9 || asset[2] !== "-") return null;

    const year = parseInt(asset.slice(0, 2));
    const assetCode = asset.slice(3, 5);
    const month = parseInt(asset.slice(5, 7));
    const orderNum = parseInt(asset.slice(7, 9));

    if (!isValidAsset(year, assetCode, month, orderNum)) return null;

    return { year, assetCode, month, orderNum };
  }

  function isValidAsset(year, assetCode, month, orderNum) {
    return (
      year >= 13 &&
      year <= 22 &&
      ASSET_CODE_ORDER.has(assetCode) &&
      month >= 1 &&
      month <= 12 &&
      !(year === 13 && month < 4) &&
      !(year === 22 && month > 8) &&
      orderNum >= 1 &&
      orderNum <= 99
    );
  }

  function compareAssets(a, b) {
    return (
      a.year - b.year ||
      ASSET_CODE_ORDER.get(a.assetCode) - ASSET_CODE_ORDER.get(b.assetCode) ||
      a.month - b.month ||
      a.orderNum - b.orderNum
    );
  }

  function formatAsset({ year, assetCode, month, orderNum }) {
    return `${year.toString().padStart(2, "0")}-${assetCode}${month.toString().padStart(2, "0")}${orderNum.toString().padStart(2, "0")}`;
  }

  const validAssets = assets
    .map(parseAsset)
    .filter((asset) => asset !== null)
    .sort(compareAssets)
    .map(formatAsset);

  return [...new Set(validAssets)];
}

const list1 = [
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
];

const list2 = [
  "2-MO0915", // 유효하지 않은 자산 번호
  "19-MO1299",
  "17-CO0901",
  "14-DE0511",
  "19-KE1102",
  "13-DE0101",
  "20-SP0404",
  "20-CO0794",
];

const list3 = [
  "13-DE0401",
  "13-DE0401",
  "22-MO0815",
  "19-MO1299",
  "17-CO0901",
  "14-DE0511",
  "19-KE1102",
  "20-SP0404",
  "20-CO0794",
];

console.log(solution(list1));
console.log(solution(list2));
console.log(solution(list3));
