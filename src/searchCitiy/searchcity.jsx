import React , {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Row from  '../common/layout/row'
import { addCity, getCitys } from './searchcityActions'
import '../common/template/dependencies'
class SearchCity extends Component{
    constructor(props){
        super(props)
        this.state = {name: '', date:''}   
    }

    render(){
        return(
        <div className='search'>
            
            <div className='col-sm-3'>
                <input type="text" className='form-control input-sm inputCity' value={this.state.name} onChange={(e)=> this.setState({ name: e.target.value })} />
            </div>
            <div className='col-sm-3'>
                <input className='form-control date-mask from-date' value={this.state.date} type="date" onChange={(e)=> this.setState({ date: e.target.value })} />
            </div>

            <div className='col-sm-6'>
                <button className='btn btn-success col-sm-4 col-lg-4 col-md-4 col-4' onClick={()=>{
                    this.props.getCitys({name: this.state.name,date: this.state.date})
                    this.setState({name: '', date:''})
                }}>Buscar Cidade</button>
            </div>
            <div>
                <table className='table'>
                        <thead>
                            <tr>
                                <th>Cidades</th>
                            </tr>
                        </thead>
                        <tbody>
                            {                   
                                this.props.city.list.map( data =>(  
                                    <tr key={this.props.city.list.indexOf(data)}>
                                        <td>
                                            <button className='btn btn-success col-sm-6 col-lg-6 col-md-6 col-6' onClick={() => this.props.addCity(data,this.props.city.date)}>
                                                <h4>{data.formatted}</h4>
                                            </button>
                                        </td>    
                                    </tr>
                                )) 
                            } 
                        </tbody>
                </table>                   
            </div>
        </div>)
    }
}
const mapStateToProps = state => ({city: state.searchcity})
const mapDispatchToProps = dispatch => bindActionCreators({addCity,getCitys}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchCity)
