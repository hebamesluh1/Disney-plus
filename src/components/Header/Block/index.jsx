import React from 'react'

const Block = ({href,src,title}) => {
    return (
        <a href={href}>
            <img src={src} alt={title} />
            <span>{title}</span>
        </a>
    )
}

export default Block