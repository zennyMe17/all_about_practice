import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(true)

  const fetchData = async()=>{
    try{
          const response = await fetch(`https://catfact.ninja/fact`)
          const result = await response.json()
          setData(result)
          setLoading(false)
    }
    catch(e){
        console.log(e)
        setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  if(loading){
    return<div>Loading...</div>
  }

  return (
    <div><p>{data.fact}</p></div>
  );
}

export default App;
