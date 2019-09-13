import React , { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Row from  '../common/layout/row'
import ValueBox from  '../common/widget/valueBox'

class Dashboard extends Component {
    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' />
                <Content>
                    <Row> 
                        {this.props.city.city.map( city =>(
                            <ValueBox 
                                key={this.props.city.city.indexOf(city)} 
                                cols='12 12' 
                                color='green' 
                                icon='sun-o' 
                                resume={city.info.data.daily.data[0].summary} 
                                name={city.selected.formatted} 
                                climateMaxNow={city.info.data.daily.data['0'].temperatureHigh}
                                climateLowNow={city.info.data.daily.data['0'].temperatureLow}
                                week={city.info.data.daily.data}
                                resumeWeek={city.info.data.daily.summary}
                            />
                        ))}                       
                    </Row>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => ({city: state.searchcity})
export default connect(mapStateToProps)(Dashboard)