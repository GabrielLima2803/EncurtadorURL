import React, { useState } from 'react';
import shortenURL from '../../api/shortenURL';
import Footer from '../../components/footer/Footer';
import Image from '../../assets/img/www-rafiki.png';
import SvgComponent from '../../components/Img-Svg/SvgComponent';

export default function PageURL() {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleShortenClick = async () => {
    const result = await shortenURL(originalURL);
    setShortenedURL(result);
  };

  const handleCopyClick = () => {
    const input = document.getElementById('shortenedInput') as HTMLInputElement;
    if (input) {
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand('copy');
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-between">
      <div className="py-8 text-center">
        <h3 className="text-xl font-semibold">
          Coloque a URL que você deseja encurtar no campo abaixo.
        </h3>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-sky-900 p-4 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto flex items-center">
          <input
            className="flex-1 p-2 bg-gray-800 text-white outline-none border-b-2 border-gray-600"
            placeholder="Digite a URL"
            type="text"
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
          />
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleShortenClick}
          >
            Encurtar
          </button>
        </div>
      </div>

      {shortenedURL && (
        <div className="mt-8 flex justify-center items-center">
          <div className="bg-sky-900 p-4 rounded-md flex items-center">
            <input
              id="shortenedInput"
              type="text"
              className="flex-1 mr-2 break-all bg-transparent border-none focus:outline-none overflow-hidden text-ellipsis"
              value={shortenedURL}
              readOnly
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={handleCopyClick}
            >
              Copiar
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center">

                <SvgComponent/>

      </div>

      <div className="flex justify-center items-center">
        <a href="/">
          <button className="button-30 mt-4 text-black" role="button">
            Home
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}
