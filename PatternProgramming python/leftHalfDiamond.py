n = int(input('enter steps'))

for i in range(n):
    for j in range(n-i):
        print(' ',end='')
    for k in range(i):
        print('*' , end='')
    print()
for l in range(n):
    for m in range(l):
        print(' ',end='')
    for k in range(n-l):
        print('*',end='')
    print()

