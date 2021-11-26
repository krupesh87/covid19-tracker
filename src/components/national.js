import React, { useEffect,useState } from "react";
import './national.css'
import { BrowserRouter as Router,Route,Link, BrowserRouter} from 'react-router-dom'
import Statewise from './statewise';


export const National = () => {
    const  [data, setdata] = useState([]);
  const getcovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualdata = await res.json(); //https://corona.lmao.ninja/v2/countries/India
    console.log(actualdata.statewise[0])
    setdata(actualdata.statewise[0])

  
  };
  useEffect(() => {
    getcovidData();
  }, []);
  return (
    <>
      <h1 className="p-3  text-dark text-center"> India covid-19</h1>
    <button className="btn btn-secondary" style={{display:"inline-block",fontSize:"20px",position:"relative",left:"620px",textDecoration:"none", color:"black"}}>
    <Link to="/statewise" style={{textDecoration:"none", color:"white"}}> state</Link>

    </button>
      <div className="container p-3 mt-3">
        <div className="container float-center">
          <div className="row pt-3 ">
            <div className="col-lg-4">
            <div className="card w-100 bg-primary text-white ">
                <div className="card-body">
                  <h5 className="card-title">Country</h5>
                  <p className="text p-3">
                      India
                   
                  </p>
                </div>
             
            </div>
            </div>
            <div className="col-sm-4">
            <div className="card w-100 bg-warning text-white">
                <div className="card-body">
                  <h3 className="card-title">Total Cases</h3>
                  <p className="text">
                   {data.confirmed}
                  </p>
                </div>
              </div>
                
            </div>
            <div class="col-sm-4">
            <div class="card w-100 bg-secondary">
                <div class="card-body">
                  <h5 class="card-title text-white">Active</h5>
                  <p class="text">
                      {data.active}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 mt-3">
            <div className="col">
            <div className="card w-100 bg-danger text-white">
                <div className="card-body">
                  <h5 className="card-title">Dead</h5>
                  <p className="text">
                   {data.deaths}
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card w-100 bg-success text-white">
                <div className="card-body">
                  <h5 className="card-title">Recovered</h5>
                  <p className="text">
                      {data.recovered}
                   
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card w-100  text-white bg-info">
                <div className="card-body">
                  <h5 className="card-title">Update</h5><br/>
                  <p className="text">
                      {data.lastupdatedtime}
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


