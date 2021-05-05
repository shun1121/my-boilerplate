import { 
  READ_EVENTS,
  CREATE_EVENT,
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
} from '../actions'
import _ from 'lodash'

// eventsにイベント情報が全て入っている。
export default (events = {}, action) => {
  // readEvents時に状態をアップデートして、アプリ内部でそれを管理する。
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      // ↓ {id: 1, token: "token123", title: "Let's have an event 1!", body: "This is the body for event 1.", created_at: "2021-05-03T11:02:21.657Z", …}
      // console.log(action.response.data)
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]この配列を下のオブジェクト形式に変えたい。
      // {1: {…}, 2: {…}, 3: {…}, 5: {…}, 6: {…}, 7: {…}, 8: {…}, 9: {…}, 10: {…}}
      // ↑ 各要素のオブジェクトのidのvalueをキーにしている。
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      // ↓ eventsというオブジェクトから、あるidのデータを削除
      delete events[action.id]
      // ↓ こう書くことでアップデートされた後のeventsオブジェクトを返す。
      return { ...events }
    default:
      return events
  }
}

//storeとして初期値も設定している。








