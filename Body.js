import { useEffect } from "react";

const Body=()=>{
    async function getapi(){
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

    }

    useEffect(()=>{getapi()},[]);
    return(
        <>
            <div className="body">Body</div>
        </>
    )
}

export default Body;