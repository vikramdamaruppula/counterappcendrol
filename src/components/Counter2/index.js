import "./index.css"

const Counter2 =props=>{
    const{increase} = props
    return(
        <p className="count"> count: {increase} </p>
    )
}

export default Counter2