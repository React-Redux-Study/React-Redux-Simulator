import { convertTime } from "../../Util/time";
import { useNavigate } from "react-router";


const CardComponent = ({props}) => {

    const navigate = useNavigate();

    const onClickCard = () => {
        console.log(props.id);
        navigate(`/viewer/${props.id}`);
    }

    return (
        <div onClick={onClickCard} className="cursor-pointer w-full h-68 p-2 bg-white rounded-md shadow hover:ring hover:ring-gray-300"> 
            <div className="text-right py-2 text-xs text-gray-400">
                {convertTime(props.createdDate)}
            </div>
            <div className="px-2 pt-2 font-semibold text-xl text-center rounded-md truncate">
                {props.title}
            </div>
            <div className="py-1 text-center text-md text-gray-400 truncate border-b">
                {props.content}
            </div>
            <div className="py-1 text-center text-md text-gray-400 truncate">
                {props.raw}
            </div>
        </div>
    )
}

export default CardComponent;