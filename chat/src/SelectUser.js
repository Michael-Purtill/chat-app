import React from 'react';

class SelectUser extends React.Component{ 
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
        <div>
            <form>
                <select onChange={this.handleChange}>
                    <option value="user1">user1</option>
                    <option value="user2">user2</option>
                </select>
            </form>
        </div>
        )
    }
}

export default SelectUser;