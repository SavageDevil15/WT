import React from 'react'
import NavBar from "./NavBar"
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
	<div>
		<NavBar />
		<Container id="main-container" className='d-flex justify-content-center'>
			<img src="./images/book2.avif" className='home-book-img' alt="" />
		</Container>
	</div>
  )
}

export default Home