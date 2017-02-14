import React, { Component } from 'react';
import '../../css/Works.css';
import works_banner from '../../images/bx_banner_bg.png'
import container_titile from '../../images/bx_bg.png'

class Works extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
       {title:"央美设计班",detile1:"主攻央美造型专业",detile2:"连续4年央美65%合格率"},
       {title:"清华设计班1",detile1:"主攻清华美院设计专业",detile2:"连续3年清华52％过关率"},
       {title:"央美国画班",detile1:"主攻央美国画专业",detile2:"连续4年央美65%合格率"},
       {title:"央美国画班",detile1:"主攻央美国画专业",detile2:"连续4年央美65%合格率"},
       {title:"重点综合班",detile1:"主攻北京重点综合类院校",detile2:"校考录取率达到95%"},
       {title:"假期班",detile1:"央美清华储备班型",detile2:"快速明确专业方向"}
      ]
    }
  }
  render() {
    return (
     <div className="works">
      <div className="banner">
        <img src={works_banner}/>
      </div>
      <ul className="container">
        <li className="clear">
          {this.state.data.map((item)=>{
            return(
            <div key={item.name}>
              <h3>{item.title}</h3>
              <p>{item.detile1}</p>
              <p>{item.detile2}</p>
              <p><a>查看详情 ></a></p>
            </div>
            )
            })
          }
        </li>
      </ul>
     </div>
    );
  }
}
export default Works;