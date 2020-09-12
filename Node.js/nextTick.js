// 3.4.6.2 process.nextTick(콜백)
setImmediate(() => {
  console.log("immediate");
});
process.nextTick(() => {
  console.log("nextTrick");
});
setTimeout(() => {
  console.log("timeout");
}, 0);
Promise.resolve().then(() => console.log("promise"));
