import React, {useContext}from 'react';
import { ColorContenx } from './color';


function ShowArea() {
    const {color} = useContext(ColorContenx)
    return <div style={{color: color}}>这个字体是{color}的了</div>
}

export default ShowArea