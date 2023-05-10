import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fotawesome'


export type Image = {
  _id: string;
  filename: string
}

function FileUpload() {

  const [image, setImage] = useState('')
  const [Loading, setLoading]= useState(false)

  const uploadHandler = async (e:any)=>{
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload', 'images')
    setLoading(true)
    const res = await 

      fetch('http://localhost:3000/api/v1/images/upload', 
            {
              method: 'POST',
              body: data,
              mode: 'cors'
            }
        )

        const file = await res.json()
        console.log(res);
        setImage(file.secure_url)
        setLoading(true)
        console.log(true);
        
        
    }
 


  return (
    <div>
      <div className='file-card'>
        <div className='file-inputs'>
  
        </div>
      </div>
      <div>
      <input className='btn btn-danger'
            type="file"
            name='file'
            onChange={uploadHandler} 
            />
      </div>
  
    
    </div>
  )
}

export default FileUpload


