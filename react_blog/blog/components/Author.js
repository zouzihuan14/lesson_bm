
import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'
import {
    QqOutlined,WechatOutlined,GithubOutlined
  } from '@ant-design/icons';
const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1422148627,2710988549&fm=26&gp=0.jpg"  /></div>
            <div className="author-introduction">
            斯蒂芬·库里（Stephen Curry），1988年3月14日出生于美国俄亥俄州阿克伦（Akron,Ohio），美国职业篮球运动员，司职控球后卫，效力于NBA金州勇士队。  
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<GithubOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author