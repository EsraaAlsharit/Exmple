function balancePoint(nums) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < nums.length; i++){
            leftSum += nums[i];

            for (let j = i+1; j < nums.length; j++)
            rightSum += nums[j];

            if (leftSum == rightSum)
            return true;
            rightSum = 0;
    }
    return false;
}
n = nums1.length;
console.log(balancePoint(nums1,n));
console.log(balancePoint(nums2,n));