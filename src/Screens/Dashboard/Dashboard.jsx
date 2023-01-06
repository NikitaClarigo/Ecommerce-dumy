import React, { useEffect } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


export default function Dashboard() {

    const navigate=useNavigate()

    useEffect(() => {
      return () => {
        navigate('Dashboard')
      }
    }, [])
    


  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
