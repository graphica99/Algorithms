#Printing a hallow square

# for row in range(7):
#     for col in range(5):
#         if (row == 0 or row == 6):
#             print('*',end=' ')
#         elif( col == 0 or col == 4):
#             print('*',end=' ')
#         else:
#             print('  ',end='') 
#     print()

# Printing Alphabet 'A'
for row in range(7):
    for col in range(5):
        if (row == 3):
            print('*',end=' ')
        elif(row == 0 and col in {1,2,3} ):
        # elif(row == 0 and col == 1 and col == 2 and col ==3):
            print('*',end=' ')
        elif( row in {1,2,4,5,5} and col in {0,4}):
            print('*',end=' ')
        else:
            print('  ',end='') 
    print()


#printing 'a'
for row in range(7):
    for col in range(5):
        if(row == 0 and col in {1,2,3,}):
            print('*',end=' ')
        elif(col == 0 and row in {1,2,3,4}):
            print('*',end=' ')
        elif(col == 4 and row in {1,2,3,4,5,6}):
            print('*',end=' ')
        elif(row == 5 and col in {1,2,3}):
            print('*',end=' ')
        else:
            print('  ',end='')
    print()
