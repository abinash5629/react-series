import { useEffect,useState } from "react";

function userfunctioninfo(currency){
    let [data,setdata]=useState({});   //here we took the empty object as the one, because even if the api becomes empty for a certain currency, it wont show anything wrong.it will be parsed.

    useEffect (()=>{fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=> res.json() ) .then((res)=>{
        setdata(res[currency]);
        console.log(data);
    })},[currency])
    console.log(data);
    return data;
}

export {userfunctioninfo}