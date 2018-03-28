import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/items';


class ItemList extends Component {
    
    componentDidMount() {
        this.props.fetchData('https://5ab9ea97d9ac5c001434ecd0.mockapi.io/items');
    }

    render() {
        
        return (

        <div>
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        <b>{item.name}, {item.age}</b>
                        {/*{item.cars.map((car) => <span key={car.id}><br /> {car.name} </span>)}*/}
                    </li>
                ))}
            </ul>
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
        fetchData: (url) => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
