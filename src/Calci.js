import React from 'react';
import './Newcal.css'

class Calci extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: "0",
            cname: " ",
            value: "0",
            service: "0",
            name: [] ,
            tip: [] ,
            count: 2
        }
    }

    bill=event=>{
        this.setState({value:event.target.value})
        setTimeout(this.add,20)
    }

    service=()=>{
        var x=document.getElementById('s').value
        x==='e'?this.setState({service:20}):(x==='m'?this.setState({service:10}):this.setState({service:5}))
        setTimeout(this.add,20)
    }

    cname=event=>{
        this.setState({cname:event.target.value})
        setTimeout(this.add,20)
    }
    
    add=()=>{
        var arr=[this.state.cname,this.state.value,this.state.service]
        this.props.onSelectLanguage(arr)
    }
    
    push = () => {
        console.log('hello')
        var arr = this.state.name
        arr.push(this.props.pass[0])
        this.setState({ name: arr })
        var man = this.state.tip
        man.push((this.props.pass[1] * this.props.pass[2]) / 100)
        this.setState({ tip: man })
    }

    calculate = () => {
        document.getElementById('tt').innerHTML = this.state.name.length
        document.getElementById('pp').innerHTML = this.state.tip.reduce((sum, elem) => { return sum = sum + elem })
    }

    render() {

            return(
            <div className='container'>
                <div className='input'>
                    <p className='amt'>Enter your bill amount</p> <br></br>
                    <input type='number' placeholder='0' onChange={this.bill}/> Rs.
                    <fieldset className='folk'>
                    <p>How was the service?
                    <select className='drop' id='s' type='dropdown' onChange={this.service}>
                    <option defaultValue hidden> Choose </option>    
                    <option value='e' >Excellent 20%</option>
                    <option value='m' >Moderate 10%</option>
                    <option value='b' >Bad 5%</option>
                    </select>
                    <input className='cool' type='text' placeholder='Customer Name' onChange={this.cname}></input>
                    <button className='adda' onClick={this.push}>Add Customer</button>
                    </p>
                    </fieldset>
                </div>
                <div className='textarea'>
                        <fieldset className='cust'><h4 className='sony'>Customer List:</h4> </fieldset>
                        <div className='center_div'>
                        <ul>{this.state.name.map((item, index) => { return <li key={index.toString()}>{item + " offering a tip of " + this.state.tip[index] + " rupee."}</li> })}</ul>
                </div>
                </div>
                <div className='submit'>
                    <button className='ctc' onClick={this.calculate}>Calculate Tip & Customer</button>
                </div>
                <div className='tab'>
                    <table>
                        <thead>
                            <tr>
                                <th className='one'> Total Customer </th>
                                <th className='two'> Tip </th>
                            </tr>
                        </thead>
                      
                        <tbody>
                            <tr>
                                <td className='one'><span id='tt'>0</span></td>
                                <td className='two'><span id='pp'>0</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='footer'>
                    <h4 className='futer'> React Tip Calculator </h4>
                </div>
            </div>
        )
    }
}

export default Calci;