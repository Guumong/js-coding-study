import sys

n, m = map(int, sys.stdin.readline().split())
card = list(map(int, sys.stdin.readline().split()))
res = 0

for i in range(n):
    for j in range(i + 1, n):
        min_v = m
        for k in range(j + 1, n):
            if card[i] + card[j] + card[k] <= m:
                if min_v > (m - (card[i] + card[j] + card[k])):
                    min_v = (
                        m  # 여기가 틀렸다. (m - (card[i] + card[j] + card[k])이게 마즘
                    )
                    idx = card[i] + card[j] + card[k]
        if idx > res:
            res = idx
        if idx == m:
            res = idx
            break

print(res)
