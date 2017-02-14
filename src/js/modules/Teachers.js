import React, { Component } from 'react';
import '../../css/Teachers.css';
import Banner from '../../images/teachers_bg.png'
import teachers_1 from '../../images/teachers_1.png'
import teachers_2 from '../../images/teachers_2.png'
import teachers_3 from '../../images/teachers_3.png'
import teachers_4 from '../../images/teachers_4.png'
import teachers_5 from '../../images/teachers_5.png'
import teachers_6 from '../../images/teachers_6.png'
import teachers_arrow from '../../images/teachers_arrow.png'

class Teachers extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
      {imgSrc:teachers_1,title:"美院教授 定制课程",detile:"美院教授一对一制定备考方案"},
      {imgSrc:teachers_2,title:"10人小班 精细指导",detile:"手把手陪画，全方位360度无死角指导"},
      {imgSrc:teachers_3,title:"权威标准 电子课件",detile:"全程文化课指导，连续5年央美80%合格"},
      {imgSrc:teachers_4,title:"美院教授 定制课程",detile:"美院教授一对一制定备考方案"},
      {imgSrc:teachers_5,title:"百人师资 十年教龄",detile:"严格筛选 教授亲自培训达标方能上岗"},
      ]
    }
  }
  render() {
    return (
     <div className="teachers">
      <div className="banner">
        <img src={Banner} />
      </div>
      <ul className="container">
        {this.state.data.map((item)=>{
          return(
            <li key={item.imgSrc}  className="clear">
            <div className="fl">
              <div className="fl img"><img src={item.imgSrc} /></div>
              <div className="fl containt">
               <p>{item.title}</p>
               <p>{item.detile}</p>
              </div>
            </div>
            <div className="fr arrow"><img src={teachers_arrow} /></div>
          </li>
          )
          })
        }
      </ul>
      <p><a>查看更多 ></a></p>
     </div>
    );
  }
}
export default Teachers;