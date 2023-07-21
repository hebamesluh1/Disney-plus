import React from 'react'
import { Link } from 'react-router-dom'

const Block = ({ to, src, title }) => {
    return (
        <Link to={to}>
            <img src={src} alt={title} />
            <span>{title}</span>
        </Link>
    )
}

export default Block