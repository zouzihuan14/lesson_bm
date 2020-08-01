import React, { useState, useEffect, useRef, memo } from 'react';
import './allcity.css'
import { connect } from 'react-redux';
import { changeCity } from '../../../store/actionCreator';
import { Link } from 'react-router-dom';

let ranges = [], base = 0
function AllCity(props) {
    const { allCities, chooseCity } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const handleTabClick = (e) => {
        const rnav = e.target.getAttribute('data-rnav')
        const activeIndex = e.target.getAttribute('data-index')
        const cityBody = document.querySelector(`[data-body="${rnav}"]`)
        setActiveIndex(parseInt(activeIndex))
        cityBody.scrollIntoView({})
    }
    const ref = useRef()
    useEffect(() => {
        const cityBody = ref.current
        const tabs = cityBody.querySelectorAll('[data-body]')
        const page = document.querySelector('.page')
        for (let tab of tabs) {
            let h = tab.getBoundingClientRect().height
            let newH = base + h
            ranges.push([base, newH])
            base = newH
        }
        const onScroll = () => {
            const scrollTop = page.scrollTop
            const index = ranges.findIndex(ranges => scrollTop >= ranges[0] && scrollTop < ranges[1])
            setActiveIndex(index)
        }
        page.addEventListener('scroll',onScroll)
    }, [allCities])
    return (
        <div className="all-city">
            <div ref={ref} className="city-name">
                {
                    allCities?.map((item, i) => {
                        return (
                            <div
                                key={item + i}
                                data-body={item.title}
                                className="city-title">
                                <p className="left-nav">{item.title}</p>
                                <ul className="city-fir" key={i + item}>
                                    {
                                        item.citys?.map((city, j) => {
                                            return (
                                                <Link 
                                                to="/Home"
                                                onClick={() => {chooseCity(city.name)}}
                                                key={j + city.name}>
                                                    {city.name}
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="right-nav">
                <p
                    data-index={0}
                    data-rnav={'#'}
                    onClick={handleTabClick}
                    className={activeIndex === 0 ? "active" : ""}>#</p>
                {
                    allCities?.map((item, i) => {
                        return (
                            <p
                                data-index={i + 1}
                                data-rnav={item.title}
                                onClick={handleTabClick}
                                className={activeIndex === i + 1 ? "active" : ""}
                                key={item + i}
                            >{item.title}
                            </p>
                        )
                    })
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseCity: (city) => {
            dispatch(changeCity(city))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(memo(AllCity))