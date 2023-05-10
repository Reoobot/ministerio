import React from 'react'
import estableciendo from '../../assets/estableciendo.png'

function Footer() {
  return (
    <div>
         <footer className="footer">
                <a href="/homepage"><img src={estableciendo} alt="" width='50px' className='logo-footer'/></a>
                    <div className='argument'>

                <a  className='politica'  data-bs-toggle="modal" data-bs-target="#exampleModalLong">Polítia de privacidad</a>
            <div className="modal fade" id="exampleModalLong"  role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Politicaddddddd</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...dfdfdfdfdfdfffffffffffffffffffffff
                </div>
                </div>
            </div>
            </div>

            <div className='separacion fs-3'>|</div>


            <a  className='término'  data-bs-toggle="modal" data-bs-target="#exampleModalLong">Polítia de privacidad</a>
            <div className="modal fade" id="exampleModalLong"  role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Términos de uso</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    ...dfdfdfdfdfdfffffffffffffffffffffff
                </div>
                </div>
            </div>
            </div>
      
                    </div>

         </footer>
    </div>
  )
}

export default Footer
