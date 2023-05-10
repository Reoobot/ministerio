import { useEffect, useState } from 'react'
import { getImageRequest } from '../../services/imageService'
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import CardImagen from '../../components/cardimagen/CardImagen';
import UploadContainer from '../../components/uploadcontainer/UploadContainer';
import Footer from '../../components/footer/Footer';


export type Image = {
    _id: string;
    filename: string
  }

function AllImagen(image:Image) {
    const [images, setImages] = useState<Image[]>([])
    const [Loading, setLoading]= useState(false)
    
  useEffect(() => {
    const loadImage = async ()=>{
    const response = await getImageRequest(image)
      console.log(response.data)
      setImages(response.data)
      setLoading(true)
    }
    loadImage()
    },[])

    function renderMain(){
      if(images.length === 0){
        return <h1>No Imagen</h1>
      } else{
        return  <div className='container mt-3' style={{display:'flex', flexWrap:'wrap'}}>
          {
                 images?.map(image =>(
                <div key={image._id} className='card m-2'>
                  <div className='social'>
                      <img src= {image?.filename}  alt="" className='card-img-top m-5 imagen' style={{height:'200px', width:'200px'}} />
                      <CardImagen image={image} />
                  </div>
              </div>          
                    ))
          }
        </div> 
      }              
    }
    const params = useParams <Image>()


  return (
    <>
         
         <h1 className='fs-2 fw-bold text-decoration-underline text-center mt-4'>Galeria de Imagen</h1>
            <div className='m'>
              <h1>{params._id ? "Edit":""}</h1>
              <div className=''>
                  {renderMain()}
              </div>
            </div>
            <Footer/>
    </>
  )
}

export default AllImagen
