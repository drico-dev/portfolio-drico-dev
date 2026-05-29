
import image from "../assets/Ange-cedric.jpeg"
function Hero() {
  return (
    <div className="flex justify-center">
        <div>
            <p className="text-2xl font-bold mt-20 mx-5" >
            Bonjour, je suis <br/>
            <span className="text-primary text-3xl font-bold" >
             Ange-Cedric N'GORAN
        </span>
         </p>
       <p className="'text-sm font-weight mx-5 my-5" >
         Développeur web & mobile fullstack.<br/>
       Je transforme des idées en expériences digitales élégantes.
       </p>
       

       <div className=" my-10 ">
         <button className="bg-black text-white py-2 px-4 rounded-xl border border-primary hover:bg-info-content transition-colors duration-300 mx-4 cursor-pointer">
           Voir mes projets
         </button>
         <button className="bg-black text-white py-2 px-4 rounded-xl border border-primary hover:bg-info-content transition-colors duration-300 cursor-pointer">
           Me contacter
         </button>
       </div>

        
        </div>
        <div className="mx-20" >
            <img src={image} alt="Hero Image" className="w-60 h-70 mt-10 object-cover border-8 rounded-4xl border-primary shadow-xl"
            />
        </div>
    </div>
  )
}

export default Hero