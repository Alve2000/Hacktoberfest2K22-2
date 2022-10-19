import React from 'react'
import '../categories.css'

const One = () => {
  return (
    <div>
      <h1>Two Sum</h1>
      <textarea value="
         int[] twoSumSorting(int[] nums, int target) {
    int[] copyArray = Arrays.copyOf(nums, nums.length);
    Arrays.sort(copyArray);

    int head = 0;
    int tail = copyArray.length - 1;
    int num1 = 0, num2 = 0;
    while (head < tail) {
      int sum = copyArray[head] + copyArray[tail];
      if (sum < target) {
        head++;
      }
      else if (sum > target) {
        tail--;
      } else {
        num1 = copyArray[head];
        num2 = copyArray[tail];
        break;
      }
    }

    // Create the result array with indices
    int[] result = new int[2];
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] == num1) result[0] = i;
      if (nums[i] == num2) result[1] = i;
    }
    return result;
  }
      " />
    </div>
  )
}

export default One