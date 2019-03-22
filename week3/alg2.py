# left = current floor of left
# right = current floor of right
# call = floor want to reach
left_elevator = "left"
right_elevator = 'right'

def elevator(left, right, call):
    if abs((call - left)) < abs((call - right)):
        print(left_elevator)
    elif abs((call - left)) > abs((call - right)):
        print(right_elevator)
    elif abs((call - left)) == abs((call - right)):
        print(right_elevator)

elevator(0, 1, 0)
elevator(0, 1, 1)
elevator(0, 1, 2)
elevator(0, 0, 0)
elevator(0, 2, 1)
elevator(2, 1, 2)