import React from 'react';


class ClassComponent extends React.Component {
    state = {
        name: 'Hiep',
        age: '21',
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
  render() {
    return (
        <><div className='first'>
            <input value = {this.state.name} type = 'text'
                onChange={(event) => this.handleOnChange(event)}
            ></input>
            My name is: {this.state.name}
        </div>

        <div> Hello from component </div>
        </>
    )
  }
}

export default ClassComponent;
