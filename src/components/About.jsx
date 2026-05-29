
function About() {
  return (
    <div className="mt-20 ">
        <div className="justify-center text-center">
            <h3 className="text-4xl font-bold mx-5">Qui suis-je ?</h3>
            <p className="text-md font-weight mx-5 my-5" >
                Développeur passionné basé à Abidjan, je conçois des applications <br/> web et mobiles performantes. 
                Mon approche mêle rigueur technique et <br/> sens du design pour livrer des produits que les utilisateurs adorent utiliser.
            </p>
        </div>
        <div className="flex justify-center" >
               <div className="grid grid-cols-2 gap-10 mt-10 mx-5 justify-center items-center" >
            <div className="bg-neutral p-4 rounded-lg w-80 border border-primary hover:bg-info-content duration-300" >
                <h4 className="text-4xl font-bold mb-2 text-primary">3+</h4>
                <p className="text-white text-sm font-semibold" >
                   Années d'expériences.
                </p>
            </div>
            <div className="bg-neutral p-4 rounded-lg w-80 border border-primary hover:bg-info-content duration-300" >
                <h4 className="text-4xl font-bold mb-2 text-primary">4+ </h4>
                <p className="text-white text-sm font-semibold" >
                    Projets réalisés
                </p>
            </div>
            <div className="bg-neutral p-4 rounded-lg w-80 border border-primary hover:bg-info-content duration-300" >
                <h4 className="text-4xl font-bold mb-2 text-primary">5+</h4>
                <p className="text-white text-sm font-semibold" >
                    Clients satisfaits
                </p>
            </div>
            <div className="bg-neutral p-4 rounded-lg w-80 border border-primary hover:bg-info-content duration-300" >
                <h4 className="text-4xl font-bold mb-2 text-primary">100%</h4>
                <p className="text-white text-sm font-semibold" >
                    Projets livrés à temps
                </p>
            </div>
        </div>
        </div>
     
    </div>
  )
}

export default About