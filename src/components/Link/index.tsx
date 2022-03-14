import React from 'react'

const Link = ({label, uri} : {label: string, uri: string}) =>
    <a href={uri} >
        <p>{label}</p>
    </a>;

export default Link