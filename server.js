// node.js로 실행할 파일

const express = require("express");
const path = require("path");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const fs = require("fs");

// console.log(ReactDOMServer.renderToString(<App />));
// 이렇게는 사용할 수 없다. App은 순수 js가 아닌 jsx이기 떄문. babel을 설정해주어야 함. 이건 아래와 같이 바뀜
console.log(
  ReactDOMServer.renderToString(React.createElement("div", null, "Hello"))
);
// 결과 값 <div>Hello</div>, null은 props으 ㅣ자리

const app = express();

app.use(express.static(path.join(__dirname, "build")));
//  현재 이 파일이 존재하는 단에서 두 번째 인자(폴더)를 찾아 들어감

app.get("/test", (req, res) => {
  const ssr = ReactDOMServer.renderToString(
    React.createElement("div", null, "Hello")
  );
  const indexHtml = fs
    .readFileSync(path.join(__dirname, "build", "index.html"))
    .toString()
    .replace('<div id="root"></div>', `<div id="root">${ssr}</div>`);

  console.log(indexHtml);
  res.send(indexHtml);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// 경로가 정해지지 않은 상황에 index.html을 보여줌

app.listen(9000);
