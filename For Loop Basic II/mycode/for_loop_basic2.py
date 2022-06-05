# Biggie Size
print("Biggie Size")


def BiggieSize(li):
    for x in range(len(li)):
        if(li[x] >= 0):
            li[x] = "big"
    return li


print(BiggieSize([-1, 3, 5, -5]))

# Count Positives
print("\nCount Positives")


def CountPositives(li):
    sum = 0
    for x in range(len(li)):
        if(li[x] >= 0):
            sum += 1
    li[len(li)-1] = sum
    return li


print(CountPositives([-1, 1, 1, 1]))
print(CountPositives([1, 6, -4, -2, -7, -2]))

print("\nSum Total")


def SumTotal(li):
    sum = 0
    for x in range(len(li)):
        sum += li[x]
    return sum


print(SumTotal([1, 2, 3, 4]))
print(SumTotal([6, 3, -2]))

print("\nAverage")
# Average


def Average(li):
    sum = 0
    for x in range(len(li)):
        sum += li[x]
    return sum/len(li)


print(Average([1, 2, 3, 4]))

print("\nLength")


def Length_li(li):
    return len(li)


print(Length_li([37, 2, 1, -9]))

print("\nMinimum")


def Minimum(li):

    if(li != []):
        min = li[0]
        for x in range(len(li)):
            if(min > li[x]):
                min = li[x]
        return min
    else:
        return False


print(Minimum([37, 2, 1, -9]))
print(Minimum([]))

# Maximum
print("\nMaximum")

def Maximum(li):
    if(li != []):
        max = li[0]
        for x in range(len(li)):
            if(max < li[x]):
                max = li[x]
        return max
    else:
        return False


print(Maximum([37, 2, 1, -9]))
print(Maximum([]))

# Ultimate Analysis
print("\nUltimate Analysis")


def UltimateAnalysis(li):
    ultimate = {
        "sumTotal": SumTotal(li),
        "average": Average(li),
        "minimum": Minimum(li),
        "maximum": Maximum(li),
        "length": Length_li(li)
    }
    return ultimate


print(UltimateAnalysis([37, 2, 1, -9]))

print("\nReverse List")


def ReverseList(li):
    arr = []
    for x in range(len(li)-1, -1, -1):
        arr.append(li[x])
    return arr


print(ReverseList([37, 2, 1, -9]))
