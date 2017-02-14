import React, { Component } from 'react';
import '../../css/Environment.css';
import Banner from '../../images/xyh-1.png'
import container1 from '../../images/xy-1.png'
import container2 from '../../images/xy-2.png'
import container3 from '../../images/xy-3.png'
import container4 from '../../images/xy-4.png'
import container5 from '../../images/xy-5.png'
import container6 from '../../images/xy-6.png'

class Environment extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[
        {imgsrc:container1},
        {imgsrc:container2},
        {imgsrc:container3},
        {imgsrc:container4},
        {imgsrc:container5},
        {imgsrc:container6}
      ]
    }
  }
  render() {
    return (
     <div className="environment">
      <div className="banner">
        <img src={Banner}/>
      </div>
      <ul className="container">
        <li>
           {this.state.data.map((item)=>{
            return(
              <img src={item.imgsrc} key={item.imgsrc}/>
              )
           })}
        </li>

      </ul>
     </div>
    );
  }
}
export default Environment;