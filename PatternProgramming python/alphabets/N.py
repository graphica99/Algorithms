#Printing Alphabent 'N'
for row in range(6):
    for col in range(6):
        if(col == 0 or col == 5):
            print('*',end=' ')
        elif(row == col):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()