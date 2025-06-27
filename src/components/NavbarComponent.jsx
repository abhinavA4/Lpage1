import React from "react";

const NavbarComponent = () =>{
    return(
        <navbar className="flex justify-around text-white mx-23 font-[Space_Grotesk] bg-black">
            <div className="border-y-2 border-l-2  py-2 px-5 text-center font-bold text-2xl">ZERDENCE</div>
            <div className="flex-auto h-13 border-2 border-white"><img src="p1.png" className="w-full h-full object-cover"/></div>
            <div className="flex justify-evenly">
                <div className="h-13 p-3  border-y-2 border-r-2 text-center">ABOUT US</div>
                <div className="h-13 py-3 px-5 border-y-2 border-r-2 text-center">TEAM</div>
                <div className="h-13 py-3 px-5 border-y-2 border-r-2 text-center">SERVICES</div>
                <div className="h-13 py-3 px-5 border-y-2 border-r-2 text-center">SHOWCASE</div>
                <div className="h-13 py-3 px-5 border-y-2 border-r-2 text-center">CONTACT US</div>
            </div>
        </navbar>
    );
};

export default NavbarComponent;