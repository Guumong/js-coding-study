arr = []
for i in range(5):
    num = list(input())
    arr.append(num)

# print(arr)
# [['AABCDD'], ['afzz'], ['09121'], ['a8EWg6'], ['P5h3kx']]

answer = ""

for i in range(15):  # 최대 길이가 15
    for j in range(5):
        if i < len(arr[j]):
            answer += arr[j][i]

print(answer)

# 배열을 세로로 순회하면서
# i의 길이(현재 위치)가 배열의 길이보다
# 작은 경우에만 문자를 추가한다.
