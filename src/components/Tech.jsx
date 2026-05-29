
function Tech() {
  return (
    <div>
        
        <div>
            <h3 className="text-4xl font-bold mx-5 text-center my-10">Mes Technologies</h3>
              <p className="text-center mb-5 font-semibold" >
                    Frontend
                </p>
            <div className="flex gap-5 justify-center" >
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    React
                </button>
                <button className="bg-neutral text-white px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Node.js
                </button>
                 <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Tailwind CSS
                </button>
                 <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Figma
                </button>
             <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Typescript
                </button>
            </div>
        </div>
        
        <div className="my-10" >
            <p className="text-center mb-5 font-semibold" >
                    Backend
                </p>
            <div className="flex gap-5 justify-center" >
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Node.js
                </button>
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    php
                </button>
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Firebase
                </button>
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    PostgreSQL
                </button>
            </div>
        </div>

        <div className="my-10" >
            <p className="text-center mb-5 font-semibold" >
                DevOps & Outils
            </p>
            <div className="flex gap-5 justify-center" >
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Docker
                </button>
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Git / GitHub
                </button>
                <button className="bg-neutral text-white text-sm px-4 py-2 rounded-lg border border-primary hover:bg-info-content duration-300" >
                    Vercel
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Tech