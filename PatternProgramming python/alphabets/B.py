#printing 'B'
for row in range(7):
    for col in range(5):
        if(row == 0 and col in {0,1,2,3}):
            print('*',end=' ')
        elif(row in {3,6} and col in {1,2,3}):
            print('*',end=' ')
        elif(col == 0):
            print('*',end=' ')
        elif(row in {1,2,4,5} and col== 4):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()

#printing 'b'
for row in range(7):
    for col in range(5):
        if(col == 0):
            print('*',end=' ')
        elif(col == 4 and row in {4,5}):
            print('*', end=' ')
        elif(col in {1,2,3} and row in {3,6}):
            print('*',end=' ')
        else:
           print('  ',end='')
    print()