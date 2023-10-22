import {useParams, useLocation, Link} from 'react-router-dom'
import Nav from '../components/navbar'
import {Button} from 'theme-ui'
function Details () {
    const {countryname} = useParams();
    const location = useLocation()
    const countryInfo = location.state
    return (
        <>
        <div className="detail-contain">

        <Nav />
        <div className='detail-main-contain'>
       <Button className='home-button ' ><i className="fa-solid fa-arrow-left"></i> <Link to={'/'} className='text-left'>Back  </Link></Button>
       
        <div className='detail-main'>

            <img src={countryInfo.flags.png} alt="" />


            <span className='grid grid-cols-2 detail-main-info text-left'>
        <h1 className='countryname'>{countryname}</h1>
        <br />
        <p>Native Name: <span>{countryInfo.nativeName}</span></p>
        <p>Top Level Domain: <span>{countryInfo.tld[0]}</span></p>
        <p>Population: <span>{countryInfo.population}</span></p>
        <p>Currencies: <span>{countryInfo.currencies[0]}</span></p>
        <p>Region: <span>{countryInfo.region}</span></p>
        <p>Languages: <span></span></p>
        <p>Sub Region: <span>{countryInfo.subregion}</span></p>
        <br />
        <p>Capital: <span>{countryInfo.capital}</span></p>
       

        
            </span>
        </div>
        </div>
        </div>
    </>
    )

}

export default Details