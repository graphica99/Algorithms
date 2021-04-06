#Printing Alphabent 'W'
for row in range(7):
    for col in range(5):
        if(col in {0,4} and row in {0,1,2,3,4,5,6}):
            print('*',end=' ')
        elif(row in {5} and col in {1,3}):
            print('*',end=' ')
        elif(row == 4 and col == 2):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()