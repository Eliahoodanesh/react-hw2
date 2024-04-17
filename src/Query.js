import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Query() {
    const [query] = useSearchParams();

    return (
        <div className='container'>
            <h2>Query: {query.get("search")}</h2>
        </div>
    )
}