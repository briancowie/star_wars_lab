import { useState } from 'react'

const NewTeaForm = ({ onTeaSubmit }) => {

  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleBrandChange = (event) => {
    setBrand(event.target.value)
  }

  const resetForm = () => {
    setName('')
    setBrand('')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // ES6's object property shorthand, when key name and variable name are the same:
    const payload = {
      name, // shorthand for `name: name` 
      brand // shorthand for `brand: brand`
    }
    onTeaSubmit(payload)
    resetForm()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />

      <label htmlFor="brand">Brand:</label>
      <input type="text" name="brand" value={brand} onChange={handleBrandChange} />

      <input type="submit" value="Save" />
    </form>
  )
}

export default NewTeaForm