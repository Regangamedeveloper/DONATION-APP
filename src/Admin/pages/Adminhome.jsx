import React from 'react'
import './adminhome.scss'
import Topbox from '../components/Topbox';
import Chatbox from '../components/Chatbox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../components/menudata';
import BarChartBox from '../components/Barchartbox';
import Piechartbox from '../components/Piechartbox';
import Bigchart from '../components/Bigchart';


const Adminhome = () => {
  return (
    <>
    
<div className="homeadmin">
  <div className="box box1">
    <Topbox/>
  </div>
  <div className="box box2"><Chatbox {...chartBoxUser} /></div>
  <div className="box box3"><Chatbox {...chartBoxRevenue}/></div>
  <div className="box box4"><Chatbox {...chartBoxConversion}/></div>
  <div className="box box5"><Chatbox {...chartBoxProduct}/></div>
  <div className="box box6"><Piechartbox/></div>
  <div className="box box7"><Bigchart/></div>
  <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
  <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>
   
</div> 


    </>
    

  )
}

export default Adminhome;