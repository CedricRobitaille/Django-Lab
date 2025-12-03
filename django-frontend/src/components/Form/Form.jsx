import { useEffect, useState } from "react"
import "./Form.css"

const Form = ({ formAction, view }) => {

  const [formValues, setFormValues] = useState([])
  const [title, setTitle] = useState("")

  const companyModel = {
    name: "", 
    industry: "",
  }
  const locationModel = {
    street_number: "",
    street: "",
    city: "",
    state: "",
  }

  useEffect(() => {
    const initForm = () => {
      setTitle("Create a new Company")
      setFormValues(companyModel)
    }
    initForm();
  }, [])


  const formSubmit = (e) => {
    e.preventDefault();
    if ("id" in formValues) {
      console.log(formValues)
    } else {
      console.log(formValues)
    }
    setFormValues(companyModel);
  }

  const formChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={formSubmit} className="main-form">
      {formAction = "create" ? <h2>Create a new {view}</h2> : <h2>Edit {formValues}</h2>}

      <ul>
        {Object.keys(formValues).map((input, index) => (
          <li key={index}>
            <label htmlFor={input}>{input}</label>
            <input type="text" name={input} value={formValues[input]} onChange={formChange} placeholder={input} required/>
          </li>
        ))}
      </ul>

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form