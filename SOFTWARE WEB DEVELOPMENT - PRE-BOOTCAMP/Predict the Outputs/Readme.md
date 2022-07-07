# Code Challenge: Predict the Outputs

Now that we know we can use a for loop to traverse through an array, let's get some more practice with predicting the results of for loops that use arrays. Use your T-Diagram skills to get through the following 3 challenges!

### Challenge 1: 

```md
var arr = ["Up", "You", "Give", "To", "Going", "Never"];
for(var i = arr.length-1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}
````

NOTE: For loops don't ALWAYS go from the first element to the last element

### Challenge 2: 

```md
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}
````

### Challenge 3:

```md
var arr = [8, 2, 0, 6, 12, 4, 3];
for(var i = 0; i < arr.length; i++){
    if(arr[i] >= 6) {
        console.log(true);
    }
}
````


- [x] Challenge 1

- [x] Challenge 2

- [x] Challenge 3