export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE'
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA'

export function setCitySelectorVisible (){
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: true
    }
}

export function fetchCityData (){
    return (dispatch,getState) => {
        fetch('/rest/cities')
            .then(res => res.json())
            .then(cityData => {
                dispatch(setCityDate(cityData))
            })
    }
}

export function setCityDate (cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}
