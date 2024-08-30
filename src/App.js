import { useEffect, useState } from 'react'
import * as db from './frontend/db'
import * as dbView from './frontend/dbView'
import * as api from './frontend/api'
import * as apiView from './frontend/apiView'
import './App.css'


function App() {
  const [view, setView] = useState()

  const [dbUsers, getdbUsers] = useState()
  const [dbChampions, getdbChampions] = useState()

  const [apiUsers, getapiUsers] = useState()
  const [apiChampions, getapiChampions] = useState()

  const [input, setInput] = useState()
  const [apiItem, setapiItem] = useState()

  const handleInputChange = (event) => {
    setInput(event.target.value)
}

  useEffect(() => {
    api.getChampions(getapiChampions)
  }, [])

  return (
    <div className='parent'>

      <div className='first'>
        <button style={{ width: '5vw' }} onClick={() => setView('db')}>Database</button>
        <button style={{ width: '5vw' }} onClick={() => setView('api')}>Api</button>
      </div>

      <div className='second'>
        <input style={{ width: '10vw', height: '2vh' }} onChange={handleInputChange} placeholder="Søk bruker eller Champion" />
        <button style={{ width: '3vw', height: '2.5vh' }} onClick={() => {setapiItem(input)}}>Søk</button>
      </div>

      <div className='third'>
        {view === 'db' ? <dbView.DbView /> : <apiView.ApiView champions = {apiChampions} apiItem = {apiItem} />}
      </div>

    </div>
  )
}

export default App
