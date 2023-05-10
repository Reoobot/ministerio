import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getPictureRequeste } from '../../services/imageService'


export type Image = {
  _id: string;
  filename: string
}

function Detail() {

    const [images, setImages] = useState<Image> ()
    const params = useParams <Image>()
    console.log(params)

  useEffect(() => {
    const loadRecipe = async ()=>{
      if(params._id){
        const response = await getPictureRequeste(params._id)
        console.log(response)
        setImages(response.data)
      }
    }
    loadRecipe()
    }, [])

    const navigate = useNavigate()

  return (
    <>
    <div>
        <h1>paciencia</h1>
        
        <img src={images?.filename} alt="" width='50%' height='50%' className='imagen-detail'/>

        
    <button onClick={()=>navigate('/')} className='button-detail'>HOME</button>
    </div>
    
    </>
  )
  
}

export default Detail
