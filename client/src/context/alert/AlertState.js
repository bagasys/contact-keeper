import React, {useReducer} from 'react'
import {v4 as uuid} from 'uuid'
import alertContext from './alertContext'
import alertReducer from './alertReducer'
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../type'
import authContext from '../auth/authContext'

const AlertState = props => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type, timeout=5000) => {
    const id = uuid()
    dispatch({
      type: SET_ALERT,
      payload: {
        msg, type, id
      }
    })
    setTimeout(() => {
      dispatch({type: REMOVE_ALERT, payload: id})
    }, timeout);
  }

  return (
    <alertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </alertContext.Provider>
  )
}

export default AlertState