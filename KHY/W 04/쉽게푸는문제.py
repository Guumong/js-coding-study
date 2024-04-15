import sys

a, b = map(int, sys.stdin.readline().split())
arr = []
for i in range(1, (b + 1)):
    for j in range(i):
        arr.append(i)
    if len(arr) > b:
        break

print(sum(arr[a - 1 : b]))
