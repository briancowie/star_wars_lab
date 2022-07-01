const TeaList = ({ teas, onTeaDelete }) => {
  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map(tea => {
          return (
            <li 
              key={tea.id}>
                <p>{tea.name} by {tea.brand}</p>
                <button onClick={() => onTeaDelete(tea.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TeaList