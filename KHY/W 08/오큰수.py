n = int(input())
arr = list(map(int, input().split()))

res = [-1] * n
stack = []

for i in range(n):
    while len(stack) != 0 and arr[stack[-1]] < arr[i]:
        res[stack.pop()] = arr[i]
    stack.append(i)

print(" ".join(map(str, res)))
