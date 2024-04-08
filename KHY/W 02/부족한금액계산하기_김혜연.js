function solution(price, money, count) {
  let total = 0;
  while (count > 0) {
    total += price * count;
    count -= 1;
  }
  if (total - money > 0) {
    return total - money;
  } else {
    return 0;
  }
}
