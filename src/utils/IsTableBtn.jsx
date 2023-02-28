import React from 'react'
import {AppstoreOutlined} from '@ant-design/icons'

export const IsTableBtn = ({children, ...props}) => {
    return(
        <>
        <button {...props}> <AppstoreOutlined/></button>
       {children}
        </>
    )
}