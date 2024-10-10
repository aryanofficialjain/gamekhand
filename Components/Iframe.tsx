import React from 'react';

interface IframeProps {
  src: string;
  title: string;
}

const Iframe: React.FC<IframeProps> = ({ src, title }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <iframe 
        src={src} 
        title={title}
        className="w-full h-full border-0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Iframe;