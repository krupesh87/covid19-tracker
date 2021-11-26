import React,{useEffect,useState} from 'react'
import './statewise.css'
// import { BrowserRouter as Link} from 'react-router-dom'

import Link from '@material-ui/core/Link'
const Statewise = () => {
    const [data,setdata]=useState([]);
    const getcovidData = async () => {
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualdata = await res.json();// https://api.rootnet.in/covid19-in/stats/latest
        console.log(actualdata.statewise)
       setdata(actualdata.statewise)
      
      
      };
      useEffect(() => {
        getcovidData();
      }, []);
    return (
        <>
     
            <h1 className="text-black text-center mt-3"> India statewise covid19 Tracker</h1>
            <br/>
            <button className="btn btn-secondary" style={{display:"inline-block",fontSize:"20px",position:"relative",left:"620px",textDecoration:"none", color:"black"}}>
            <Link href="/" style={{color:"white",textDecoration:"none"}}>National</Link>
            </button>
          
       
    <br/>
            <div className="conatiner mx-3 px-3 mb-3">
            <table className="table mx-3 mt-3 table-bordered rounded ">
  <thead>
    <tr className="table-dark ">
      <th scope="col">sr. No</th>
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Death</th>
      <th scope="col">Active</th>
      <th scope="col">Updated</th>
    </tr>
  </thead>
  <tbody >
     {
         data.map((curElem,ind)=>{
             return (
                <tr key={ind}>
                <th scope="row">{ind+1}</th>
                <td className="state">{curElem.state}</td>
                <td  className="confirmed">{curElem.confirmed}</td>
                <td  className="recovered">{curElem.recovered}</td>
                <td  className="death" >{curElem.deaths}</td>
                <td  className="active">{curElem.active}</td>
                <td  className="lastupdatedtime">{curElem.lastupdatedtime}</td>
              </tr>

             )
         })
     }
  
   
  </tbody>
</table>

</div>

</>



     
    )
}

export default Statewise
