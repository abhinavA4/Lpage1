import React from 'react'

const Mid2 = () => {
  return (
    <div><section class="bg-gray-100 py-20">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Your Website Headline Here
        </h1>
        <p class="text-lg text-gray-700 mb-6">
          A brief description of your website and its purpose.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </a>
          <a href="#" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>
      <div class="md:w-1/2">
         <img src="placeholder-image.jpg" alt="Hero Image" class="rounded-lg shadow-lg"/>
      </div>
    </div>
  </div>
</section></div>
  )
}

export default Mid2