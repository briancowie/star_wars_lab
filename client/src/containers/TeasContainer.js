import { useEffect, useState } from 'react'
import TeaList from '../components/TeaList'
import NewTeaForm from '../components/NewTeaForm'

const TeasContainer = ({ baseUrl }) => {

  const [teas, setTeas] = useState([])

  useEffect(() => {
    fetchTeas()
  }, [])

  const fetchTeas = () => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(teas => setTeas(teas));
  }

  const handleTeaSubmit = newTea => {
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(newTea),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(fetchTeas)
  }

  const handleTeaDelete = (id) => {
    fetch(baseUrl + id, {
      method: 'DELETE'
    })
      .then(fetchTeas)
  }

  return (
    <>
      <NewTeaForm 
        onTeaSubmit={handleTeaSubmit}
      />
      <TeaList 
        teas={teas} 
        onTeaDelete={handleTeaDelete}
      />
    </>
  )
} 
export default TeasContainer

