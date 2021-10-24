import React, {useCallback, useMemo, useState} from 'react';


//  普通写法
const Example = ()=>{
    const [count, setCount] = useState(0)

    //定义一个变量来计算count是奇数还是偶数
    // const getIsEventNumber = ()=> {
    //     console.log("重重")
    //     return count % 2 === 0
    // }
    const isEventNumber = count % 2 === 0
    const clickEvent = () => {
        console.log("叠叠")
        setCount(count+1)
    }

    /**
     * 小记： count每次发生变化的时候会引起组件的re-render, 导致isEventNumber会重新计算和clickEvent重复调用，即使值没有任何变化，
     */
    return (
        <>
            <div>{count} is a {isEventNumber ? 'even' : 'odd'} number</div>
            <button onClick={clickEvent}>click</button>
        </>
    )
}


//  升级写法（使用useCallback缓存钩子函数，useMemo缓存返回值）
const OtherExample = ()=> {
    const [count, setCount] = useState(0);
    const isEventNumber = useMemo(()=>{
        console.log("重重2")
        return count % 2 === 0;
    }, [count])
    const clickEvent = useCallback(()=>{
        console.log("叠叠2")
        setCount(count+1)
    }, [count])
    return (
        <>
            <div>{count} is a {isEventNumber ? 'even' : 'odd'} number</div>
            <button onClick={clickEvent}>click</button>
        </>
    )
    
}

export default OtherExample