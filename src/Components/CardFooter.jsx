import FotterComponent from "./FotterComponent";
import { IoIosWater } from 'react-icons/io';
import { FiWind } from 'react-icons/fi';
const CardFooter = (props) => {
    const { suhu, speed } = props;
    return (
        <div className="flex flex-row justify-between pt-16 px-5 sm:px-20 ">
            <FotterComponent
                icon={<IoIosWater size={40} />}
                suhu={suhu}
                text1="Humidity"
            />
            <FotterComponent
                icon={<FiWind size={40} />}
                suhu={speed}
                text1="wind Speed"
            />
        </div>
    );
}

export default CardFooter;