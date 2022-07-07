# Update Values in Dictionaries and Lists

x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]

x[1][0] = 15
print(x)
print("")
students[0]['last_name'] = "Bryant"
print(students)
print("")

sports_directory['soccer'][0] = "Andres"
print(sports_directory)
print("\nIterate Through a List of Dictionaries:\n")
# Iterate Through a List of Dictionaries


def iterateDictionary(_dir):

    for x in _dir:
        str = ""
        for y in x:
            #print(y, x[y])
            if y != "last_name":
                str += y+" - "+x[y]+", "
            else:
                str += y+" - "+x[y]+" "
        print(str)


students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]
iterateDictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

# Get Values From a List of Dictionaries
print("\nGet Values From a List of Dictionaries\n")


def iterateDictionary2(key_name, some_list):
    for x in some_list:
        print(x[key_name])


iterateDictionary2('first_name', students)
print("")
iterateDictionary2('last_name', students)
# Iterate Through a Dictionary with List Values
print("\nIterate Through a Dictionary with List Values\n")


def printInfo(some_dict):
    for x in some_dict:
        print(len(some_dict[x]), x.upper())
        for i in some_dict[x]:
            print(i)
        print("")


dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank

# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
