function getSecondLargest(nums) {
    // Remove duplicates using Set and convert back to array
    const uniqueNums = [...new Set(nums)];
    // Sort in ascending order
    const sorted = uniqueNums.sort((a, b) => a - b);
    // Return second largest
    return sorted[sorted.length - 2];
}

console.log(getSecondLargest([1,2,3,4,5,6,6,6]));  