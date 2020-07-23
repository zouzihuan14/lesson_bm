import React ,{Component}from 'react';
import Swiper from "swiper"
import "swiper/css/swiper.css"
import './detail.css'

export default class Details extends React.Component {
  constructor() {
    super()
    // 这个组件 state , 属于这个组件， 不属于其他组件， 
    // 1. 用假数据 把页面先做出
    // 2. 未来再改成接口
    this.state = {
      loading: true,
      sliderList: [{
        id: 1,
        picUrl: 'https://images.daojia.com/pic/commodity/online/70d521722931d39c05b3d608aaaddcb1.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports' 
      }, {
        id: 2,
        picUrl: 'https://images.daojia.com/pic/commodity/online/d8fecda527d8478f99c553b322cd6e74.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }, {
        id: 3,
        picUrl: 'https://images.daojia.com/pic/commodity/online/84e50ddac079a5a8db55a55b7c448cd4.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      },{
        id: 4,
        picUrl: 'https://images.daojia.com/pic/commodity/online/d5f109846022186697d004b7fee39fc2.png?x-oss-process=image/auto-orient,0/format,webp',
        linkUrl: 'https://https://xw.qq.com/m/sports'
      }] // 幻灯片  没有必要去redux 

    }
  }
  componentDidMount() {
    new Swiper(".slider-container", {
      loop: true,
      autoplay: {
        delay: 1500,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    })
  }
  render(){
    return(
      <div className='banner'>
      <div className="slider-container">
      <div className="swiper-wrapper">
        {
          this.state.sliderList.map(slider => {
            return (
              <div className="swiper-slide" key={slider.id}>
                <a href={slider.linkUrl} className="slider-nav">
                  <img src={slider.picUrl} alt="" width="100%" height="100%"/>
                </a>
              </div>
            );
          })
        }
      </div>
      <div className="swiper-pagination"></div>
    </div>
    </div>
    )
  }
}