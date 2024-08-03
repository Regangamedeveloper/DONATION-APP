import "./lid.scss"
import { useState } from "react";
import { useEffect } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import DiamondIcon from '@mui/icons-material/Diamond';
const Lid= ()=>{
    const imageSlider=[{
        url:"https://media.istockphoto.com/id/1418600713/photo/red-donate-button-on-keyboard-close-up-blurred-in-motion-background.jpg?s=1024x1024&w=is&k=20&c=51xYLsefQfY3hiEHVbrcN-JWbVRWSeKNn5RqvLOFtnk=",
        title:"Your Donation Makes a Difference",
        body:"Together, we can create a better world. Donate today and help us make a real impac",
    },

    {
        url:"https://media.istockphoto.com/id/1502427908/photo/shelves-with-medicaments-in-pharmacy.jpg?s=1024x1024&w=is&k=20&c=1A1tyf6_f4OndlCpgoistDpABVYD8Te7mIJThrBH_TQ=",
        title:"Healthier Futures: Invest in a World of Well-being",
        body:"Help us provide access to essential healthcare, improve health outcomes, and create a healthier world for all. Donate today!",
    },
    {
        url:"https://media.istockphoto.com/id/1203244767/photo/group-of-happy-african-children-from-samburu-tribe-kenya-africa.jpg?s=1024x1024&w=is&k=20&c=-o2UFTZ0VLvPLThvC_3h720UINHO4ufccf9-bF_iGAQ=",
        title:"Education for All: Donate Now",
        body:" Help us provide quality education to children in need and create a more equitable world",
    },
    {
        url:"https://media.istockphoto.com/id/1466323935/photo/female-hands-planting-seedlings-of-vegetable-crops-in-ground-close-up-agriculture-gardening.jpg?s=1024x1024&w=is&k=20&c=OcJyp75n37DGVViPJQbwgBz4Em1ZpFYmeUKVHazuQ5w=",
        title:"Nourishing Hope: Help End Hunger Through Farming",
        body:"Empower communities with sustainable farming practices to fight hunger and build a brighter future. Donate today!",
    },
    {
        url:"https://media.istockphoto.com/id/471518057/photo/famine-in-africa-dadaab-refugee-camp.jpg?s=1024x1024&w=is&k=20&c=3XigFB6U_5ZkEd0NsmOKRqWmnlB_xhkFmN5IJbyC59A=",
        title:"Thirst for Change: Help Us Bring Clean Water",
        body:"Millions lack access to clean water. Donate today to provide life-saving resources and empower communities.",
    },];
    const [currentState ,setCurrentState]=useState(0)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(currentState===4){
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
        <div className="lid">
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
                <div className="lidContainer">
                <div className="lg">
          <img 
            src="https://adra.org.nz/wp-content/uploads/2019/11/adra-vertical-logo.png" // Replace with the actual path to your logo 
            alt="Your Brand" 
          />
        </div>
                <VisibilityIcon className="icon"/>
                <h1>Purpose Statement</h1>
                <p> To serve humanity so all may live as God intended</p>
                <AdsClickIcon className="icon"/>
                <h2>Motto:</h2>
                <p>Justice,Compassion,Love</p>

                <DiamondIcon className="icon"/>
                <h2>ADRA Values: </h2>
                <p>Courageous Compassionate Connected</p>
                </div>
        </div>
    )
}
export default Lid;