import {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props){
    // let title=props.title, like setting this but special way
    const [title, setTitle] = useState(props.title)

    function clickHandler(){
        setTitle('Updated')
    }

    return <Card className='expense-item'> 
        {/* this is not allowed by the way 
        <div> {month, day, year} </div> */}

        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2> {props.title}</h2>
        <div className='expense-item__price'> {props.amount}</div>
        </div>
        <button onClick={clickHandler}> Change Title</button>
    </Card>

}

export default ExpenseItem; 

