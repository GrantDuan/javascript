/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let lastIndex = [];
    let stack = [];
    let stacked = [];
    for(let i = s.length -1;i>=0;i--){
        if(!lastIndex[s[i]]){
            lastIndex[s[i]] = i;
        }
    }

    for(let i = 0;i<s.length;i++){
        if(stack.length == 0){
            stack.push(s[i]);
            stacked[s[i]] = true;
        }
        else if(stacked[s[i]])
            continue;
        else if(stack[stack.length-1] < s[i]){
            stack.push(s[i]);
            stacked[s[i]] = true;
        }
        else if(stack[stack.length-1] > s[i]){          
            //peak char exist after i
            // and s[i] less than peak char
            while(stack.length>0 && lastIndex[stack[stack.length-1]] > i && stack[stack.length-1] > s[i]){ 
                stacked[stack[stack.length - 1]] = false;
                stack.splice(stack.length-1, 1);                
            }
            stack.push(s[i]);
            stacked[s[i]] = true;
        }
    }


    let result = "";
    stack.forEach(element => {
        result += element;
    });
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicateLetters;
// @after-stub-for-debug-end