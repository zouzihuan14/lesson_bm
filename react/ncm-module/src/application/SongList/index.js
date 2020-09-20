/*
 * @Author: Zzceaon
 * @Date: 2020-08-08 19:12:49
 * @LastEditTime: 2020-08-09 06:15:37
 * @LastEditors: Please set LastEditors
 * @Description: 由于和播放组件的数据交互较多, 所以放到application目录
 * @FilePath: \Course\React\ncm-module\src\application\SongList\index.js
 */
import React, { forwardRef, memo } from 'react';
import { SongList, SongItem } from './style'
import { getName } from '../../api/utils'

const SongsList = forwardRef((props, refs) => {
  const { collectCount, showCollect, songs } = props
  const totalCount = songs.length
  const selectItem = (e, index) => {
    console.log(index)
  }
  let songList = (list) => {
    let res = []
    for (let i = 0; i < list.length; i++) {
      let item = list[i]
      res.push(
        <li key={item.id} onClick={(e) => selectItem(e, i)}>
          <span className="index">{i + 1}</span>
          <div className="info">
            <span>{item.name}</span>
            <span>
              { item.ar ? getName(item.ar) : getName(item.artists) } - {item.al ? item.al.name : item.album.name}
            </span>
          </div>
        </li>
      )
    }
    return res
  }
  const collect = (count) => {
    return (
      <div className="add_list">
        <i className="iconfont">&#xe601;</i>
        <span> 收藏 ({Math.floor(count / 1000) / 10} 万)</span>
      </div>
    )
  }
  return (
    <SongList ref={refs} showBackground={props.showBackground}>
      <div className="first_line">
        <div className="play_all" onClick={(e) => selectItem(e, 0)}>
          <i className="iconfont">&#xe732;</i>
          <span> 播放全部 <span className="sum">(共 {totalCount} 首)</span></span>
        </div>
        { showCollect ? collect(collectCount) : null }
      </div>
      <SongItem>
        { songList(songs) }
      </SongItem>
    </SongList>
  )
})

export default memo(SongsList)