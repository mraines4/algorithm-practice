# get number of rows
# get number of col

# totalRow = 11
# TotalCol = 16

# ourRow = 3
# ourCol = 5

totalRow = int(input("total num of rows "))
totalCol = int(input("total num of cols "))

ourRow = int(input('what row am i in '))
ourCol = int(input('what col am i in '))


pissed_col = totalCol - (ourCol - 1)
pissed_row = totalRow - ourRow

pissedPpl = pissed_col * pissed_row

print(pissedPpl)