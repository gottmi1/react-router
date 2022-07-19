import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams()
  const id = params.id;
  console.log(id, typeof id);

  return <div><h2>Profile입니다</h2>
  {id && <p>ID : {id}</p>}
  </div>
}