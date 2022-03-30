import React from "react"
import "./Cube.css"


const Cube = ({ name, color, rounded, width, height }) => {
    return <div className="item" style={{
        width: width,
        height: height,
        borderRadius: rounded ? '50%' : '0',
        background: color
    }
    }
    > {name}</div >
}

export default Cube 
