import React from 'react'
import {UnorderedListOutlined} from '@ant-design/icons'

export const IsListBtn = ({children, ...props}) => {
    return(
        <>
        <button {...props}> <UnorderedListOutlined/></button>
       {children}
        </>
    )
}