import './index.css'

function Button(props) {

    const active = props.active === props.category ? "active": "no"
    const buttonClassName = `Button1 Button1--${active}`

    return ( 
            <button className={buttonClassName} onClick={props.onClick}>
                <p>{props.children}</p>
            </button>
     );
}

export default Button;