import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteImage, getImageRequest, getPictureRequeste } from '../../services/imageService';
import { get } from 'mongoose';

export type Image = {
    _id: string;
    filename: string
  }


function CardImagen({image}:any) {
    
  const handleDelete = async (_id:Image)=>{
    try {
      const response = await deleteImage(_id)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    
  }  

  const navigate = useNavigate()
  
  return (
    <div className='button-delete'>
      
         <button onClick={() =>handleDelete(image._id)} type="button" className="btn bg-primary-subtle "> 
      DELETE
         
         </button>

         <button onClick={()=>navigate(`/detail/${image._id}`)} type="button" className="btn btn-primary">Detail</button>
      
    </div>
  )
}

export default CardImagen
