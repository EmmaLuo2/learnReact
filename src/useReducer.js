// const [state, dispatch] = useReducer(reducer, initialArg, init);
// 它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

// 使用reducer写一个计数器

import React, { useReducer } from 'react';
const initialState = {count: 0}

function reducer(state, action) {
    switch (action.type) {
        case 'add' :
            return {count: state.count + 1};
        case 'sub' :
            return {count: state.count - 1};
        default: 
            throw new Error();
    }
}

function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h2>现在的值是{state.count}</h2>
            {/* 注意，onClick中放的是点击时触发的函数而不是函数的调用，在函数组件中，一般的写法是用箭头函数包裹或者把函数拎出来 */}
            <button onClick={()=>{dispatch({type: 'add'})}}>+1</button>
            <button onClick={()=>{dispatch({type: 'sub'})}}>-1</button>
        </div>
    )
}

export default ReducerDemo