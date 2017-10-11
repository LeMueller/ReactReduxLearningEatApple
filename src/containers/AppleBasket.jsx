import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'; //TODO: learning

import AppleItem from '../components/AppleItem.jsx'
import actions from '../actions/appleAction.js'
//import '../styles/appleBasket.scss'

class AppleBasket extends React.Component {

    //get the status of apples, i
    calculateStatus(){
        let status={
            appleNow:{
                quantity:0,
                weight:0
            },
            appleEaten:{
                quantity:0,
                weight:0
            }
        };
        this.props.appleBasket.apples.forEach(apple=>{
            let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
                status[selector].quantity ++;
                status[selector].weight += apple.weight;

        })
        return status;
    }

    getAppleItem(apples){
        let data=[];
        apples.forEach(apple => {
            if(!apple.isEaten){
                data.push(<AppleItem apple={apple} eatApple={this.props.actions.eatApple} key={apple.id}/>)
            }
        });

        if(!data.length) data.push(<div className="empty-tip" key="empty">Applebasket is empty!</div>);

        return data;
    }



  render(){

    //get data from props

    let { appleBasket, actions } = this.props;

    let { apples, isPicking } = appleBasket;
    let status = this.calculateStatus();

    console.log("status:::" + status);
    //debugger;


    let {
        appleNow: {
            quantity:notEatenQuantity, 
            weight: notEatenWeight
        },
        appleEaten: {
            quantity: EatenQuantity, 
            weight: EatenWeight
        }
    } = status;

    return (
      <div className="appleBasket">
        <div className="title">Applebasket</div>

        <div className="stats">
            <div className="section">
                <div className="head">Apple</div>
                <div className="content">
                    {notEatenQuantity} appls，
                    {notEatenWeight} g
                </div>
            </div>
            <div className="section">
                <div className="head">Eaten</div>
                <div className="content">
                    {EatenQuantity} apple，
                    {EatenWeight} g
                </div>
            </div>            
        </div>

        <div className="appleList">
           {this.getAppleItem(apples)}
        </div>

        <div className="btn-div">
            <button className={isPicking ? 'disable' : ''} onClick={actions.pickApple}>Pick Apples</button>
        </div>

      </div>
    );
  }

}

const mapStateToProps = state => ({
    appleBasket: state.appleBasket
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket);