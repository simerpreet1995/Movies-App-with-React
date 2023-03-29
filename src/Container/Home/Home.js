import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import axios from 'axios'

import Cardmovies from '../../Components/CardMovies/Cardmovies';

function Home() {

  const [content, setContent] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [paginationNo, setPaginationNo] = useState(0);

  const API_KEY = 'bda4fdb2e92c9ee0e1e43c6e9e390599';

  const getDataTrending = async ()=> {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageNo}`);
    setContent(data.results);
    setPaginationNo(data.total_pages)
    console.log('data', data)
  }

  useEffect(()=>{
    getDataTrending()
  },[])
  return (
    <main className='homePage'>
    <Container>
      <Row>
        <Col className='col-12'>
          <section>
              <h1 className='txtCenter'>Top Trending</h1>
              <h3 className='txtCenter'>Tv and Movies For You</h3>
          </section>
          
        </Col>
        {
          content && content.length > 0 ? content.map(item =>
              <Cardmovies key={item.id} data={item} mediaType="tv"/>
            ) : 'Loading Content Please Wait'
        }
      </Row>
    </Container>
    </main>
  )
}

export default Home
