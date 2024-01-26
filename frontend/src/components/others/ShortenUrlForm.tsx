// ShortenUrlForm.tsx
import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';

interface ShortenUrlFormProps {
  onCopy: () => void;
}

const ShortenUrlForm: React.FC<ShortenUrlFormProps> = ({ onCopy }) => {
  const [originalURL, setOriginalURL] = useState<string>("");
  const [shortenedURL, setShortenedURL] = useState<string>("");

  const handleShorten = async () => {
    try {
      const response = await fetch('http://localhost:3000/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: originalURL }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortenedURL(data.shortURL);
      } else {
        console.error('Erro ao encurtar a URL:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao encurtar a URL:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOriginalURL(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleShorten();
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-sky-900 p-4 rounded-md w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto flex items-center">
          <input
            className="flex-1 p-2 bg-gray-800 text-white outline-none border-b-2 border-gray-600"
            placeholder="Digite a URL"
            type="text"
            value={originalURL}
            onChange={handleChange}
          />
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleClick}
          >
            Encurtar
          </button>
        </div>
      </div>

      {shortenedURL && (
        <div className="mt-8 flex justify-center items-center">
          <div className="bg-sky-900 p-4 rounded-md flex items-center">
            <span className="mr-2 break-all">{shortenedURL}</span>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={onCopy}
            >
              Copiar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortenUrlForm;
