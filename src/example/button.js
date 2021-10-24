import React, {useContext} from 'react';

import { UPDATE_COLOR, ColorContenx } from './color';

function Buttons() {
    const {dispatch} = useContext(ColorContenx)
    return (
        <div>
            <button onClick={()=>{dispatch({color: 'red', type: UPDATE_COLOR})}}>红色</button>
            <button onClick={()=>{dispatch({color: 'yellow', type: UPDATE_COLOR})}}>黄色</button>
        </div>
    )
}

export default Buttons