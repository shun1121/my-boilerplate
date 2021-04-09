import { INCREMENT, DECREMENT } from '../actions'

// 状態の初期値をオブジェクト型で定義
const initialState = { value: 0 }
// reducers/index.jsに渡すためにexport
// reducerは関数として定義する。引数は二つ。
// stateはデファルトでは何も持っていないためinitialStateをわたす。
// この関数内で受け取ったアクションのタイプに応じて状態を変更してreturnを返す。
// action.typeでアクションのタイプを拾うことができる。タイプに応じて処理を分岐->switch
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
        return { value: state.value + 1 }
    case DECREMENT:
        return { value: state.value - 1 }
    default:
        return state
  }
}









