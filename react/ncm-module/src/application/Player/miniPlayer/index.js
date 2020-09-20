/*
 * @Author: Zzceaon
 * @Date: 2020-08-21 09:52:51
 * @LastEditTime: 2020-08-21 10:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Player\miniPlayer\index.js
 */
import React, { memo } from 'react'
import { getName } from '../../../api/utils'
import { miniPlayerContainer } from './style'

function miniPlayer(props) {
  const { song } = props
  return (
    <miniPlayerContainer>
      <div className="icon">
        <div className="imgWrapper">
          <img className="play" src={song.al.picUrl} width="40" height="40" alt="img"/>
        </div>
      </div>
      <div className="text">
        <h2 className="name">{song.name}</h2>
        <p className="desc">{getName(song.ar)}</p>
      </div>
      <div className="control">
        <i className="iconfont"></i>
      </div>
      <div className="control">
        <i className="iconfont"></i>
      </div>
    </miniPlayerContainer>
  )
}

export default memo(miniPlayer)