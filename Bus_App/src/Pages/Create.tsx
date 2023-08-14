
import supabase from "../confiig/SupabaseClient"
import { useState } from "react"
import  {useNavigate} from "react-router-dom"

const Create =() => {
const navigate = useNavigate()

 const [name, setName] = useState('')
 const [last_name, setLast_name] = useState('')
 const [village, setVillage] = useState('')
 const [lekgotla, setLekgotla] = useState('')
 const [id_number, setId_number]= useState('')
 const [contact_number, setContact_number]= useState('')
 const [formError, setFormError] = useState('')

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

   if (!name || !last_name ||  !village || !lekgotla || !id_number  || !contact_number || !formError) {
       setFormError("Please fill in all required fields")
       return
   }
//Adding a row of data to Supabase
/* DATA is The new row that we would have added*/
try{ 
const {data, error} =await supabase
.from ('Passenger')
.insert([{name, last_name, village, lekgotla, contact_number, id_number}])

if(error) {
  console.log(error)
  setFormError("An error occurred while submitting the form")
}

if(data){
 console.log(data)
 setFormError('')
 navigate("/")
}

} catch (error) {
  console.error(error)
  setFormError("An error occurred while submitting the form")
}


}

  return (
    <div>
      <h2>Create</h2>
      <div className="Create_Form">
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name:</label>
        <input 
        type="text"
        id="name"
        value={name}
        className="Create_Input"
        onChange={(e)=> setName(e.target.value)} 
        />
      
      <label htmlFor="name"> Last name:</label>
        <input 
        type="text"
        id="Last name"
        value={last_name}
        className="Create_Input"
        onChange={(e)=> setLast_name(e.target.value)} 
        />
      

        <label htmlFor="village">Village:</label>
        <input
          type="text"
          id="village"
          value={village}
          className="Create_Input"
          onChange={(e)=> setVillage(e.target.value)}/>

          <label htmlFor="lekgotla">Lekgotla:</label>
          <input
            type="text"
            id="lekgotla"
            value={lekgotla}
            className="Create_Input"
            onChange={(e)=>setLekgotla(e.target.value)}/>

<label htmlFor="id_number">ID:</label>
<input
    type="text"
    id="id_number"
    value={id_number}
    className="Create_Input"
    onChange={(e) => {
        const inputID = e.target.value;
        
        if (inputID.length !== 13) {
            // Show an error message or provide visual feedback to the user
            // You can set an error state or display an error message near the input field.
        } else {
            // Input has exactly 13 digits, update the state
            setId_number(inputID);
        }
    }}
/>


            <label htmlFor="contact_number">Contact Number :</label>
            <input
            type="text"
            id="contact_number"
            value={contact_number}
            className="Create_Input"
            onChange={(e)=> setContact_number(e.target.value)}/>

            <button>Add New Person</button>
                {formError && <p>{formError}</p>}
        </form>
        </div>
    </div>
  )
}

export default Create
