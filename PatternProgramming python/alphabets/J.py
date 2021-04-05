#Printing Alphabent 'J'
for row in range(7):
    for col in range(5):
        if(row == 0):
            print('*',end=' ')
        elif(col == 4 and row in {1,2,3,4,5}):
            print('*',end=' ')
        elif(row == 6 and col in {0,1,2,3}):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()