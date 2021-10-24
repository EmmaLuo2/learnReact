import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// export default class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//           <p>you clicked {this.state.count} times</p>
//           <button onClick={this.addCount}> click me</button>
//       </div>
//     );
//   }
//   addCount = ()=> {
//       console.log("this.000000", this)
//     //   this.setState()
//     this.setState({
//         count: this.state.count+1
//     })
//   }
// }

function Index() {
    // useEffect(()=>{
    //     console.log("index-------,coming")
    //     return (()=>{
    //         console.log("index-------, 解绑了")
    //     })
    // }, [])
    return (
        <h2>首页</h2>
    )
}
function List() {
    return (
        <h2>List Page</h2>
    )
}

function Example () {
    const [count , setCount] = useState(0);
    const [age , setAge ] = useState(19);
    useEffect(()=>{
        console.log("example组件中的effect-------, count")
    },[count])
    useEffect(()=>{
        console.log("example组件中的effect-------, age")
    },[age])
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}> click me</button>  
            <p>今年 {age} 岁</p>
            <button onClick={()=>{setAge(age+1)}}> 变大一岁</button>  
            <Router>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/list/">列表页</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>     
        </div>
    )
}
export default Example