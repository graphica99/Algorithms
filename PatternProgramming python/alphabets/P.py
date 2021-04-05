#Printing Alphabent 'P'
for row in range(7):
    for col in range(5):
        if(col == 0):
            print('*',end=' ')
        elif(col == 4 and row in {1,2}):
            print('*',end=' ')
        elif(row in {0,3} and col in {0,1,2,3}):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()