export function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

export function genTicket(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}
