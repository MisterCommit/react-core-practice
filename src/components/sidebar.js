import React, {Component} from 'react'

class SideBar extends Component {
    render(){
        return(
            <div style={{display:"flex", flex:1, background:'orange',}}>
{this.props.children}
            </div>
        )
    }
}

export default SideBar