import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function PageURL() {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-between">
      <div className="py-8">
        <h3 className="text-xl font-semibold text-center">
          Coloque a URL que você deseja encurtar no campo abaixo.
        </h3>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-sky-900 p-4 rounded-md w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto flex items-center">
          <input
            className="flex-1 p-2 bg-gray-800 text-white outline-none border-b-2 border-gray-600"
            placeholder="Digite a URL"
            type="text"
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Encurtar
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center items-center">
        <div className="bg-sky-900 p-4 rounded-md flex items-center">
          <span className="mr-2 break-all">
            https://chat.openai.com/c/a9a35b72-c304-4f0e-a2ea-cd6ce48cd60c
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Copiar
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/img/www-animate.svg"
          alt="Imagem de boas-vindas"
          width={500}
          height={500}
        />
      </div>

      <Footer />
    </div>
  );
}