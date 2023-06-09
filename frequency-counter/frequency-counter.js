// The function should return true
// if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// same([1, 2, 3], [4, 1, 9]) true
// same([1, 2, 3], [1, 9]) false
// same([1, 2, 1], [4, 4, 1]) false

// Naive Solution 😧
// 그 자체가 루프인 indexOf 메소드를 for문 안에 사용 -> 중첩루프를 사용한 순진한 해결책
// 시간복잡도 O(n^)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Refactored 😀
// 시간복잡도 O(n)
// 세 개의 루프가 있지만, 중첩 루프보다는 훨씬 빠르다!
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}

same2([1, 2, 3, 2], [9, 1, 4, 4]);

// 👉 이렇듯 빈도 카운터의 개념은 보통 '객체'를 사용한다.
