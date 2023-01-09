/**
 * Brute Force - Linear Search
 * basically i am checking everybody on my left when i move forward
 * Time O(N^2) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (let right = 0; right < nums.length; right++) { /*time 0(n)*/
        for (let left = 0; left < right; left++) {      /*time 0(n)*/
            const isDuplicate = nums[left] === nums[right];
            if (isDuplicate) {
                return true;
            }
        }
    }
    return false;
};

// Using  a set- a set stores unique values
/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = (nums, numsSet = new Set()) => {
    for (const num in nums) {
        if (numsSet.has(num)) {
            return true;
        }
        numsSet.add(num);
    }
    return false;
}