
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState} from 'react'
import supabase from '../confiig/SupabaseClient'

const Update  =() => {
   const {id} = useParams()
   const navigate = useNavigate()

   const [name, setName] = useState('')
   const [last_name, setLast_name] = useState('')
   const [village, setVillage] = useState('')
   const [lekgotla, setLekgotla] = useState('')
   const [id_number, setId_number]= useState('')
   const [contact_number, setContact_number]= useState('')
   const [formError, setFormError] = useState('')

   const handleSubmit = async (e: React. FormEvent) =>{
    e.preventDefault()

    if (!name || !last_name ||  !village || !lekgotla || !id_number  || !contact_number   ) {
      setFormError("Please fill in all required fields")
      return
  }

  try {
    const {data, error} =  await supabase
    .from ('Passenger')
    .update({name, last_name, village, lekgotla, id_number, contact_number})
    .eq('id',id)
    .single()

    if(error){
      setFormError("Please fill in all required fields")
      
    }

    if (data) {
      setFormError(null)
      navigate('/', {replace: true} )
    }

   } catch (error){
    console.error(error)
    setFormError("Please fill in all required fields")
   }
  }

   useEffect(()=>{
    const fetchPassenger = async () => {
      try {
      const {data, error} = await supabase
      .from('Passenger')
      .select()
      .eq('id', id)
      .single()

      if(error){
           navigate('/', {replace: true})
          
      }

      if (data){
       setName(data.name)
       setLast_name(data.last_name)
       setVillage(data.village)
       setLekgotla(data.lekgotla)
       setId_number(data.id_number)
       setContact_number(data.contact_number)
      }
       
      } catch (error){
        console.error(error)
        navigate('/',{replace: true})
    }
  }
    fetchPassenger()
   },[id, navigate])


  return (
    <div>
      <h2>Update : {id}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
        type="text"
        id="name"
        value={name}
        onChange={(e)=> setName(e.target.value)} 
        />


        <label htmlFor="name">Last Name:</label>
        <input 
        type="text"
        id="last_name"
        value={last_name}
        onChange={(e)=> setLast_name(e.target.value)} 
        />

        <label htmlFor="village">Village:</label>
        <input
          type="text"
          id="village"
          value={village}
          onChange={(e)=> setVillage(e.target.value)}/>

          <label htmlFor="lekgotla">Lekgotla:</label>
          <input
            type="text"
            id="lekgotla"
            value={lekgotla}
            onChange={(e)=>setLekgotla(e.target.value)}/>

            <label htmlFor="id_number">Id:</label>
            <input
            type="text"
            id="id_number"
            value={id_number}
            onChange={(e)=> setId_number(e.target.value)}/>

<label htmlFor="id_number">Contact Number:</label>
            <input
            type="text"
            id="contact_number"
            value={contact_number}
            onChange={(e)=> setContact_number(e.target.value)}/>

            <button onClick={handleSubmit}>Update New Person details</button>
                {formError && <p>{formError}</p>}
        </form>
    </div>
  )
}

export default Update
