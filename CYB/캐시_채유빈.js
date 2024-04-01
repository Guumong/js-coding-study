function solution(cacheSize, cities) {
  let answer = 0;
  const queue = [];

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();

    if (queue.includes(lowerCity)) {
      const index = queue.indexOf(lowerCity);
      queue.splice(index, 1);
      queue.push(lowerCity);
      answer += 1;
    } else {
      if (queue.length === cacheSize) queue.shift();
      queue.push(lowerCity);
      answer += 5;
    }
  });

  return answer;
}
