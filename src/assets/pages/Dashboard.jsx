import React from 'react'
import './../../App.css'
import Img from './../images/manstandrmbg.png'

const Dashboard = () => {
  return (
    <div className='h1'>
      <img className='img' src={Img} />
     <h2 className='hello'>Hello, I'm Mayank Sharma</h2>
     <p className='p1'>A passionate Front-End Developer with a keen eye for design and a love for crafting seamless user experiences. I specialize in turning ideas into responsive, interactive, and visually appealing websites.
With expertise in HTML, CSS, JavaScript, React, and modern front-end frameworks, I focus on building scalable and efficient web applications that not only look great but also function flawlessly. My approach combines clean code, performance optimization, and user-centered design to create digital experiences that engage and inspire.
I enjoy collaborating with designers and back-end developers to bring projects to life, ensuring that every detail aligns with the vision and goals of the product. Whether it's developing a sleek landing page, an intuitive dashboard, or a dynamic web app, I thrive on solving problems and pushing the boundaries of front-end development.
When I'm not coding, you'll find me exploring new design trends, experimenting with animations, or learning the latest web technologies to stay ahead in this ever-evolving field.</p>
<p className='p2'>Let’s build something amazing together! 🚀</p>

    <h2 className='exp'>Area Of expertise</h2>

    <label className='l1'>React Js</label>
    <label className='l1'>JavaScript</label>
    <label className='l1'>HTML</label>
    <label className='l1'>CSS</label>
    <br />
    <br />
    <br />
    <br />
    <label className='l1'>Java</label>
    <label className='l1'>Python</label>
    <label className='l1'>Problem Solving</label>
    <label className='l1'>C/C++</label>
    

    </div>
  )
}

export default Dashboard
