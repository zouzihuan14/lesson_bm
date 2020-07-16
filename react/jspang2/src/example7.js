import React ,{useState , useMemo} from 'react';
function App() {
    const [name, setName] = useState('名称')
    const [content,setContent] = useState('内容')
    return (
        <>
          <button onClick={() => setName(new Date().getTime())}>name</button>
          <button onClick={() => setContent(new Date().getTime())}>content</button>
          <Button name={name}>{content}</Button>
        </>
    )
  }
  function Button({ name, children }) {
    function changeName(name) {
      console.log('11')
      return name + '改变name的方法'
    }
  
    const otherName =  changeName(name)
    return (
        <>
          <div>{otherName}</div>
          <div>{children}</div>
        </>
  
    )
  }
export default App