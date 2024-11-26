import Image from "next/image";
function Card3() {
    return ( 
        <div className=" bg-[#212121] py-52 rounded-xl justify-center flex px-32">
            <Image className="w-1/2"
            src={'/image.png'}
            alt="Picture of the author"
            width={600}
            height={600}
            >

            </Image>
        </div>
     );
}

export default Card3;
//https://ochi.design/wp-content/uploads/2022/04/logo003.png