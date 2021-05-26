import React from 'react'

class Selector extends React.Component {

    render() {

        const {name} = this.props;

        return (
           <li>
           {name}
           </li>
        )
    }

}

export default Selector
