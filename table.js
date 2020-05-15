import React from 'react'
import Ticketrow from './Row'


const Tablelist=(props)=>{
    
   return(
       <table class="table">
           <thead>
               <tr>
                   <th>code</th>
                   <th>name</th>
                   <th>department</th>
                   <th>priority</th>
                   <th>message</th>
                   <th>Status</th>
                   <th>Delete</th>
               </tr>
            </thead>
               <tbody>
                   
                    {props.tickets.map(function(ticket){
                    return <Ticketrow key={ticket.ticket_code} ticket={ticket} remove={props.deletefun}/>
                    })}
                    
                </tbody>
        </table>
   )
}
export default Tablelist