/*
   1
  2 3
 4 5 6
7 8 9 0￼

*/


//DFS
function SumOfMaximumPathRecursive(node) {
    let maximum = Number.MIN_VALUE;
    if (node.left === null)
        return node.value;

    maximum = Math.max(SumOfMaximumPath(node.left), SumOfMaximumPath(node.right)) + node.value;

    return maximum;
}

function SumOfMaximumPath(node) {
    let maximum = Number.MIN_VALUE;
    let stack = [];

    stack.push(node);
    let sumofCurrentPath = node.value;
    while(stack.length > 0){
        while(stack[stack.length-1].left !== null){
            sumofCurrentPath += stack[stack.length-1].left.value;
            stack.push(stack[stack.length-1].left);            
        }

        maximum = Math.max(maximum, sumofCurrentPath);

        sumofCurrentPath -= stack.pop().value;
        sumofCurrentPath += stack[stack.length-1].right.value;
        stack.push(stack[stack.length-1].right);    

    }




    return maximum;
}


