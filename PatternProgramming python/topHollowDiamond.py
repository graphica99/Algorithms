n = int(input('enter steps'))

for i in range(n):
    for j in range(n-i):
        if j+1 == n-i:
            print(' * ',end='')
        print(' ', end='')
    for k in range(i+1):
        print('',end='')
    for l in range(i):
        print('   ',end='')
    for m in range(n-i):
        if m+1 == n-i:
            print(' * ',end='')
        print(' ',end='')
    print()
