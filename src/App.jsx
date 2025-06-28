import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import TopSection from './components/TopSection';
import Footer from './components/Footer';
import Mid from './components/Mid';

const App = () =>{
    return(
        <div className='bg-black'>
            
            <div className='sticky top-0'>
                <NavbarComponent/>
            </div>
            <TopSection/>
            <Mid/>
            <Mid1/>
            <Mid2/>
            <Mid4/>
            <Footer/>
        </div>
    );
};
export default App;