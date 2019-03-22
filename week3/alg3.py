# Quadratic Solution O(N*2)
# Given two arrays write a function to find out if two arrays have the 
# same frequency of digits
# Examples
# [1,2,3,4], [1,2,3,4] = true
# [1,2,3,4], [1,4,5,6] = false
# [1,2,3,4],[1,4,4,2] = false
# [1,2,3,4],[1,4,3,2] = true
# [1,2,3,4,5],[1,2,3,4] = false;



def checklists(list_a, list_b):
    # result = []
    # if len(list_a) == len(list_b):
    #     for num in list_a:
    #             if num in list_b and num not in result:
    #                 result.append(num)
    #                 # print(result)
    #             else:
    #                 print('false')
    #                 break
    # else:
    #     print('false')

    if len(list_b) != len(list_a):
        return False
    counter = {}
    counter2 = {}
    for i in list_a:
        if i in counter.keys():
            counter[i] += 1
        else:
            counter[i] = 1
    for i in list_b:
        if i in counter2.keys():
            counter2[i] += 1
        else:
            counter2[i] = 1
    for key in counter.keys():
        if key not in counter2.keys():
            return False
        if counter[key] != counter2[key]:
            return False
        else:
            return True

print(checklists([1,2,3,4], [1,2,3,4]))
print(checklists([1,2,3,4], [1,4,5,6]))
print(checklists([1,2,3,4], [1,4,4,2]))
print(checklists([1,4,3,2], [1,3,2,4]))
print(checklists([1,2,3,4,5], [1,2,3,4]))