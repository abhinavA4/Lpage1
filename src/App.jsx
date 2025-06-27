import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import TopSection from './components/TopSection';
import Footer from './components/Footer';

const App = () =>{
    return(
        <div className='bg-black'>
            
            <div className='sticky top-0'>
                <NavbarComponent/>
            </div>
            <TopSection/>
            <Footer/>
        </div>
    );
};
export default App;