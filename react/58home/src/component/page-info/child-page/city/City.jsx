import React, { useState, useEffect } from 'react';
import Back from '../../../public/Back';
import './City.css'
import HotCity from './city-component/HotCity'
import AllCity from './city-component/AllCity';

export default function City() {
    const [cities, setCities] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/cities/cities")
            .then(data => data.json())
            .then(res => setCities(res))
    }, [])
    const hotCities = cities.hotCities
    const allCities = cities.cityList
    console.log(allCities)
    return (
        <div className="city-page">
            <div className="body">
                <div className="top-wrap">
                    <div className="city-top">
                        <Back />
                        <span className='city-title'>选择服务地址</span>
                        <span style={{ width: 42, height: 42 }}></span>
                    </div>
                </div>
                <HotCity hotCities={hotCities} />
                <AllCity allCities={allCities} />
            </div>
        </div>
    )
}