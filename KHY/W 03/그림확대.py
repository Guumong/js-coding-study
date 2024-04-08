def solution(picture, k):
    answer = []
    for i in range(len(picture)):
        res=''
        for j in range(len(picture[i])):
            res += picture[i][j]*k 
        for n in range(k):  
            answer.append(res)
    return answer