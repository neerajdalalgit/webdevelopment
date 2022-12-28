import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact Us';
import {NavLink} from 'react-router-dom';
import './css/styles.css';
import Footer from './component/Footer';
import ForntEnd from './component/ForntEnd';
import BackEnd from './component/BackEnd';
import FullStack from './component/Full Stack';
import NotFound from './component/404';
const Navbar = ()=>{

    return(
         <BrowserRouter>
         <div className='navbar'>
        <NavLink to = "/" className='heading'>Home</NavLink>
        <NavLink to = "/forntend" className='heading'>ForntEend</NavLink>
        <NavLink to = "/backend" className='heading'>BackEend</NavLink>
        <NavLink to = "/fullstack" className='heading'>Full Stack</NavLink>
        <NavLink to = "/contact" className='heading'>Contact Us</NavLink>
        
        </div>
        <div>
          
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/forntend" component={ForntEnd} exact />
          <Route path="/backend" component={BackEnd} exact />
          <Route path="/fullstack" component={FullStack} exact />
        <Route path ="/contact" component={Contact} exact />
        <Route component={NotFound}/>
        
        </Switch>
        <Footer/>
        </div>     
               
        </BrowserRouter>
      
        

    )
    
}

export default Navbar;