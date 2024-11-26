import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";
function Card() {
    return ( 
        <div className="flex flex-col lg:flex-row gap-5 px-20 py-36 ">
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
     );
}

export default Card;