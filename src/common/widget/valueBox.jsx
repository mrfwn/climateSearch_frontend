import React from 'react'
import Grid from '../layout/grid'

function weekDay(timestamp){
    var time = new Date(timestamp*1000);
    var days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    return days[time.getDay()]
}

export default props => (
    <Grid cols={props.cols}> 
        <div className={`small-box bg-${props.color}`}> 
            <div className='inner'> 
                <h3>{props.name}</h3>
                <h3>Max:{props.climateMaxNow}°</h3>
                <h3>Min:{props.climateLowNow}°</h3>
                <h2>{props.resume}</h2>
            </div> 
            <div className='icon'> 
                <i className={`fa fa-${props.icon}`}></i>
            </div> 
            <div>
                <table className='table'>
                        <thead>
                            <tr>
                                {
                                    props.week.map( data =>(  
                                    <th key={props.week.indexOf(data)}>
                                        <h4>{weekDay(data.time)}</h4>
                                    </th>   
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {                   
                                    props.week.map( data =>(  
                                        <td key={props.week.indexOf(data)}>
                                            <h4>Max:{data.temperatureHigh}°</h4>
                                            <h4>Min:{data.temperatureLow}°</h4>
                                            <h4>{data.summary}°</h4>
                                        </td>    
                                    )) 
                                } 
                             </tr>
                        </tbody>
                </table>
            </div>
            <div className='inner'>
                <h4>{ props.resumeWeek? 'Resumo da Semana : ' + props.resumeWeek : ''}</h4>
            </div>                   
        </div> 
    </Grid> 
)