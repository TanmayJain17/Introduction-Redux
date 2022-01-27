import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
        
import {deposit,withdraw,collectInterest,deleteAcc,isSavingsAccount} from '../actions/bankingActions'



const Banking = () => {
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch();
    
    const depositMoney = () => {
        dispatch(deposit(parseInt(amount)))
    }

    const withdrawMoney = () => {
        dispatch(withdraw(parseInt(amount)))
    }

    const collInterest = () => {
        dispatch(collectInterest())
    }

    const deleteAction = () => {
        dispatch(deleteAcc())
    }
    const accountType=()=>{
        dispatch(isSavingsAccount())
    }
    

    return <div className="form-group">
        <input value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control"></input>
        <button onClick={depositMoney} className="btn btn-success">Deposit</button>
        <button onClick={withdrawMoney} className="btn btn-primary">Withdraw</button>
        <button onClick={collInterest} className="btn btn-warning">Collect Interest</button>
        <button onClick={deleteAction} className="btn btn-danger">Delete Account</button>
        <button onClick={accountType} className="btn btn-secondary">Change Account Type</button>

    </div>;
};

export default Banking;


//actions


//deposit

/* const deposit = {
    type: "DEPOSIT",
    amount: 20
  }
  //withdraw actions
  const withdraw = {
    type:"WITHDRAW",
    amount: 20
  }
  //collect interst actions
  const collectInterest = {
    type:"COLLECT_INTEREST"
  }
  //delete action
  const deleteAccount = {
    type:"DELETE_ACCOUNT"
  } */