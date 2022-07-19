import React from "react";
import { useHistory, withRouter } from "react-router-dom";
// 리액트 라우터에서 제공하는 Hoc. 이걸로 감싸게 되면 login.js에서 LoginButton에 달리 props를 주지 않아도 이 컴포넌트의 동작에 문제가 없다.

// export default withRouter(function LoginButton(props) {
//   const login = () => {
//     setTimeout(() => {
//       // 히스토리에 경로를 push하면 그 경로로 이동시켜준다.
//       props.history.push("/");
//     }, 1000);
//   };
//   return (
//     <div>
//       <button onClick={login}>쌉빱뚜비두밥</button>
//     </div>
//   );
// });

export default function LoginButton() {
  const history = useHistory();
  const login = () => {
    setTimeout(() => {
      // 히스토리에 경로를 push하면 그 경로로 이동시켜준다.
      history.push("/");
    }, 1000);
  };
  // useHistoru Hooks를 사용. withRouter보다 훨씬 간단하다
  return (
    <div>
      <button onClick={login}>쌉빱뚜비두밥</button>
    </div>
  );
}
