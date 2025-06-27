import React from "react";

const Footer = () => {
return (
    <div>
        <footer className="bg-black border-x-2 border-white mx-23">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex justify-center text-teal-600">
            <img src="logo.png" className="h-12" />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Make Your Next Career Move!
            </p>
            <div className="flex justify-center items-center gap-12 py-9">
            <div> 
                <img src="fb.svg" className="h-9" />
            </div>
            <div>
                <img src="whap.svg" className="h-9" />
            </div>
            <div>   
                <img src="ig.svg" className="h-9" />
            </div>
            <div>
                <img src="github.svg" className="h-9" />
            </div>
            <div>
                <img src="x.svg" className="h-9" />
            </div>
            </div>
            <div className="  border-t border-gray-100 pt-8 dark:border-gray-800">
            <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
                © Zerdence Technologies LLP 2025. All rights reserved.
                </p>
                <p className="text-gray-500 text-center pt-2">
                    Powered By <span className="text-white hover:text-gray-500 underline">Zerdence Technologies</span>
                </p>
            </div>
        </div>
        </footer>
    </div>
);
};

export default Footer;
