import React from'react'
import axios from 'axios'
import {Chart} from 'react-google-charts'
class Graph extends React.Component
{

    
    
    
    render()
    {
        let high=0;
        let low=0;
         let medium=0;
         let HR=0;
         let TECHNICAL=0;
         let TRAVEL=0;
        console.log(this.props.pieHandle)
        return(
        <div>
            {
                this.props.pieHandle.forEach(pi=>{
                    console.log(pi)
                    if(pi.priority==='high')
                    {
                        high++
                    }
                    else if(pi.priority==='low')
                    {
                        low++
                    }
                    else{
                        medium++
                    }

                   
                })
            }
                {console.log(high)}
               { console.log(low)}
                {console.log(medium)}

                {
                    this.props.pieHandle.forEach(pii=>{
                        if(pii.department==="HR")
                        {
                            HR++
                        }
                        else if(pii.department.toUpperCase()==="TECHNICAL")
                        {
                            TECHNICAL++
                        }
                        else{
                            TRAVEL++
                        }            

                    })
                }
                {console.log(HR)}
                {console.log(TECHNICAL)}
                <Chart chartType='PieChart'  data={[["priority","count"],["high",high],["low",low],["medium",medium]]}/>
                <Chart chartType='ColumnChart'  data={[["priority","count"],["high",high],["low",low],["medium",medium]]}/>
                

            
            </div>
        )
    }
}
export default Graph