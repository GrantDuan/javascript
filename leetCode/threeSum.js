/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3)
        return [];
    let results = [];
    nums.sort((a, b) => a - b);

    for (let f = 0; f < nums.length - 2; f++) //first
    {
        if (f > 0 && nums[f] == nums[f - 1])
            continue;
        let target = -1 * nums[f];
        for (let s = f + 1; s < nums.length - 1; s++) { //second
            if (s > f + 1 && nums[s] == nums[s - 1])
                continue;
            let t = nums.length - 1; //third
            while (nums[s] + nums[t] > target && s < t) {
                t--;
            }
            if (t == s)
                break;

            if (nums[s] + nums[t] == target) {
                results[results.length] = [nums[f], nums[s], nums[t]];
            }

        }
    }

    return results;
};