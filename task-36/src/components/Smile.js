import React from "react";

class Smile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            vol: props.initialValue
        }
    }

    render() {
        return (
            <div className="block">
                <span role="button" onClick={()=> {
                    this.setState({vol:  this.state.vol += 1})
                }}>{this.props.name}</span>
                <input id="first" readOnly="readonly" value={this.state.vol} />
            </div>
        )
    }
}

export default Smile ;