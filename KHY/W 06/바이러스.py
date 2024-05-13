import sys

n = int(sys.stdin.readline())
m = int(sys.stdin.readline())

graph = [[] for i in range(n + 1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

# [[], [2, 5], [1, 3, 5], [2], [7], [1, 2, 6], [5], [4]]

visited = [False] * (n + 1)
count = 0
tmp = []


def dfs(v):
    visited[v] = True
    global count
    count += 1
    for i in graph[v]:
        if visited[i] == False:
            dfs(i)


dfs(1)

print(count)
