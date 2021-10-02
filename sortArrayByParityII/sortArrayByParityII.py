class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        parity_array = []
        even_array = []
        odd_array = []
        for number in nums:
            if number % 2 == 0:
                even_array.append(number)
            else:
                odd_array.append(number)
        index = 0
        while len(parity_array) < len(nums):
            parity_array.append(even_array[index])
            parity_array.append(odd_array[index])
            index += 1
        return parity_array