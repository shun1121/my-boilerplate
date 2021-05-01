// ↓ reducerを結合する関数。
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'
// ↑ reducerがひとつ

export default combineReducers({ events, form })
// export default combineReducers({ foo, bar, baz })   reducerを列挙してexportできる













