#Printing Alphabent 'K'
for row in range(7):
    for col in range(5):
        if(row in {0,6} and col in {0,4}):
            print('*',end=' ')
        elif(row in {1,5} and col in {0,3}):
            print('*',end=' ')
        elif(row in {2,4} and col in {0,2}):
            print('*',end=' ')
        elif(row == 3 and col in {0,1}):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()