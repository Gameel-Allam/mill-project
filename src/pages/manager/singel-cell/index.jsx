import { useParams } from "react-router-dom";

const SingleCell = () => {
    const { id } = useParams();
    console.log('hi')
  return (
    <div> 
        <h1>Single Cell {id}</h1>
    </div>
  )
}

export default SingleCell
