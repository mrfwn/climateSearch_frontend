import React , { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Row from  '../common/layout/row'
import ValueBox from  '../common/widget/valueBox'

class Dashboard extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' />
                <Content>
                    <Row> 
                        {this.props.city.map( city =>(
                            <ValueBox key={city.id} cols='12 4' color='green' icon='sun-o' value={city.climate} text={city.name}/>
                        ))}                       
                    </Row>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => ({city: state.searchcity})
export default connect(mapStateToProps)(Dashboard)