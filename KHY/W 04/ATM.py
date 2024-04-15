n = int(input())  # 5
minutes = list(map(int, input().split()))

sum = 0
minutes.sort()

for i in range(n):
    sum += minutes[i] * (n - i)

print(sum)
