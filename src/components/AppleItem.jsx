import React from 'react';
import '../styles/appleItem.scss';
import PropTypes from 'prop-types';

let appleImage = require('../images/apple.png');

class AppleItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }



    render() {

        let { apple, eatApple} = this.props;

        return (
            <div className="appleItem">
                <div className="apple"><img src={appleImage} alt=""/></div>
                <div className="info">
                    <div className="name">Red Apple - No. {apple.id}</div>
                    <div className="weight">{apple.weight} g </div>
                </div>
                <div className="btn-div">
                    <button onClick={eatApple.bind(this, apple.id)}> Eat Apple</button></div>
            </div>
        );
    }
}

AppleItem.propsTypes={
    eatApple.PropTypes.func.isRequired,
    apple.PropTypes.object.isRequired
}

export default AppleItem;
