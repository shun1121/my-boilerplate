// actionクリエーターの作成
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
// ↓ ポスト処理を行っていく。
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // console.log(response)
    dispatch({ type: READ_EVENTS, response })//関数の中でdispatch
    //TYPEとapiサーバからのresponseをdispatchしてreducerに渡す。
}

// postEventでは入力されたtitleやbodyをvaluesとして受け取る。
export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    // console.log(response)
    dispatch({ type: CREATE_EVENT, response })//関数の中でdispatch
    //TYPEとapiサーバからのresponseをdispatchしてreducerに渡す。
}
