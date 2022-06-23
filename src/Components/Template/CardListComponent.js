import React, { useEffect, useRef, useState } from "react";

import { getDashboard } from "../../API/Template/Template";
import CardComponent from "./CardComponent";

const CardsComponent = ({props}) => {

    const [ cardResponse, setCardResponse ] = useState([]);

    useEffect(() => {
        const action = async() => {
            const response = await getDashboard(props);
            if(response.state){
                setCardResponse(response.json.information);
            }
        }
        action();
    }, [props]);
    
    return (
        cardResponse && cardResponse.map( (data) => (
            <CardComponent key={data.id} props={data}/>
        ) )
    )
}

export default CardsComponent;