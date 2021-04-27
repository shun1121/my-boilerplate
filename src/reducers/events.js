import { READ_EVENTS } from '../actions'
import _ from 'lodash'

export default (events = {}, action) => {
  // readEvents時に状態をアップデートして、アプリ内部でそれを管理する。
  switch (action.type) {
    case READ_EVENTS:
      // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]この配列を下のオブジェクト形式に変えたい。
      // {1: {…}, 2: {…}, 3: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}, 9: {…}, 10: {…}}
      // ↑ 各要素のオブジェクトのidのvalueをキーにしている。
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}

//storeとして初期値も設定している。








