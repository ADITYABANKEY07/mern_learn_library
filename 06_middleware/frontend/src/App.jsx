import axios from 'axios'

const App = () => {
  let handleHome = async (e) => {
    e.preventDefault()
    let api = "http://localhost:3001/home"
    let res = await axios.get(api)
  }
  let handleAbout = async (e) => {
    e.preventDefault()
    let api = "http://localhost:3001/about"
    let res = await axios.get(api)
  }
  return (
    <div>
      <button onClick={handleHome} >Home</button>
      <button onClick={handleAbout} >About</button>
    </div>
  )
}

export default App