import proposito from '../../../assets/proposito.jpeg'
import familia from '../../../assets/familia.jpeg'
import adoracion from '../../../assets/adoracion.jpeg'
import Footer from '../../../components/footer/Footer'


function SocialPage() {
  return (
    <>
   <div className='carosul-ba'>

   <div className='carousel-m'>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-inner">
      <div className="carousel-item active imagen-carousel ">
  
             <img src={proposito} className='d-block card-img-top m-5 imagen-carousel1 imagen'  alt="..."/>
                <a href="/Social/BeginPage">
                  <p className='tex-image fs-2 fw-bold text-decoration-underline text-center mt-4'>Comienza aqui</p>
                </a>
    </div>
    <div className="carousel-item imagen-carousel">
             <img src={familia} className='d-block card-img-top m-5 imagen-carousel1 imagen'  alt="..."/>

             <p className='tex-image fs-2 fw-bold text-decoration-underline text-center mt-4'>Crecer aquí</p>
    </div>
    <div className="carousel-item imagen-carousel">
             <img src={adoracion} className='d-block card-img-top m-5 imagen-carousel1 imagen'  alt="..."/>
                <a href="/Social/Adoracion">
                    <p className='tex-image fs-2 fw-bold text-decoration-underline text-center mt-4'>Adoración</p>
                </a>
    </div>
  </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
      </button>
   </div>
</div>

<div>

</div>
<div>


</div>
</div>
<Footer/>

      
    </>
  )
}

export default SocialPage
