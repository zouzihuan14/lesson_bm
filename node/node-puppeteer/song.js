const axios= require ('axios')
async function run(){
    let result =await axios({
        url:'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA'

    })
    let id=result.data.result.song[0].id
}