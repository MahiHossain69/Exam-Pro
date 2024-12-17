import React from 'react'
import Logo from "../assets/Logo.jpg"
import Container from './Container'

function Header() {
  return (
    <Container className="px-[150px]">
      <header class="bg-white  h-24 hidden md:flex">
  <a href="" class=" flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
  <img src={Logo}></img>
  </a>
  <nav class="header-links contents font-semibold text-base lg:text-lg">
    <ul class="flex items-center mx-auto ">
      <li class="p-3 xl:p-6 active">
        <a href="">
          <span>Home</span>
        </a>
      </li>
      <li class="p-3 xl:p-6">
        <a href="">
          <span>About</span>
        </a>
      </li>
      <li class="p-3 xl:p-6">
        <a href="">
          <span>Service</span>
        </a>
      </li>
      <li class="p-3 xl:p-6">
        <a href="">
          <span>Portfolio</span>
        </a>
      </li>
      <li class="p-3 xl:p-6">
        <a href="">
          <span>Price</span>
        </a>
      </li>
      <li class="p-3 xl:p-6">
        <a href="">
          <span>Blog</span>
        </a>
      </li>
      
    </ul>
  </nav>
  
  <div class=" flex items-center px-4 lg:px-6 xl:px-8">
    
    <button class="bg-[#FF7628] hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-[50px]">Contact Me</button>
  </div>
</header>
    </Container>
  )
}

export default Header
