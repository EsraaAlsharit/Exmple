# Assignment: MathDojo

### Objectives:

- Practice creating a class and creating new instances
- Practice chaining methods
- Practice writing flexible functions that can take a varying number of arguments
<hr>
Create a Python class called MathDojo that has one attribute, result, and 2 methods: add and subtract. The 2 methods each must take at least 1 parameter, but could take many more.

```md
class MathDojo:
def **init**(self):
self.result = 0
def add(self, num, *nums): # your code here
def subtract(self, num, *nums): # your code here

# create an instance:

md = MathDojo()

# to test:

x = md.add(2).add(2,5,1).subtract(3,2).result
print(x) # should print 5

# run each of the methods a few more times and check the result!
```

- [x] Create a MathDojo class

- [x] Write the add method and test it by calling it 3 times, with different numbers of arguments each time

- [x] Write the subtract method and test it by calling it 3 times, with different numbers of arguments each time

- [x] Make sure you are able to chain methods as demonstrated above
