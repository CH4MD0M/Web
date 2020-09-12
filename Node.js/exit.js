// 3.4.6.3 process.exit(코드)
let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log("종료!");
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);
