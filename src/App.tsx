import './App.css'

function App() {

  const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
  const users = [{name: 'Dimych'}, {name: 'Katya'}, {name: 'Viktor'}, {name: 'Ignat'}]
  const liEllements = users.map((u, index) => <li key={index}>{u.name}</li>)

  return (
    <>
      <ul>{liEllements}</ul>
    </>
  )
}

export default App
