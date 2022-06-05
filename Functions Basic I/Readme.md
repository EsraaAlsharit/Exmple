# Assignment: Functions Basic I

### Objectives:

- Avoid common mistakes of using functions
- Really understand how to use T-diagram to correctly predict and debug codes



For each of the following code snippets, first predict the output (what you will see printed to the terminal). Once you've made a prediction, run the code snippet to see if you are correct!

```md
#1
def a():
    return 5
print(a())
````
```md
#2
def a():
    return 5
print(a()+a())
````
```md
#3
def a():
    return 5
    return 10
print(a())
````
```md
#4
def a():
    return 5
    print(10)
print(a())
````
```md
#5
def a():
    print(5)
x = a()
print(x)
````
```md
#6
def a(b,c):
    print(b+c)
print(a(1,2) + a(2,3))
````
```md
#7
def a(b,c):
    return str(b)+str(c)
print(a(2,5))
````
```md
#8
def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a())
````
```md
#9
def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))
````
```md
#10
def a(b,c):
    return b+c
    return 10
print(a(3,5))
````
```md
#11
b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)
````
```md
#12
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)
````
```md
#13
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)
````
```md
#14
def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()
````
```md
#15
def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)
````

Create a text file, or copy the code snippets into a Python file

Predict the output for each of the 15 snippets, checking and comparing your predictions after each snippet

Submit the text file or Python file with your predictions