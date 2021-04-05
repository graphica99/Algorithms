#Printing Alphabent 'F'
for row in range(7):
    for col in range(5):
        if(col == 0):
            print('*',end=' ')
        elif(row in {0,3}):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()