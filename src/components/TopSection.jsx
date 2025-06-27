import React from "react";
import Button1 from "../buttons/Button1";
import Buttons2 from "../buttons/Buttons2";
import AutoScrollText from "./AutoScrollText";

const TopSection = () =>{
    return(
        <section className="flex flex-col justify-center items-center py-16 border-x-2 border-white mx-23 text-white font-[Space_Grotesk] min-h-screen">
            <Button1/>
            <top className="text-7xl text-center py-10">
                <div>Transforming <span className="bg-purple-600">Ideas</span> Into</div>
                <div>Seamless Digital Products</div>
            </top>
            <mid className="text-2xl">
                <div>Build Your Product Fast, Affordable, and Stress-Free</div>
            </mid>
            <div className="py-10">
                <Buttons2/>
            </div>
            <div className="pt-16">
                <AutoScrollText/>
            </div>
        </section>
    );
};

export default TopSection;