// 3.8 예외 처리하기
setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마!");
  } catch (err) {
    console.log(err);
  }
}, 1000);
