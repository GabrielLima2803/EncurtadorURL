import React from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/footer/Footer";
import Icons from "../components/others/Icons";
import Image from '../assets/img/www-rafiki.png'

export default function Home() {
  return (
    <div className="bg-gray-800 text-white text-center">
      <Icons />
      <div>
        <h2 className="font-bold">Bem-Vindo Ao Encurtador de Url</h2>
        <p className="pt-2">
          Digite sua URL e obtenha uma versão curta em instantes. Agilize suas
          comunicações online conosco!
        </p>
        <div className="flex justify-center items-center">
          <img
            src={Image}
            alt="Imagem de boas-vindas"
            width={500}
            height={500}
          />
        </div>
        <a href="/url"> 
          <button className="button-30 mt-4 text-black" role="button">
            Encurtar sua URL
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}