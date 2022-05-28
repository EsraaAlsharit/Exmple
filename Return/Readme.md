# Code Challenge: Return

**Assignment:** Create T-diagrams to predict the output for the following code snippets. 

**Directions:**

1. For each code snippet, create a T-diagram. 
2. Create a single text document or photograph of your T-Diagrams that contains the 10 T-diagrams for the code snippets below and submit it.

**Reminder:** This is an opportunity for you to build the habit of showing up for yourself. We won't be reviewing your work, AND your brain needs this workout. Remember, practice a skill regardless of whether a coach or teacher or boss or peer will look at it. This isn't school. This is a dojo.

### Code Snippet 1

```md
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
````

### Code Snippet 2

```md
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
````

### Code Snippet 3

```md
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('x is', result);
````

### Code Snippet 4 - there is a twist

```md
var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
````

### Code Snippet 5

```md
var num = 15;
console.log(num);
function timesTwo(num){
   console.log(num);   
   return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
````

### Code Snippet 6

```md
function timesTwoAgain(num) {
    console.log('num is', num);
    y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
````

### Code Snippet 7

```md
function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
````

### Code Snippet 8

```md
function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))

````

### Code Snippet 9

```md
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
````

### Code Snippet 10
 
```md
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
````

Hint: follow the same order of operations from Math (evaluate the inner-most parentheses first)





