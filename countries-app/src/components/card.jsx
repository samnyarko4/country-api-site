import img from '../assets/download.jpg'
import {Link} from 'react-router-dom'
import {Box} from 'theme-ui'
function Card (props){

    const country = props.country
    const countryname = props.country.name.official

    return(
        <>
        <Link to={`/details/${countryname}`} state={country} >
    <Box bg="primary" className='card text-left'>
        <img src={country.flags.png} alt="" />
        <h1 className='country-name'>{country.name.official}</h1>
        <div className='card-info'>
        <h3 className='h3-title'>Population: <span>{country.population}</span></h3>
        <h3 className='h3-title'>Region: <span>{country.region}</span></h3>
        <h3 className='h3-title'>Capital: <span>{country.capital}</span></h3>
        </div>

    </Box>
    </Link>

</>

    )
}
export default Card