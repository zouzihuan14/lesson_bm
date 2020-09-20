/*
 * @Author: Zzceaon
 * @Date: 2020-08-09 07:33:25
 * @LastEditTime: 2020-08-09 07:44:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Singer\store\actionCreators.js
 */
import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import { getSingerInfoRequest } from '../../../api/request'

const changeArtist = (data) => ({
  type: actionTypes.CHANGE_ARTIST,
  data: fromJS(data)
})
const changeSongs = (data) => ({
  type: actionTypes.CHNAGE_SONGS_OF_ARTIST,
  data: fromJS(data)
})
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})
export const getSingerInfo = (id) => {
  return dispatch => {
    getSingerInfoRequest(id).then(data => {
      dispatch(changeArtist(data.artist))
      dispatch(changeSongs(data.hotSongs))
      dispatch(changeEnterLoading(false))
    })
  }
}