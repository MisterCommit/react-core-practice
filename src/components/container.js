import React ,{Component} from 'react';

class Container extends Component{
    render(){
        return(
            <div style={{display:"flex",flex:6,background:"brown"}}>
{this.props.children}
            </div>
        )
    }
}

export default Container