const arr1 = ["a", "b", "c"];
const newItem1 = "d";
//const expected1 = 4
//const expectedArr1 = ["a", "b", "c", "d"]

const arr2 = []
const newItem2 = "a"
//const expected2 = 1
//const expectedArr2 = ["a"]

function push(arr, newItem) {
    i=arr.length;
    arr[i+1]=newItem;
    console.log(arr);
}
push(arr1,newItem1);
push(arr2,newItem2);