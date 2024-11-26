import Image from "next/image";
function Card1() {
    return ( 
        <div className=" bg-[#004D43] py-52 rounded-xl justify-center lg:w-1/2 w-full flex">
            <Image className="w-"
            src={'https://ochi.design/wp-content/uploads/2022/04/logo001.svg'}
            alt="Picture of the author"
            width={200}
            height={50}
            >

            </Image>
        </div>
     );
}

export default Card1;