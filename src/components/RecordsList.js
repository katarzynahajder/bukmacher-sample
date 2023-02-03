import React from "react"
import RecordListItem from "./RecordListItem"

class RecordList extends React.Component{
    state={
        elements:[{
            id: 0, 
            state: 'aaaa',
            league: 'eeee',
            schedule: '16:00',
            firstTeam: 'bbbb',
            secondTeam: 'iiii',
            bet: 'pppp',
            exchange: 16.8,
            bid: 100,
            profit: 0
        }],
        checked: false,
        total: 0
    }
    markAsWon(id){
        const index=this.state.elements.findIndex(x=>x.id===id)
        const newElements=this.state.elements
        newElements[index].state='won'
        this.setState({elements: newElements})
    }
    markAsLost(id){
        const index=this.state.elements.findIndex(x=>x.id===id)
        const newElements=this.state.elements
        newElements[index].state='lost'
        this.setState({elements: newElements})
    }
    totalProfit(id, profit){
        const index=this.state.elements.findIndex(x=>x.id===id)
        const newElements=this.state.elements
        newElements[index].profit='????'
        this.setState({
            elements: newElements,
            total: profit
        })
    }
    addItem=()=>{
        const item={
            id: Math.random(),
            state: 'default',
            league: document.getElementById('league').value,
            schedule: document.getElementById('schedule').value,
            firstTeam: document.getElementById('firstTeam').value,
            secondTeam: document.getElementById('secondTeam').value,
            bet: document.getElementById('bet').value,
            exchange: document.getElementById('exchange').value,
            bid: document.getElementById('bid').value,
            profit: 0
        }
        const newElements=[item, ...this.state.elements]
        this.setState({elements: newElements})
        document.getElementById('league').value='';
        document.getElementById('schedule').value='';
        document.getElementById('firstTeam').value='';
        document.getElementById('secondTeam').value='';
        document.getElementById('bet').value='';
        document.getElementById('exchange').value='';
        document.getElementById('bid').value=''
    }
    handleChange=()=>{this.setState({checked: !this.state.checked})};
    render(){
        const elements=this.state.elements.map(e=>{
            return <RecordListItem
                        element={e}
                        wonClicked={this.markAsWon.bind(this)}
                        lostClicked={this.markAsLost.bind(this)}
                        tax={this.state.checked}
                        profitChanged={this.totalProfit.bind(this)}/>
        })
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Liga</th>
                            <th>Godzina</th>
                            <th>Drużyna 1</th>
                            <th>Drużyna 2</th>
                            <th>Zakład</th>
                            <th>Kurs</th>
                            <th>Stawka</th>
                            <th>Zysk</th>
                        </tr>
                        <tr>
                            <td><input id='league' type='text' /></td>
                            <td><input id='schedule' type='text' /></td>
                            <td><input id='firstTeam' type='text' /></td>
                            <td><input id='secondTeam' type='text' /></td>
                            <td><input id='bet' type='text' /></td>
                            <td><input id='exchange' type='number' /></td>
                            <td><input id='bid' type='number' /></td>
                            <td></td>
                            <td className='card buttons'><button onClick={this.addItem.bind(this)}>Dodaj do listy</button></td>
                            <td className='card buttons'><input type='checkbox' checked={this.state.checked} onChange={this.handleChange} />Podatek</td>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='card' colSpan="2">Łączny zysk</td>
                            <td className='card'>{this.state.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default RecordList