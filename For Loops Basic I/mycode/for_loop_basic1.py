print("\nBasic")
for x in range(151):
    print(x)

print("\nMultiples of Five")
for x in range(5, 1001, 5):
    print(x)

print("\nCounting, the Dojo Way")

for x in range(1, 101):
    if x % 5==0:
        print("Coding")
    elif x % 10==0:
        print("Coding Dojo")

print("\nWhoa. That Sucker's Huge")
sum=0
for x in range(0, 500001):
    if x % 2!=0:
        sum+=x
    
print(sum)

print("\nCountdown by Fours")
for x in range(2018, 0,-4):
    print(x)

print("\nFlexible Counter")

for x in range(3, 10,3):
    print(x)
