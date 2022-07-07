arr = [6, 5, 3, 1, 8, 7, 2, 4, 0, 9]
print("before ", arr)


def SelectionSort(arr):

    for i in range(len(arr)):
        min = i
        for j in range(i+1, len(arr)):
            if arr[min] > arr[j]:
                min = j

        arr[i], arr[min] = arr[min], arr[i]
    return arr


print(SelectionSort("after ", arr))
