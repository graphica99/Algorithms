n = int(input('enter steps'))

for i in range(n):
    for j in range(i+1):
        print(' ',end='')
    for k in range(n-i):
        print('* ',end='')
    print()

