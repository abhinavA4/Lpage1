import React from "react";

const Button1 = () => {
  return (
    <div>
      <button
        href="#"
        class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
      >
        <span class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
        <div class="flex items-center">
          <div className="relative inline-flex">
            <div className="rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2"></div>
            <div className="absolute animate-ping rounded-full bg-green-400 h-[8px] w-[8px] mr-2"></div>
          </div>
          <span class="ml-1 text-white">Slots Open For June</span>
        </div>
      </button>
    </div>
  );
};

export default Button1;
