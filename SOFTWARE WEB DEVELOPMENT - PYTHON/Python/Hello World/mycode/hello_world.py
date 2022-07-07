# 1. TASK: print "Hello World"
print("Hello World")
# 2. print "Hello Noelle!" with the name in a variable
name = "Esraa"
print("Hello ", name, "!")  # with a comma
print("Hello "+name+"!")  # with a +
# 3. print "Hello 42!" with the number in a variable
name = 42
print("Hello ", name, "!")  # with a comma
print("Hello "+str(name)+"!")  # with a +	-- this one should give us an error!
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print(f"Hello {fave_food2}!")  # with .format()
print("Hello {}!".format(fave_food1))  # with an f string

fav_food = "pizza"
fav_food2 = "shuarma"
print("I love to eat {} and {}.".format(fav_food, fav_food2))
