import Footer from "@/components/footer/Footer";

export default function PageURL() {
    return(
        <div className="bg-gray-800 text-white text-center">
            <div className="pt-5">
            <h3>Coloque a URL que você deseja encurtar no campo abaixo.</h3>
            </div>

            <div className="">

            <div className="form-control">
  <input className="input input-alt" placeholder="Type something intelligent" type="text"/>
  <span className="input-border input-border-alt"></span>
</div>


            </div>
            <Footer/>
        </div>
    )
}