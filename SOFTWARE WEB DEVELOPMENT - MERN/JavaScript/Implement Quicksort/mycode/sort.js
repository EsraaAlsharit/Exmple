var arr = [3, 4, 6, 8, 0, 6, 31, 4, 7, 9, 10]
// var arr1 = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10,30]

function Quicksort(array) {
    console.log(array)

    var i = 0
    var j = array.length - 1
    var p = Math.round(array.length / 2)
    while (array[i] != array[j]) {
        if (array[i] < array[p]) {
            i++
            
        } else if (array[j] > array[p]) {
            j--
        } else if (array[i] >= array[p] && array[j] <= array[p]) {
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }

    }
    console.log(array)
}
Quicksort(arr)

