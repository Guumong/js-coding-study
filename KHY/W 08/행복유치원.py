n, k = map(int, input().split())
# 8 5

arr = list(map(int, input().split()))  # 1 3 5 6 7 11 12 13
diff = []  # 2 2 1 1 4 1 1
for i in range(n - 1):
    diff.append(arr[i + 1] - arr[i])

diff.sort(reverse=True)  # 4 2 2 1 1 1 1


print(sum(diff[k - 1 :]))  # 3
