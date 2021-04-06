#Printing Alphabent 'R'
for row in range(7):
    for col in range(5):
        if(row in {0,1,2,3,4,5,6} and col in {0}):
            print('*',end=' ')
        elif(col in {0,1,2,3} and row == 0):
            print('*',end=' ')
        elif(col == 4 and row in {1,2}):
            print('*',end=' ')
        elif(row in {3} and col in {1,2,3}):
            print('*',end=' ')
        elif(row in {4} and col in {2}):
            print('*',end=' ')
        elif(row in {5} and col in {3}):
            print('*',end=' ')
        elif(row in {6} and col in {4}):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()