import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putData } from '../actions/items';
import { ItemList } from './ItemList'

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        this.props.putData('https://5ab9ea97d9ac5c001434ecd0.mockapi.io/items', this.state.value)
        event.preventDefault();
      }

    render() {
        
        return (
            <div>
                <p>Welcome</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        putData: (url, newItem) => dispatch(putData(url, newItem))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
