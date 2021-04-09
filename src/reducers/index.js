// ↓ reducerを結合する関数。
import { combineReducers } from 'redux'
import count from './count'
// ↑ reducerがひとつ

export default combineReducers({ count })
// export default combineReducers({ foo, bar, baz })   reducerを列挙してexportできる













