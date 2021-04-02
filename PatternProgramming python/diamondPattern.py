n = int(input('enter steps'))

for i in range(n):
    for j in range(n-i):
        print(' ',end='')
    for k in range(i+1):
        print('* ',end='')
    print()
for l in range(n):
    for m in range(l+1):
        print(' ',end='')
    for y in range(n-(l+1)):
        print(' *',end='')
    print()
    

