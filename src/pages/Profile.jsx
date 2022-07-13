export default function Profile(props) {
  const id = props.match.params.id;
  console.log(id, typeof id);

  return <div><h2>Profile입니다</h2>
  {id && <p>ID : {id}</p>}
  </div>
}