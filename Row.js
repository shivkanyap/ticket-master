import React from 'react'

class Ticketrow extends React.Component
{
    render()
    {
        return(
        
            <tr>
            <td>{this.props.ticket.ticket_code}</td>
            <td>{this.props.ticket.name}</td>
            <td>{this.props.ticket.department}</td>
            <td>{this.props.ticket.priority}</td>
            <td>{this.props.ticket.message}</td>
            <td>{this.props.ticket.status}</td>
            <td><button onClick={()=>{
                this.props.remove(this.props.ticket.ticket_code)}}>remove</button></td>
            </tr>
            
            
        )
    }
}
export  default Ticketrow 