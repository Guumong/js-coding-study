import sys

n = int(sys.stdin.readline())
arr = [0] * 10001

for i in range(n):
    num = int(sys.stdin.readline())
    arr[num] += 1

for i in range(len(arr)):
    if arr[i] >= 1:
        for j in range(arr[i]):
            print(i)


# for문 속에서 append를 사용하게 되면
# 메모리 재할당이 이루어져서 메모리를 효율적으로 사용하지 못한다.
