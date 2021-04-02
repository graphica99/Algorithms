n = int(input('please enter number of steps'));

#inverted right angle triangle with starts.
# for i in range(n):
#     for j in range(n-i):
#         print('*' ,end='')
#     print()

#inverted right angle triangle with fixed digit in every row
# for i in range(n):
#     for j in range(n-i):
#         print(i+1 ,end='')
#     print()

#inverted right angle triangle with fixed alphabets
# for i in range(n):
#     for j in range(n-i):
#         print(chr(65+i) ,end='')
#     print()

#inverted right angle triangle with fixed digit in every row
# for i in range(n):
#     for j in range(n-i):
#         print(n-i ,end='')
#     print()

#inverted right angle triangle with fixed digit in every column
for i in range(n):
    for j in range(n-i):
        print(n-j ,end='')
    print()