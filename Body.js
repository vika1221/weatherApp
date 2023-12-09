import { useEffect, useState } from "react";

const Body = () => {
  const [city, setCity] = useState("");
  //let city="kolkata";
  //let key=b70b0cb77dcd9425eb08ff89efedb077;
  async function getapi(props) {
    console.log(props);
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+props+"&appid=b70b0cb77dcd9425eb08ff89efedb077");
    const json = await data.json();
    console.log(json);

    return json;
  }

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Enter the city Name"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}/>
      <button onClick={()=>{
        getapi(city);
      }}>
        search
      </button>
      <h1></h1>
      <div className="body"> Body</div>  
    </>
  );
};

export default Body;
