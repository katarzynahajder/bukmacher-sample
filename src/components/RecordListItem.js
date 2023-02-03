import React from "react"

const RecordListItem=(props)=>{
    let state='card'
    let exchange=props.element.exchange
    let bid=props.element.bid
    let profit='oczekujące'
    let tax=props.tax
    if(props.element.state=='won'){
        state='card '+props.element.state
        if(tax)bid*=0.88
        profit=Number(Math.round(exchange*bid+'e+2')+'e-2')}
        if(tax&&(profit>=2280))profit=Number(Math.round(profit*0.9+'e+2')+'e-2')
    else if(props.element.state=='lost'){
        state='card '+props.element.state
        profit=0-bid}
    return(
        <tr key={props.element.id}>
            <td className='card'>{props.element.league}</td>
            <td className='card'>{props.element.schedule}</td>
            <td className='card'>{props.element.firstTeam}</td>
            <td className='card'>{props.element.secondTeam}</td>
            <td className='card'>{props.element.bet}</td>
            <td className='card'>{props.element.exchange}</td>
            <td className='card'>{props.element.bid}</td>
            <td className={state} onChange={console.log(profit) /*()=>props.profitChanged(props.element.id, profit)*/}>{profit}</td>
            <td className='card buttons'><button onClick={()=>props.lostClicked(props.element.id)}>Przegrana</button></td>
            <td className='card buttons'><button onClick={()=>props.wonClicked(props.element.id)}>Wygrana</button></td>
        </tr>
    )
}

export default RecordListItem