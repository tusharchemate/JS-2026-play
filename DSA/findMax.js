const arr = [1, 3, 4, 5, 6, 7, 188, 4];

const findMax = (arr) => {
  
  for(let i=0; i<arr.length;i++) {
      for(let j=0; j<arr.length-i-1;j++) {
          let temp = arr[j];
          if(arr[j]> arr[j+1]) {
            arr[j] = arr[j+1];
            arr[j+1] = temp
          }

      }
  }
  return [arr[arr.length-2],arr[arr.length-1]];
};

console.log(findMax(arr));
