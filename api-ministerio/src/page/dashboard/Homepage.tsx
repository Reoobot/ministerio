import ButtonHomer from '../../components/buttonHomer/ButtonHomer'
import home from '../../assets/home.png'
import Footer from '../../components/footer/Footer'

function Homepage() {
  return (
    <div>
      <div className=''>
      <img src={home} alt="" className='position-absolute image-home w-100' />
        <ButtonHomer />
      </div>
      
    </div>
  )
}

export default Homepage
