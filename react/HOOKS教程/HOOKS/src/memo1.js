// memo 高阶组件 只适用于函数组件  减少组件的重复渲染
import React,{memo ,useState} from 'react'

export const MyComponent = () => {
    const [userInfo, setUserInfo] = React.useState({
      name: " John ",
      lastname: "Doe"
    });
    setTimeout(()=>{
        console.log('------------')
        setUserInfo({
            ...userInfo,
            name: " John ",
            lastname:" Doe "
          })
    },2000)
    return (
      <>
        <DisplayUsername name={userInfo.name} lastname={userInfo.lastname} />
        <input
          value={userInfo.name}
          onChange={e =>
            setUserInfo({
              ...userInfo,
              name: e.target.value
            })
          }
        />
        <input
          value={userInfo.lastname}
          onChange={e =>
            setUserInfo({
              ...userInfo,
              lastname: e.target.value
            })
          }
        />
      </>
    );
  };
  
  export const DisplayUsername = React.memo(props => {
    console.log(
      "Hey I'm only rerendered when name gets updated, check React.memo"
    );
  
    return <h3>{props.name}{props.lastname}</h3>;
  });