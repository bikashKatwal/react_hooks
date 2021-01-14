import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyIceCream} from "../redux/iceCream/iceCreamActions";


const IceCreamContainer = (props) => {

    const [number, setNumber] = useState(1);

    const onChangeHandler = (e) => {
        console.log(e.target.value);
        setNumber(e.target.value);
    };

    return (
        <div>
            <h2>Number of Ice Creams - {props.numberOfIceCream}</h2>
            <input type="text" value={number} onChange={onChangeHandler}/>
            <button onClick={() => props.buyIceCream(number)}>Buy Ice Cream</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        numberOfIceCream: state.iceCreams.numOfIceCreams
    }
};

export default connect(mapStateToProps, {buyIceCream})(IceCreamContainer);
