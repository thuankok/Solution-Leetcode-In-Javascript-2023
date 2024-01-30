// https://leetcode.com/problems/evaluate-reverse-polish-notation/description

var evalRPN = function(tokens) {
 const stack = [];
    for (const s of tokens) {
        const c = s.charAt(0);
        if (c === '+') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a + b);
        } else if (c === '-' && s.length === 1) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a - b);
        } else if (c === '*') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(a * b);
        } else if (c === '/') {
            const b = stack.pop();
            const a = stack.pop();
            stack.push((a / b) | 0); 
        } else {
            stack.push(parseInt(s));
        }
    }
    return stack[0];
};
