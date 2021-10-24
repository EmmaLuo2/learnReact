import React, { createContext, useState, useContext } from 'react';

// 1、使用createContext创建一个容器
// 2、通过容器.Provider 将value中的值共享给子组件
const CountContext = createContext();

// 创建一个子组件，使用useContext(哪个容器) 来接收上下文的值
function ChildComponent () {
    const count = useContext(CountContext)
    return (
        <h2>这是子组件的count值{count}</h2>
    )
}


function Example () {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}> click me</button>  
            <CountContext.Provider value={count}>
                <ChildComponent></ChildComponent>
            </CountContext.Provider>
        </div>
    )
}
export default Example