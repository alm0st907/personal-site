import './App.css'
import {Link} from "react-router-dom";

function App() {

  return (
    <>
        <h1 className="text-3xl font-bold flex items-center justify-center">
            This site is under construction :)
        </h1>
        <Link to={'/construction'}>Wanna see what's there?</Link>
    </>
  )
}

export default App
