import { useState } from "react"

function PhoneBookForm({ info, setInfo }) {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    ph: ""
  })
  const inpEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((e) => {
      if (name === 'userFirstname') {
        return {
          name: value,
          lastName: e.lastName,
          ph: e.ph
        }
      } else if (name === 'userLastname') {
        return {
          name: e.name,
          lastName: value,
          ph: e.ph
        }
      } else if (name === 'userPhone') {
        return {
          name: e.name,
          lastName: e.lastName,
          ph: value
        }
      }
    })
  }
  const submitHandler = e => {
    e.preventDefault()
    setInfo([...info, data])
    setData([{
      name: "",
      lastName: "",
      ph: ""
    }])
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
  }
  return (

    <form onSubmit={submitHandler} className="container" >

      <label>First name:</label>
      <br />
      <input className='info-input' name='userFirstname'
        value={data.name}
        type='text' onChange={inpEvent} />
      <br />
      <label>Last name:</label>
      <br />
      <input className='info-input' name='userLastname'
        value={data.lastName}
        type='text' onChange={inpEvent} />
      <br />
      <label>Phone:</label>
      <br />
      <input className='info-input' name='userPhone'
        value={data.ph}
        type='text' onChange={inpEvent} />
      <br />
      <input className='submitButton' type='submit' value='Add User' />
    </form >
  )
}
export default PhoneBookForm;
