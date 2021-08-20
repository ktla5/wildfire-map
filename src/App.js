import Map from './components/Map';
import './App.css';
import { useState, useEffect } from 'react';
import LoaderSpinner from './components/LoaderSpinner';
import Header from './components/Header';

function App() {
  
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    
    const fetchEvents = async () =>{
      setLoading(true)
      //const res = await fetch('https://raw.githubusercontent.com/ktla5/calfire-incidents/main/incidents.json')
      const res = await fetch('https://raw.githubusercontent.com/ktla5/us-wildfires/main/incidents.json')
      //const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      //const {Incidents} = await res.json()
      const {markers} = await res.json()

      //setEventData(Incidents)
      setEventData(markers)
      setLoading(false)
    }
    
    fetchEvents()

    console.log(eventData)
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <LoaderSpinner /> }
    </div>
  );
}

export default App;
