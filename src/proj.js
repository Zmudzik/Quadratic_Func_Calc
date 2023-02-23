import React from "react";
import './proj.css';
 class Projekt extends React.Component{

   DataShow = (e) =>{
    var data = document.getElementById('data');
    var btn = document.getElementById('showbtn');
    if(data.style.display==='none'){
        data.style.display='block';
        btn.innerText = "hide input panel";
    }
    else{
        data.style.display='none';
        btn.innerText="Let's start";
    }
   }

   QuadraticResult = (event) =>{
        event.preventDefault();
        var Res = document.getElementById('Result');
        var ResBtn = document.getElementById('ResBtn');
        if(Res.style.display==='none'){
            Res.style.display='block';
            ResBtn.innerText ='Hide result';
        }
        else{
            Res.style.display='none';
            ResBtn.innerText ='Get Result';
        }
        const av = document.getElementById('a').value;
        const bv = document.getElementById('b').value;
        const cv = document.getElementById('c').value;
        const pattern = document.getElementById('pattern');
        const Delta = document.getElementById('Delta');
        const ZeroPlaces = document.getElementById('ZeroPlaces');
        pattern.innerText = 'Pattern: F(x) = '+av+'x^2 + '+bv+'x + '+cv;
        const del = (bv*bv) - 4*av*cv;
        Delta.innerText = 'Delta: '+del; 
        const x1 = (-bv-Math.sqrt(del))/2*av;
        const x2 = (-bv+Math.sqrt(del))/2*av;
        const x = -bv/(2*av);
        if(del>0){
            ZeroPlaces.innerText = 'X1: '+x1+' X2: '+x2;
        }
        if(del==0){
            ZeroPlaces.innerText = 'X: '+x;
        }
        if(del<0){
            ZeroPlaces.innerText = 'Brak miejsc zerowych';
        }
   }
    render(){
        return(
            <div className="Main">
                <header className="Head-er">
                    <div className="Title">
                        <h1>Quadratic Func Calculator</h1>
                    </div>
                    <div className="Description">
                        <p>If u are lazy it's just for ya</p>
                    </div>
                    <div className="Starting">
                        <button onClick={this.DataShow} id="showbtn" className="btn btn-outline-light">Let's start</button>
                    </div>
                </header>
                <section className="Data" id="data">
                    <div className="Inputs">
                        <form>
                            <div className="A">
                                <label htmlFor="a">A:</label>
                                <input className="form-control" type="number" 
                                id="a" placeholder="Enter first Number"/>
                            </div>
                            <div className="B">
                                <label htmlFor="b">B:</label>
                                <input className="form-control" type="number"
                                id="b" placeholder="Enter second Number"/>
                            </div>
                            <div className="C">
                                <label htmlFor="c">C:</label>
                                <input className="form-control" type="number" 
                                id="c" placeholder="Enter third Number"/>
                            </div><br/>
                            <button id="ResBtn" onClick={this.QuadraticResult} className="btn btn-outline-light">Get result</button>
                        </form>
                    </div>
                </section>
                <section className="Results" id="Result">
                    <div className="Values">
                        <p id="pattern"></p>
                        <p id="Delta"></p>
                        <p id="ZeroPlaces"></p>
                    </div>
                </section>
            </div>
        );
    }
 }
export default Projekt;
 