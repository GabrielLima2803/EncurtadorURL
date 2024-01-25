import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "@/components/footer/Footer";
import Icons from "@/components/others/Icons";

export default function Home() {
  return (
    <div className="bg-gray-800 text-white text-center">
      <Icons/>
      <div>
        Bem-Vindo Ao Encurtador de Url
      </div>
      <Footer/>
    </div>
  );
}
