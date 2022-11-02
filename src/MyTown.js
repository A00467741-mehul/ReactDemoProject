import React from 'react';
import mytown from './mytown.jpg'
import celcius from './celcius.png'
import fehrenhit from './fehrenhit.jpg'

function MyTown(){
    const [image,setImage] = React.useState(null);
    const [temp,setTemp] = React.useState(null);
    const [imageAlt,setimageAlt] = React.useState(null);

    React.useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=23.033863&lon=72.585022&appid=c9fe3d462a3216a385c4fbc214a307d6')
        .then(results => results.json())
        .then(data => {
            setImage("https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
            setTemp(Math.trunc(data.main.temp - 273.15));
            setimageAlt(data.weather[0].main);
        })
    },[]);

    function ChangeTemp(props){
        var temperature = 0;
        if(props === 'f'){
            temperature = (temp -32) * 5/9;
            
        }
        else
        {
            temperature = (temp * 9/5) + 32;
        }
        setTemp(Math.trunc(temperature));
    }
    return(
        <>
             <div className='row'>
             <br /><br /><br /><br />
                <div>
                    <img src={mytown} alt="" height={"100"} width={"200"} style={{marginBottom:10}}/>
                </div>
                <h3 style={{marginBottom:10}}>
                    I am from Ahmedabad,India.
                </h3>
                <br /><br /><br />
                <h5>
                    Ahmedabad city if the financial capital of the 
                    state of Gujarat, India and located in the center
                    of the Gujarat state.
                </h5>
                
                <div className="container">
                    <div className="row">
                         <div className="col-sm-2">
                            <img src={image} alt={imageAlt}/>
                         </div>
                        <div className="col-sm-2">
                            <h2>{temp}</h2>
                        </div>
                        <div className="col-sm-3">
                            <img src={celcius} onClick={() => ChangeTemp('f')} alt="" height={"40"} width={"35"}/>
                            <br />
                            <br />
                            <img src={fehrenhit} onClick={() => ChangeTemp('c')} alt=""  height={"40"} width={"35"}/>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyTown;