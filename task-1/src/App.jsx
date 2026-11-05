import { useState, useEffect } from "react"

function App() {
  const [joke, setJoke]=useState(null);
  const [loading, setLoading]=useState(true);
  const [count, setCount]=useState(0);

  useEffect(()=>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res=>res.json())
    .then(data=>{
      setJoke(data);
      setLoading(false);
    })
  }, [count]);

  return (
    <div style={{maxWidth:"420px", margin:"60px auto", backgroundColor:"#f8fafc", border:"2px solid #e2e8f0", borderRadius:"16px", boxShadow:"0 4px 12px rgba(0,0,0,0.05)", fontFamily:"Arial, sans-serif", textAlign:"center"}}>
      <div style={{backgroundColor:"#fff", padding:"20px", borderRadius:"10px"}}>
        {loading ? (<p>Zarafat yoldadır, gözləyin...</p>) : (
          <div>
            <div style={{fontSize:"16px", fontWeight:"bold", color:"#0f172a"}}>
              {joke.setup}
            </div>
            <div style={{fontSize:"15px", color:"#0284c7", fontStyle:"italic"}}>
              {joke.punchline}
            </div>
          </div>
        )}
      </div>
      <button style={{backgroundColor:"#2563eb", color:"#fff", padding:"12px 20px", borderRadius:"8px", cursor:"pointer", fontWeight:"bold"}} onClick={()=>setCount(count+1)}>Başqa Zarafat Gətir</button>
      
    </div>

  )
}

export default App
