import './Card.css'

function Card(props){
    //i think this is if our classes in css will always be preceeded by card
    const classes = 'card' + props.className

    return <div className={classes}>
        {props.children}
    </div>
}

export default Card;