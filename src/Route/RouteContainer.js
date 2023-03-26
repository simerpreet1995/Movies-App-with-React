import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from '../Container/About/About'
import Contact from '../Container/Contact/Contact'
import Details from '../Container/Details/Details'
import Home from '../Container/Home/Home'
import Movies from '../Container/Movies/Movies'
import Search from '../Container/Search/Search'
import TvSeries from '../Container/TVSeries/TvSeries'


import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function RouteContainer() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="/series" element={<TvSeries/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/details/:movieid/:mediatype" element={<Details/>}></Route>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default RouteContainer
