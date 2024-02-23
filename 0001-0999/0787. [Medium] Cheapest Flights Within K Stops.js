//    https://leetcode.com/problems/cheapest-flights-within-k-stops/description

var findCheapestPrice = function(n, flights, src, dst, k) {
    const adj = new Map();
    for(const [from, to, price] of flights){
        if(!adj.has(from)) adj.set(from,[]);
        adj.get(from).push([to,price]);
    };

    const dict = new Array(n).fill(Infinity);
    dict[src]=0;

    const queue = [[src,0]];
    let stops = 0;

    while(queue.length && stops <= k){
        const size = queue.length;
        for(let i = 0 ;i< size; i++){
            const [node, distance] = queue.shift();

            if(!adj.has(node)) continue;

            for(const [neighbour, price] of adj.get(node)){
                if(price + distance >= dict[neighbour]) continue;
                dict[neighbour] = price+ distance;
                queue.push([neighbour, dict[neighbour]]);
            }
        }
        stops++;
    }

    return dict[dst] === Infinity ? -1: dict[dst];
};

/*
Approach 2

var findCheapestPrice = function(n, flights, src, dst, k) {
  const maxStops = k >= n ? n - 1 : k;

  let previous = new Array(n).fill(Infinity);
  previous[src] = 0;

  const current = [...previous];

  for (let i = 0; i <= maxStops; i += 1) {
    flights.forEach((flight) => {
      current[flight[1]] = Math.min(
        current[flight[1]],
        previous[flight[0]] + flight[2],
      );
    });
    previous = [...current];
  }

  return current[dst] === Infinity ? -1 : current[dst];
};

*/
