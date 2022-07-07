class MathDojo:
    def __init__(self):
    	self.result = 0
    def add(self, num , *nums):
        res=0
        for x in nums:
            res+=x
        res+=num
        self.result+=res
        return self
    	
    def subtract(self, num, *nums):
        res=0
        for x in nums:
            res-=x
        res-=num
        self.result+=res
        return self

# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)	# should print 5
# run each of the methods a few more times and check the result!
op1 = MathDojo()
print(op1.add(7).add(4,6,1).add(2).result)
print(op1.subtract(2).subtract(4,3,1).subtract(2).result)

