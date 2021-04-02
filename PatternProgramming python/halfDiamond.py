n = int(input('enter steps'))

for i in range(n):
    for j in range(i+1):
        print('* ',end='')
    print()

for k in range(n):
    for l in range((n-1)-k):
        print('* ',end='')
    print()

