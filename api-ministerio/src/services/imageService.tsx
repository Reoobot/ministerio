import axios from "axios"
import {AImages} from '../../src/assets/interface/InterfaceImagen'

const baseRecipeUrl = 'http://localhost:3000/api/v1/images'

// class UploadSerivce {
//    getImages(){
//       return axios.get('http://localhost:3000/api/v1/images')
//    }
//    sendImages (image:AImages){
//       return axios.post('http://localhost:3000/api/v1/images/upload', image)
//    }
// }

export const UploadService = async (image:AImages)=>{
   return await axios.post('http://localhost:3000/api/v1/images/upload', image)
}

// export default new UploadSerivce ()

// ----------SHOULD ALL------------//
export const getImageRequest = async (file:any) =>{
   return await axios.get(baseRecipeUrl)
}

// ----------SHOULD ONE------------//


export const getPictureRequeste = async (id:any) =>{
    return await axios.get(baseRecipeUrl + `/picture/${id}`)
 }

 // ----------DELETE ALL------------//

export const deleteImage = async (id:any) =>{
   return await axios.delete(baseRecipeUrl + `/picture/${id}`)
 }


//  export const UploadService = async (image:AImages)=>{
//    return await axios.post('http://localhost:3000/api/v1/images/upload')
//  }

 
 









// import axios from "axios"
// import URLBASE from "./urlConstants"

// export const getImageRequest = async ()=>{
//     return axios.get(URLBASE)
// }

// class UploadService {
//     getImages(){

//     }
//     sendImages(name:any, file:any ){
//         const form = new FormData()
//         form.append('name', name)
//         form.append('file', file, 'form-data')

//         return axios.post(`${URLBASE}/${file.filename}`, form)
        
//     }
// }

// export default new UploadService()