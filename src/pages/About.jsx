import queryString from 'query-string'

export default function About(props) {
  const serchParams = props.location.search;
  console.log(serchParams,"searchParams")
  // const result = new URLSearchParams(serchParams);
  // console.log(result.get('detail')) 
  // 라이브러리 없이 쿼리스트링 받아오는 법. 안 씀
  const query = queryString.parse(serchParams)
  console.log(query,"query")
  // 같은 걸 가져오는데도 훨씬 간단하고 보기쉽게 가져올 수 있음


  return <div><h2>About입니다</h2>
  {query.detail && <p> 결과 :  {query.detail}</p>}
  </div>
}