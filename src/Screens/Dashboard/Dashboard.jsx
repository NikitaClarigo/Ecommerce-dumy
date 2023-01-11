/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */



import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import Header from '../../Components/Header/Header';
// import Footer from '../../Components/Footer/Footer';


export default function Dashboard() {
  const navigate = useNavigate()


  useEffect(() => {
    return () => {
      navigate('/Dashboard')
    }
  }, [])

  return (
    <div>
      <Outlet />
    </div>
  )
}
