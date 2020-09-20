/*
 * @Author: Zzceaon
 * @Date: 2020-08-01 10:21:33
 * @LastEditTime: 2020-08-08 17:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\React\ncm-module\src\application\Rank\index.js
 */ 
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { filterIndex } from '../../api/utils'
import { Container, List, ListItem, SongList, EnterLoading } from './style'
import Loading from '../../baseUI/loading'
import Scroll from '../../baseUI/scroll'
import { renderRoutes } from 'react-router-config'

function Rank(props) {
  const { rankList: list, loading } = props
  const { getRankListDataDispatch } = props
  let rankList = list ? list.toJS() : []
  let globalStartIndex = filterIndex(rankList)
  let officialList = rankList.slice(0, globalStartIndex)
  let globalList = rankList.slice(globalStartIndex)
  // 榜单数据未加载出来之前都给隐藏
  let displayStyle = loading ? {"display": "none"}: {"display": ""}
  useEffect(() => {
    if (!rankList.length) {
      getRankListDataDispatch()
    }
  }, [])
  const enterDetail = (detail) => {
    props.history.push(`/rank/${detail.id}`)
  }
  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {
          list.map((item, index) => {
            return (
              <ListItem
                key={`${item.coverImgId}${index}`}
                tracks={item.tracks}
                onClick={() => enterDetail(item)}
              >
                <div className="img_wrapper">
                  <img src={item.coverImgUrl} alt=""/>
                  <div className="decorate"></div>
                  <span className="update_frequency">{item.updateFrequency}</span>
                </div>
                { renderSongList(item.tracks) }
              </ListItem>
            )
          })
        }
      </List>
    )
  }
  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {
          list.map((item, index) => {
            return <li key={index}>{index+1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null
  }
  return (
    <Container>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}> 官方榜 </h1>
            { renderRankList(officialList) }
          <h1 className="global" style={displayStyle}> 全球榜 </h1>
            { renderRankList(globalList, true) }
          { loading ? <EnterLoading><Loading></Loading></EnterLoading> : null }
        </div>
      </Scroll>
      { renderRoutes(props.route.routes) }
    </Container>
  )
}
const mapStateToProps = (state) => ({
  rankList: state.getIn(['rank', 'rankList']),
  loading: state.getIn(['rank', 'loading'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDataDispatch() {
      dispatch(actionCreators.getRankList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Rank))