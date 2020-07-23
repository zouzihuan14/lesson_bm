

3. 年轻的react hooks 全新开发方式
 class Component ->function
 函数式编程

 class  +  construction +  生命周期函数  + render -> function + react hooks魔法函数
 - useCallback 缓存一个函数
 - useMemo 

 4. 状态组件编写顺序
   - 数据

 5. redux 
    - 简单的redux项目结构  
    store.js  createStore reduces
    中间件 axios redux-thunk 支持异步
    reducer.js combineReducers
    actions.js 数据请求 状态改变的触发  都由action来负责
    ActionTypes 可读性
   
   - redux API ->设计状态(reducer + actions)
    初始值from to  两个reducer函数
    函数初始值 action return初始值



  - 数据组件化
  1. connect 高阶返回原组件
    connect({
      mapState,mapDispatch
    })(Component)


    - reducer
    1. action 标准做法
    返回{type payload} 更新reducer的状态
    组件里的时间生命周期等功能 主要是和数据状态打交道，归为action来做
    所有的action export function
    在组件里引入需要的actions
    -bindActionCreators actions变成本地调用的函数  

  1. action 
     from 北京
     to   南昌
