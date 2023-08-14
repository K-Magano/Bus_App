
import {Link} from "react-router-dom"
import supabase from "../confiig/SupabaseClient"


interface PassengerProps {
  passenger:{
    id:number;
  name:string;
  village:string;
  id_number: string
  lekgotla: string}
  

onDelete:(id: number) => void
}

const Passenger = ({passenger, onDelete}: PassengerProps) => {

  const handleDelete = async () => {
    try {
   const {data, error} = await supabase
       .from('Passenger')
       .delete()
       .eq('id', passenger.id)

       if (error) {
        console.log(error)
    
  }
  if(data){
    console.log(data)
    onDelete(passenger.id)
  }
} catch (error){
  console.log(error)
}
}
  return (
    <div>
 
      <h3>{passenger.name}</h3>
      <p>{passenger.village}</p>
      <p>{passenger.id_number}</p>
      <p>{passenger.lekgotla}</p>
      <div>
        <Link to ={"/"+ passenger.id}>
          Edit
        </Link>
        <br></br>
        <button onClick={handleDelete}>Delete</button>

      </div>
     
    
    </div>
  )
}

export default Passenger
