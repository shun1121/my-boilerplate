// ↓ reducerを結合する関数。
import { combineReducers } from 'redux'
import events from './events'
// ↑ reducerがひとつ

export default combineReducers({ events })
// export default combineReducers({ foo, bar, baz })   reducerを列挙してexportできる













