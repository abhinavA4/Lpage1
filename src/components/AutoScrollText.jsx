import React, { useEffect, useRef } from 'react';

const texts = [
  'WEB DESIGN',
  'WEB DEVELOPMENT',
  'DIGITAL MARKETING',
  'APP DEVELOPMENT',
  'FRONTEND ENGINEERING',
  'BACKEND SYSTEMS',
  'FULL STACK SOLUTIONS',
];

const AutoScrollText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ul = textRef.current;
    const clone = ul.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    ul.parentNode.appendChild(clone);
  }, []);

  return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          ref={textRef}
          className="flex items-center animate-infinite-scroll [&_li]:mx-12 text-lg font-semibold text-slate-800 whitespace-nowrap"
        >
          {texts.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoScrollText;


