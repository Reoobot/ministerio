import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FileUpload from '../fileupload/FileUpload'




function Upload() {

  return (
    <div className='App'>
      <p className='title'>Upload file</p>
      <FileUpload/>
      
    </div>
  )
}

export default Upload

