#Printing Alphabent 'I'
for row in range(7):
    for col in range(5):
        if(col == 2):
            print('*',end=' ')
        elif(row in {0,6}):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()