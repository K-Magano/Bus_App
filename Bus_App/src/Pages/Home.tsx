import supabase from "../confiig/SupabaseClient";
import { useEffect, useState } from "react";
//Components
import PassengerCard from "../Components/PassengerCard.tsx";
interface PassengerData {
  id: number;
  name: string;
  last_name: string;
  village: string;
  lekgotla: string;
  id_number: string;
  contact_number: string;
}

const Home = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [passenger, setPassenger] = useState<PassengerData[] | null>(null);
const [created, setCreated] = useState("created_at");

  const handleDelete = (id: number) => {
    setPassenger((prevPassenger) =>
      prevPassenger.filter((passenger) => passenger.id !== id)
    );
  };
  
  useEffect(() => {
    const fetchPassenger = async () => {
      try {
        const { data, error } = await supabase
          .from<PassengerData>("Passenger")
          .select()
          .order(created, { ascending: false });
        if (error) {
          setFetchError("Passenger not found");
          setPassenger(null);
          console.log(error);
        }
        if (data) {
          setPassenger(data);
          setFetchError(null);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPassenger();
  }, [created]);

  return (
    <div>
      <h2>Home</h2>
      {fetchError && <p>{fetchError}</p>}
      {passenger && (
        <div>
             
          <div className="Home_Button_Container">
            <p>Sort by :</p>
         
            <button
              className="Home_Buttons"
              onClick={() => setCreated("created_at")}
            >
              Time Created
            </button>
            <button className="Home_Buttons" onClick={() => setCreated("name")}>
              Name
            </button>
            <button
              className="Home_Buttons"
              onClick={() => setCreated("last_name")}
            >
              Last name
            </button>
            <button
              className="Home_Buttons"
              onClick={() => setCreated("village")}
            >
              Village
            </button>
            <button
              className="Home_Buttons"
              onClick={() => setCreated("lekgotla")}
            >
              Lekgotla
            </button>
          </div>
          
          <table className="Table">
            <thead className="Table_Header">
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Lekgotla</th>
                <th>Village</th>
                <th>Contact Number</th>
                <th>ID Number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {passenger.map((passenger) => (
                <PassengerCard
                  key={passenger.id}
                  passenger={passenger}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
