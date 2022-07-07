arr = [6, 5, 3, 1, 8, 7, 2, 4, 0, 9]

def InsertionSort(arr):
    for i in range(1, len(arr)):  
        tem = arr[i]
        j = i-1

        while j >=0 and tem < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = tem
    return arr

print(InsertionSort(arr))
