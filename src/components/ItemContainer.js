import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemContainer extends Component {
    render() {
        return (
            <div>
                <h2>Item - </h2>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
)(ItemContainer);