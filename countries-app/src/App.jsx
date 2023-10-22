import { useState, useEffect } from 'react'
import Card from './components/card'
import Nav from './components/navbar'
import './App.css'
import { Outlet } from 'react-router-dom';
import { Button, Input, Select } from 'theme-ui'

function App() {
 const [data, setData] = useState([])
 const [x, setX] = useState('')
 const [q, setQ] = useState('')

 useEffect(() => {
  getCountries();
}, [0]);


 const getCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    return response.json()
  })
  .then (data => {
    setData(data)
    console.log(data)
  })

 }

 const handleRegionChange = (e) => {
  const region = e.target.value;
  setX(region);
  handleRegionSearch(region);
};

      const handleRegionSearch = (x) => {
        fetch(`https://restcountries.com/v3.1/name/${x}`)
        .then(response => {
          return response.json()
        })
        .then (data => {
          setData(data)
          console.log(data)
        })
      }

      const handleCountrySearch = (q) => {
        fetch(`https://restcountries.com/v3.1/name/${q}`)
        .then(response => {
          return response.json()
        })
        .then (data => {
          setData(data)
          console.log(data)
        })
      }

  return (
    <>
      <div className='contain grid'>
      <Nav />
      <div className='grid main-contain flex justify-between mt-9 '>
        <div className='text-left'>
          <Input type="text" placeholder='Search for a country...' className='px-7 py-5 search' autofillBackgroundColor="primary"
          value={q} onChange={(event) => setQ(event.target.value)}
          onKeyPress={(event) => {
            if (event.key ==='Enter'){
              handleCountrySearch(q)
            }
          }}
          />
        </div>
        <div className='text-right filter justify-end flex'>
        <Select name="" id="region" onChange={handleRegionChange} className=''>
        <option value="" disabled selected hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Ocieania</option>
        </Select>
        {x ?
        <Button onClick={() =>{
          getCountries()
          setX('')
        }} className='reset-button'>Reset</Button>
        : null}
        </div>

        <div className='card-grid'>
        {data.map((country, index) => (
          <Card key={country.name.official} country={country}> </Card>

            
            ))}
        </div>

      </div>
      </div>
   <Outlet />
    </>
  )
}

export default App
