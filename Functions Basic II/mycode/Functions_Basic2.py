# Countdown
print("\nCountdown")


def Countdown(num):
    arr = []
    for x in range(num, -1, -1):
        arr.append(x)
    return arr


print(Countdown(5))
print("\nPrint and Return")


def PrintReturn(a, b):
    print(a)
    return b


print(PrintReturn(1, 2))
print("\nFirst Plus Length")


def FirstPlusLength(li):
    sum = li[0] + li[len(li)-1]
    return sum


print(FirstPlusLength([1, 2, 3, 4, 5]))
print("\nValues Greater than Second")


def GreaterSecond(li):
    for x in range(len(li)):
        pass


print(GreaterSecond([5, 2, 3, 2, 1, 4]))
print("\nThis Length, That Value")


def LengthValue(a, b):
    arr = []
    for x in range(a):
        arr.append(b)
    return arr


print(LengthValue(4, 7))
print(LengthValue(6, 2))
