import "./slider.scss"
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
const Slider = ()=>{
    const imageSlider=[{
        url:"https://images.pexels.com/photos/8060425/pexels-photo-8060425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"",
        body:"",
    },
    {
        url:"https://adra.org.nz/wp-content/uploads/2020/04/11051837_1009491602436472_6843770636135512905_o-Copy-1024x679.jpg",
        title:"",
        body:"",
    },
    {
        url:"https://media.istockphoto.com/id/600999260/photo/hands-of-poor-african-children-asking-for-drinking-water.jpg?s=1024x1024&w=is&k=20&c=kPVAe358AIQRB4nQYrFsgLS-Jga0rwKTlV3AycT4WZc=",
        title:"",
        body:"",
    },
    {
        url:"https://media.istockphoto.com/id/1093177328/photo/african-children-during-english-class-southern-ethiopia-east-africa.jpg?s=1024x1024&w=is&k=20&c=EiDL72A1lnRhu404rhvcSeLjpcC77KfbC0C_71RC3VA=",
        title:"",
        body:"",
    },
    {
        url:"https://media.istockphoto.com/id/483955414/photo/african-boy-and-girl.jpg?s=1024x1024&w=is&k=20&c=S_HaFv81BFxYY7qSuWdf_zSbOkBijI7QKtGJTMPRKZg=",
        title:"",
        body:"",
    },
    {
        url:"https://media.istockphoto.com/id/619643870/photo/hungry-african-children-asking-for-food-africa.jpg?s=1024x1024&w=is&k=20&c=9-fxG0x5A1-tMM8fYzcqCk6-ZTuLKlndFAIo4S09BnQ=",
        title:"",
        body:"",
    },];
    const [currentState ,setCurrentState]=useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===5){
                setCurrentState(0)
            }else{
                setCurrentState(currentState+1)
            }
        },5000)
            return()=>clearTimeout(timer)},[currentState])
    const bkimage ={
        backgroundImage:`url(${imageSlider[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'50%'
    }
    const goToNext=(currentState)=>{
        setCurrentState(currentState)
    }
    return(
        <div className="slider">
            <div style={bkimage}></div>
            <div className="des">
                <h1>{imageSlider[currentState].title}</h1>
                <p>{imageSlider[currentState].body}</p>
                <div className="bot">
                    {
                        imageSlider.map((imageSlider,currentState)=>(
                            <span key={currentState} onClick={()=>goToNext(currentState)}></span>
                        )
                        )
                    }
                </div>
                <div className="hero">
              <Link to="/addcampaigns"style={{textDecoration:"none"}}>
              <button>Add Compaign</button>
                </Link>
                </div>
                </div>
                <div className="silderContainer">
                <h2>Mission</h2>
                <p>ADRA's purpose is to serve humanity so all may live as God intended</p>
                </div>


        </div>
    )
}
export default Slider;