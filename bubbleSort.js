function bubbleSort(arr) {
  let swappedFlag = false;
  for (let i = arr.length - 1; i > 0; i--) {
    swappedFlag = false;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swappedFlag = true;
      }
    }
    if (!swappedFlag) {
      break;
    }
  }
  return arr;
}

//console.log(bubbleSort([5, 4, 3, 2, 1, 0, 9, 5, 5, 8, 7]));
console.log(bubbleSort([1, 2, 3, 4, 7]));
