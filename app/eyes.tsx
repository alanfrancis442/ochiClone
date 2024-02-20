function Eyes() {
    return ( 
            <div data-scroll data-scroll-section data-scroll-speed="-.5" className="-z-10 relative h-[100vh] bg-no-repeat bg-cover w-full flex justify-center items-center
            bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]
            ">
                <div className="h-4 flex gap-5">
                    <div className="rounded-full bg-white w-56 h-56 flex justify-center items-center">
                        <div className="w-32 h-32 bg-black rounded-full relative">
                            <div className="absolute w-8 h-8 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="rounded-full bg-white w-56 h-56 flex justify-center items-center">
                        <div className="w-32 h-32 bg-black rounded-full relative">
                            <div className="absolute w-8 h-8 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default Eyes;