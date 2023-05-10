import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../page/home/Imagen'
import Detail from '../../page/detail/Detail'
import Homepage from '../../page/dashboard/Homepage'
import Layout from '../layout/Layout'
import UploadImagen from '../../page/home/Imagen'
import Upload from '../upload/Upload'
import SocialPage from '../../page/dashboard/social/SocialPage'
import BeginPage from '../../page/dashboard/begin/BeginPage'
import Adoracion from '../../page/dashboard/Adoracion'

function AppRouters() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home _id={''} filename={''} />}/>
        <Route path='/detail/:_id' element={<Detail/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/uploadImagen' element={<UploadImagen _id={''} filename={''}/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/Social' element={<SocialPage/>}/>
        </Route>
        <Route path='/Social/BeginPage' element={<BeginPage/>}/>
        <Route path='/Social/Adoracion' element={<Adoracion/>}/>
      </Routes>
    </>
  )
}

export default AppRouters
