#Hash Map - 1 Pass
#Time O(N) | Space O(N)

class solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hashMAP = {} #val: index

        for i, n in enumerate(nums):
            diff = target - n
            if diff in hashMAP:
                return[hashMAP[diff], i]
            hashMAP[n] = i
        return