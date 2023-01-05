import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './home.css';
import Main from '../Main/Main';
import Men from '../Men/Men';
import Women from '../Women/Women';
import Kids from '../Kids/Kids';
import HomeandLiving from '../HomeandLiving/HomeandLiving';
import Beauty from '../Beauty/Beauty';

export default function Home() {
  return (
    <div>
      <Router>
        <div className="main-body">
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='Men' element={<Men />} />
            <Route path='Women' element={<Women />} />
            <Route path='Kids' element={<Kids />} />
            <Route path='HomeandLiving' element={<HomeandLiving />} />
            <Route path='Beauty' element={<Beauty />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}
