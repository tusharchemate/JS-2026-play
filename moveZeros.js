const nums = [1, 0, 1, 2, 0, 0, 1, 1, 1, 0];

const moveZeros = (nums) => {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }
  }
  return nums;
};

console.log(moveZeros(nums));
