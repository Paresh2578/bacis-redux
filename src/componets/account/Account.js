import React from 'react'
import { useDispatch  } from 'react-redux'
import { bindActionCreators } from 'redux';
import {amountActions} from '../../redux/index'

export default function Account() {
  const dispatch = useDispatch();
  const action = bindActionCreators(amountActions , dispatch)
  return (
    <div className='container' style={{marginLeft:'30%'}}>
        <h2>Diposit / Withdraw Money</h2>
        <div className='btn btn-primary' disabled={true} type="submit"  onClick={()=>action.windroMeony(50)}>-</div>
        Update balace
        <div className='btn btn-primary' onClick={()=>{action.depositMeony(50)}}>+</div>
    </div>
  )
}
