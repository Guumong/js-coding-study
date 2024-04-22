import sys

n = int(sys.stdin.readline())
arr = []
res = [1] * n
for i in range(n):
    num = list(map(int, input().split()))
    arr.append(num)

for i in range(n):
    for j in range(n):
        if arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1]:
            res[i] += 1

for i in res:
    print(i, end=" ")
