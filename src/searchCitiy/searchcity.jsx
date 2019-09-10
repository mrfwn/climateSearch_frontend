import React , {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addCity } from './searchcityActions'
class SearchCity extends Component{
    constructor(props){
        super(props)
        this.state = {name: '',climate: ''}
    }

    render(){
        return(
        <div>
            <input value={this.state.name} onChange={(e)=> this.setState({ name: e.target.value })} />
            <input value={this.state.climate} onChange={(e)=> this.setState({ climate: e.target.value })} />
            <button onClick={()=>this.props.addCity({
                name: this.state.name,
                climate: this.state.climate
            })}>Adicionar Cidade</button>
        </div>)
    }
}
const mapStateToProps = state => ({city: state.searchcity})
const mapDispatchToProps = dispatch => bindActionCreators({addCity}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchCity)
