import React from 'react'
import estableciendo from '../../assets/estableciendo.png'

type Props={}
function Navbar(props:Props) {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light  nav">
   
  <div className="container-fluid ">
   
    <a href="/homepage" className='a'><img src={estableciendo} alt="" width='90px' className='logo'/></a>
    <button className="navbar-toggler bg-light" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>


    
    <div className="collapse navbar-collapse fs-3 m-lg-5" id="navbarNav" data-bs-toggle="modal" aria-label='Close'>
   
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/homepage">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/uploadImagen">Galeria de Imagen</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/Social">Social</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/upload">Deshabilitado</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
  )
}

export default Navbar
