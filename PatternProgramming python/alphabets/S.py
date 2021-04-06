#Printing Alphabent 'S'
for row in range(7):
    for col in range(5):
        if(row in {0,3,6} and col in {1,2,3}):
            print('*',end=' ')
        elif(row in {1,2} and col in {0}):
            print('*',end=' ')
        elif(row in {4,5} and col in {4}):
            print('*',end=' ')
        elif(row == 1 and col == 4):
            print('*',end=' ')
        elif(row == 5 and col == 0):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()