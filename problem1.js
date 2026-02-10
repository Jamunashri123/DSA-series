// Given an array of integers nums and an integer 
// target, return the indices of two numbers that 
// add up to target. 
// Each input has exactly one solution, 
// and you can't use the same element twice. 
// Example: nums = [2,7,11,15],
//  target = 9 returns [0,1] because 2 + 7 = 9


const twoSum = (nums, target) => {
for(let i=0; i< nums.length; i++) {
    for(let j= i+1; j < nums.length; j++) {
        if(nums[i] + nums[j] === target) {
            return [i,j]
        }
    }
}
}

console.log(twoSum([2,17,7,15], 9))