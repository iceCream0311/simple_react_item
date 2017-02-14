import React, { Component } from 'react';
import '../../css/MainHtml.css';
import Banner from '../../images/score_banner.png';
import score_1 from '../../images/score_1.png';
import score_2 from '../../images/score_2.png';
import score_3 from '../../images/score_3.png';
import score_4 from '../../images/score_4.png';
import score_5 from '../../images/score_5.png';
import score_6 from '../../images/score_6.png';
import score_one from '../../images/score_one.png';
import score_two from '../../images/score_two.png';

class MainHtml extends Component {
    constructor(props){
      super(props)
        this.state={
          data:[
          {id:1,imgSrc:score_1,name:"戚翔宇",prv:"山东省",mingci:1},
          {id:2,imgSrc:score_2,name:"戚翔",prv:"山东省",mingci:1},
          {id:3,imgSrc:score_3,name:"翔宇",prv:"山东省",mingci:2},
          {id:4,imgSrc:score_4,name:"戚宇",prv:"山东省",mingci:4},
          {id:5,imgSrc:score_5,name:"宇",prv:"山东省",mingci:5},
          {id:6,imgSrc:score_6,name:"翔",prv:"山东省",mingci:6},
          ],
          MinCi:function(item){
            if (item==1) {
              return(<img src={score_one} />)
            }else if(item==2){
            return(<img src={score_two} />)
            }else{
              return(<span>{item}</span>)
            }
          }
        }
    }
  render() {
    return (
     <div className="main-html">
       <p><img src={Banner} /></p>
       <div className="title">
        <p>2016年<span>215</span>人考央美<span>181</span>人合格</p>
        <p>达到录取资格<span>127</span>人 占央美总录取<span>1/6</span></p>
       </div>
       <ul>
       {this.state.data.map((item)=>{
        return(
          <li key={item.id}>
           <div className="fl">
             <div className="img clear">
                <div className="fl"><img src={item.imgSrc}/></div>
                <div className="fl">
                  <p>{item.name}</p>
                  <p>{item.prv}</p>
                </div>
             </div>
           </div>
           <div className="fr srco">
            央美第{this.state.MinCi(item.mingci)}
           </div>
         </li>
          )
       })}
       </ul>
       <p><a>查看更多></a></p>
     </div>
    );
  }
}
export default MainHtml;