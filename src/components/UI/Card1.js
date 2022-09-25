import "./Card.css";
function Card1(props) {
    const classes = 'card ' + props.className
    return (
        
        <div className={classes}>{props.children}</div>
    )
}

export default Card1;
