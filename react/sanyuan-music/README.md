- router
 1. react-router
    react-router-dom
    react-router-config
 2. react-router 嵌套
    config routes

    当路由比较复杂时，传统的手写router/route 配置变得难以维护
    企业级的路由配置方案 react-router-config 
    清晰，可维护的 routes/index.js配置

    layout app里面总有几套皮肤，匹配那个级别的所有路由的
    routes react-router-config renderRoutes(route.routes)