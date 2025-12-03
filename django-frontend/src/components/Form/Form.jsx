
import "./Form.css"
const Form = ({ formAction, view , formValues, formSubmit, formChange}) => {

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