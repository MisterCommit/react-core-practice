import React,{Component} from 'react';
import { render } from 'react-dom';

class Footer extends Component{
render(){
    return(
<div style={{display:'flex', flex:1,backgroundColor:'pink'}}>
{this.props.children}
</div>
    )
}
}

export default Footer