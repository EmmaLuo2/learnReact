//  为了达成共享颜色的目的，这块代码提供一个容器，并作为父组件包裹index
import React, { createContext, useReducer } from 'react';

// 创建一个颜色的上下文
export const ColorContenx = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

function reducer(state,action) {
    switch (action.type) {
        case UPDATE_COLOR : 
            return action.color;
        default:
            return state
    }
}


// 父组件，使用props.children代替子组件
export const Color = props => {
    const [color, dispatch] = useReducer(reducer,'blue')

    return (
        <ColorContenx.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContenx.Provider>
    )
}


// 这块也要弄一个reducer，然后将dispatch共享出去
