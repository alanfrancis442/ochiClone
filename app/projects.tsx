function Projects() {

    let data = [
        {
            "img":"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
            'title':"FYDE",
            'btns':['AUDIT','COPYWRITING','SALES DESK','SLIDER DESIGN']
        },
        {
            "img":"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
            'title':'VISE',
            'btns':['AGENCY','COMPANY PRESNTATION']
        },
        {
            "img":"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
            'title':"TRAWA",
            'btns':['BRAND IDENTITY','INVESTOR DESK','DESIGN RESERCH']
        },
        {
            "img":"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
            'title':"PREMIUM BLEND",
            'btns':['BRANS TEMPLATES']
        },
    ]
    return ( 
        <>
        <div className="h-screen w-full">
            <h1 className="p-20 pb-10 tracking-tight text-7xl">
                projects
            </h1>
            <hr className="w-full h-[1.5px] bg-black" />
            <div className="h-screen w-full p-10 grid gap-4 grid-cols-2">
                {
                    data.map((e,i)=>{
                        return (
                            <div>
                                <div className="m-2 flex gap-2 items-center text-xl">
                                    <div className="rounded-full w-4 h-4 bg-black"></div>{e.title}</div>
                                <img className="rounded-2xl" src={e.img} alt="" />
                                <div className="flex items-center gap-5 pt-5">
                                    {
                                        e.btns.map((el,j)=>{
                                            return (
                                                <button className="anibtn hover:text-white p-2 px-3 border-2 border-black rounded-full">{el}</button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            
        </div>
        </>
     );
}

export default Projects;