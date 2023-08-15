import { Link } from "react-router-dom";
import supabase from "../confiig/SupabaseClient";

interface PassengerProps {
  passenger: {
    id: number;
    name: string;
    last_name: string;
    village: string;
    lekgotla: string;
    id_number: string;
    contact_number: string;
  };

  onDelete: (id: number) => void;
}

const PassengerCard = ({ passenger, onDelete }: PassengerProps) => {
  const handleDelete = async () => {
    try {
      const { data, error } = await supabase
        .from("Passenger")
        .delete()
        .eq("id", passenger.id);

      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        onDelete(passenger.id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
  
<tr key={passenger.id} className="Table_content">
        <td>{passenger.name}</td>
        <td>{passenger.last_name}</td>
        <td>{passenger.lekgotla}</td>
        <td>{passenger.village}</td>
        <td>{passenger.contact_number}</td>
        <td>{passenger.id_number}</td>
        <td>
          <Link to={"/" + passenger.id}>Edit</Link>
        </td>
        <td>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>

     

  );
};


export default PassengerCard;
