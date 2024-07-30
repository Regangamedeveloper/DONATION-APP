import "./slider.scss"
import { useState } from "react";
import { useEffect } from "react";
const Slider = ()=>{
    const imageSlider=[{
        url:"https://images.pexels.com/photos/8060425/pexels-photo-8060425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"Food for All: Ending Hunger Together",
        body:"Food for All: Ending Hunger Together. No empty plates, just shared meals and a brighter future for everyone.",
    },
    {
        url:"https://adra.org.nz/wp-content/uploads/2020/04/11051837_1009491602436472_6843770636135512905_o-Copy-1024x679.jpg",
        title:"A Bucket Full of Hope",
        body:"Their laughter echoes, their energy boundless. This group of children reminds us that even in the face of challenges, hope and joy can flourish. Let's work together to empower children everywhere to reach their full potential.",
    },
    {
        url:"https://media.istockphoto.com/id/600999260/photo/hands-of-poor-african-children-asking-for-drinking-water.jpg?s=1024x1024&w=is&k=20&c=kPVAe358AIQRB4nQYrFsgLS-Jga0rwKTlV3AycT4WZc=",
        title:"Clean Water for All:  Shared Responsibility",
        body:"Clean Water for All: It's not a privilege, it's a fundamental right. Let's work together to ensure everyone has access to this essential resource.",
    },
    {
        url:"https://media.istockphoto.com/id/1093177328/photo/african-children-during-english-class-southern-ethiopia-east-africa.jpg?s=1024x1024&w=is&k=20&c=EiDL72A1lnRhu404rhvcSeLjpcC77KfbC0C_71RC3VA=",
        title:"Education as a Foundation",
        body:"Education is more than just acquiring knowledge; it's the bedrock of individual growth and societal progress. It empowers us to think critically, solve problems creatively, and navigate the complexities of an ever-changing world.",
    },
    {
        url:"https://media.istockphoto.com/id/1174761550/photo/kibera-nairobi-slum.jpg?s=1024x1024&w=is&k=20&c=eUN1TyvUHLS4fkH9-2k9tzB1ZhqX3HBA234yLO8tW_4=",
        title:"Clean Trenches, Healthy Communities",
        body:" Protecting public health starts with ensuring proper drainage and clean trenches.",
    },
    {
        url:"https://media.istockphoto.com/id/619643870/photo/hungry-african-children-asking-for-food-africa.jpg?s=1024x1024&w=is&k=20&c=9-fxG0x5A1-tMM8fYzcqCk6-ZTuLKlndFAIo4S09BnQ=",
        title:"Sowing Seeds of Change",
        body:"Empowering communities, one seed at a time , growing food security and brighter futures together",
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
            <div className="transparent"></div>
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
                </div>
                <div className="silderContainer">
                <h2>Mission</h2>
                <p>ADRA's purpose is to serve humanity so all may live as God intended</p>
                </div>


        </div>
    )
}
export default Slider;