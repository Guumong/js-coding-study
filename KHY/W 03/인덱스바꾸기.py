def solution(my_string, num1, num2):
    my_string = list(my_string)
    # swap을 이런 식으로 할 수 있다
    my_string[num1],my_string[num2] = my_string[num2], my_string[num1]
    my_string= ''.join(my_string)
    return my_string