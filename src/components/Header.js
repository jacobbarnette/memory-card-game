import React from 'react'

const Header = props => {
    console.log(props.count)
    return(
       
        <div className="Header">
            <h1 className="ui huge header">World of Warcraft Memory Game!</h1>
            <h2>Do not click the same Class Icon two times in a row</h2>
            <h3>Score: {props.count}</h3>
        </div>
    )
}

export default Header