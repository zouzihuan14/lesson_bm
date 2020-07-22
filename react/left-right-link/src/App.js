import React ,{useState, useEffect , useRef}from 'react';
import './App.css';
const data = {
  tab1: [
    { c: "1-1" },
    { c: "1-2" },
    { c: "1-3" },
    { c: "1-4" },
    { c: "1-5" },
    { c: "1-6" }
  ],
  tab2: [
    { c: "2-1" },
    { c: "2-2" },
    { c: "2-3" },
    { c: "2-4" },
    { c: "2-5" },
    { c: "2-6" }
  ],
  tab3: [
    { c: "3-1" },
    { c: "3-2" },
    { c: "3-3" },
    { c: "3-4" },
    { c: "3-5" },
    { c: "3-6" },
    { c: "3-7" }
  ],
  tab4: [
    { c: "4-1" },
    { c: "4-2" },
    { c: "4-3" },
    { c: "4-4" },
    { c: "4-5" },
    { c: "4-6" },
    { c: "" },
    { c: "" },
    { c: "" },
    { c: "" },
    { c: "" },
    { c: "" },
    { c: "" },

  ]
};
let base = 0 ,ranges =[]
function App() {
  const navs= Object.keys(data)
  const [activeIndex,setActiveIndex]=useState(0)
  const handleTabClick = (e)=>{
  const ltab = e.target.getAttribute('data-ltab');
  const activeIndex = e.target.getAttribute('data-index')
  setActiveIndex(parseInt(activeIndex))
  const rtab = document.querySelector(`[data-rtab="${ltab}"]`)
  rtab.scrollIntoView({
    behavior:'smooth'
  })
    //需要滚动哪个元素，scrollIntoView
  }
  const ref = useRef()
    useEffect(()=>{
      const tabDetail = ref.current ;
      const tabs = tabDetail.querySelectorAll('[data-rtab]')
      for(let tab of tabs){
        let h = tab.getBoundingClientRect().height;
        let newH = base + h 
        ranges.push([base,newH])
        base=newH;
      }
      // console.log(ranges)
      function onScroll(e){
        const scrollTop = tabDetail.scrollTop
        const index = ranges.findIndex(range =>scrollTop>=range[0]&&scrollTop<range[1]
        &&scrollTop<range[1])
        setActiveIndex(index);
      }
      tabDetail.addEventListener('touchstart',()=>{
        tabDetail.addEventListener('touchmove',onScroll)
      })
      tabDetail.addEventListener('touchend',()=>{
        tabDetail.removeEventListener('touchmove',onScroll)
      })
     },[])
        //onMouseDown 再绑定 scroll
        //onMouseUp   移除 scroll

  return (
    <div className="linkage">
      <nav>
      { navs.map((nav,i)=>{
          return (
          <div key={i}
          data-ltab={nav}
          data-index={i}
          onClick={handleTabClick}
          className={activeIndex===i?'active':''}>{nav}</div>
          )
        })}
      </nav>
      <div className="tab-detail" ref={ref}>
        {
          navs.map((nav,i)=>{
            return (<dl key={i} data-rtab={nav}>
              <dt >{nav}</dt>
              {
                data[nav].map((con,j)=>{
                  return(
                    <dd key={j}>
                      {con.c}
                    </dd>
                        )
                })
              }
              </dl>)
          })
        }
      </div>
    </div>
  );
}

export default App;
