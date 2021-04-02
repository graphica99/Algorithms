n = int(input('enter number of rows'));

# printing pyramid using stars
# for i in range(n):
#     for j in range(n-i):
#         print(' ', end='')
#     for k in range(i+1):
#         print('* ',end='')
#     # for l in range(i):
#         # print('*',end='')
#     print()

#printing pyramid with fixed digits in every row
for i in range(n):
    for j in range(n-i):
        print(' ',end='')
    for k in range(i+1):
        print(str(i+1)+' ',end='')
    print()