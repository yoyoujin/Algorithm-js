// The function should return true
// if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
same([1, 2, 3], [4, 1, 9]); //true
same([1, 2, 3], [1, 9]); //false
same([1, 2, 1], [4, 4, 1]); //false

// Naive Solution 😧
// 그 자체가 루프인 indexOf 메소드를 for문 안에 사용 -> 중첩루프를 사용한 순진한 해결책
// 시간 복잡도 N^2
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function same(arr1, arr2) {}
