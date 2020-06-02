主题  react beer 应用开发思路整理
beer 搜索 -> 列表->点进去  创建路由


3个路由设计  beer

restful
详情页 /beer/:bearid
语义化设计URL  /post/:postid 

1. 把应用架构搭好，路由
2. 组件化思维
3. list列表的编写流程
4. router  this.props.match.params
5. / -> mian.js -> loadBeers -> loading -> list 
6. / -> /search/:searchTerm 路由 -> rule -> 显示
componentDidMount 