import React from 'react';


const Home = () =>{

    return(
        <>
        <div className="container text-center" >
         <h1 className='mt-4 bg-light'> Welcome to developwith dalal </h1>
         <p className='mt-4'>Many peoples are Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>     
      <div>
         
      <button className='bg-black text-white'>Free Courses</button>
      <button className='m-3'>Explore Blog</button>
        </div>

        <div className='container mt-3 text-center'>
            <h2>Recommended Courses</h2>
        </div>
        </div>
        <div className='container  mt-4 '>
        
        <iframe className='container' width="560" height="315" src="https://www.youtube.com/embed/L4_jarMnB0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>

        <div className='mt-4 text-center container'>
        <iframe className='container'  width="560" height="315" src="https://www.youtube.com/embed/-mJFZp84TIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='container mt-4 text-center'>
        <iframe className='container' width="560" height="315" src="https://www.youtube.com/embed/5_5oE5lgrhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='container text-center mt-4'>
        <iframe className='container' width="560" height="315" src="https://www.youtube.com/embed/at19OmH2Bg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='container text-center mt-4'>
        <iframe className='container' width="560" height="315" src="https://www.youtube.com/embed/cvvwkgp4HBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className='container text-center mt-4'>
        <iframe className='container' width="560" height="315" src="https://www.youtube.com/embed/gfDE2a7MKjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <div className='text-center mt-4'>
            <h1>Testimonials</h1>
        <div className='text-center bg-light text-black font-monospace border-2'>
            <p className='mt-4'>I don't words to thank this man,I'm really grateful to have this channel and website in my daily routine. If you're a mere beignner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.</p>
            <p className='text-danger'>Neeraj dalal<br/>Full Stack Web Developer</p>
        </div>

        </div>
               
        </>
    )
    }
    export default Home;