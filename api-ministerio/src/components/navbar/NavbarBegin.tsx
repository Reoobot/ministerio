import React from 'react'
import proposito1 from '../../assets/proposito1.jpeg'

function NavbarBegin() {
  return (
    <div>

        <div className='m'>
   
        </div>
        <nav className="navbar navbar-expand-lg navbar-light navbegin">
               
   <div className="container-fluid ">
   <div></div>

     <button className="navbar-toggler bg-light" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon bg-light"></span>
     </button>
 
 
     
     <div className="collapse navbar-collapse" id="navbarNav" data-bs-toggle="modal" aria-label='Close'>
    
       <ul className="navbar-nav">
         <li className="nav-item">
           <a className="nav-link active text-white fw-bold" aria-current="page" href="/homepage">Inicio</a>
         </li>
         <li className="nav-item">
           <a className="nav-link text-white fw-bold" href="/uploadImagen">Galeria de Imagen</a>
         </li>
         <li className="nav-item">
           <a className="nav-link text-white fw-bold" href="/Social">Social</a>
         </li>
         <li className="nav-item">
           <a className="nav-link text-white fw-bold" href="/upload">Deshabilitado</a>
         </li>
       </ul>
     </div>
   </div>
 </nav>
    </div>
  )
}

export default NavbarBegin
