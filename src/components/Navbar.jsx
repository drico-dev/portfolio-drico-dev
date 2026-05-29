
function Navbar() {
  return (
    <div>
     <div className="flex gap-10 justify-between py-4" >
       <h3 className="text-2xl font-bold px-4 cursor-pointer" >
        Drico~<span className="text-primary text-3xl">Dev</span>
      </h3>
      <ul className="flex gap-5 px-4" >
         <li className=" font-weight hover:text-primary transition-colors duration-300" ><a href="">Accueil</a></li>
        <li className=" font-weight hover:text-primary transition-colors duration-300" ><a href="">À propos</a></li>
        <li className="font-weight hover:text-primary transition-colors duration-300" ><a href="">Projets</a></li>
        <li className="font-weight hover:text-primary transition-colors duration-300" ><a href="">Contacts</a></li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar