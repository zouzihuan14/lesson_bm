// console.log('hello member')

// 有什么问题？ 
interface membersEntity{
    id:number;
    name:string;
    avatar:string;

}
const member :membersEntity[] = [
  {
    id: 1314,
    name: '黄毅超',
    avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
  },
  {
    id: 520,
    name: '徐剑豪',
    avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
  },
  {
    id: 10000,
    name: '罗钦太',
    avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
  }
]
const tbody=document.querySelector('#member tbody');
tbody.innerHTML=membersEntity.map((member)=>{
    return `
    <tr>
        <td>${member.id}</td>
        <td>${member.name}</td>
        <td>
        <img src="${member.avatar}"/> </td>
    `
}).join("")
