import {useState} from 'react'

function SortBy() {

    const [created, setCreated] = useState("crated_at")

    const options =[
        {value:"created_at", label: "Time Created"},
        {value:"name", label: "Name"},
        {value:"last_name", label: "Last Name"},
        {value:"village", label: "Village"},
        {value:"lekgotla", label: "Lekgotla"},
             
    ]
  return (
    <div>
      <select
      value={created}
      onChange={(e) => setCreated(e.target.value)}>
<option
value=""
disabled> Sort by </option>
 {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
      </select>

    </div>
  )
}

export default SortBy
