import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  // constructorはコンポーネントの初期化時に実行されるコールバック
  // countの値を0に設定していたが、reducerで行っていくからここに入らなくなる。

  // ↓ 初期化処理を書く
  // constructor(props) {
  //   super(props)
  //   this.state = { count: 0 }
  //   console.log(this.state)
  // }

  // actionクイエータからreducer内で適切な状態変化を呼ぶことで同じことを実現。下二つ不要。
  // handlePlusbutton = () => {
  //   console.log("+++++++")
  //   this.setState({ count: this.state.count + 1 })
  // }

  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }

  render() {
    // インスタンスのpropsが状態やアクションを渡していくためpropsを変数に代入していく
    const props = this.props
    // reducer内のcountオブジェクトのvalueを表示していく
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
} 

// mapStateToPropsはstateの情報からこのコンポーネントに必要な物を取り出してコンポーネント内のpropsとしてマッピングする。
// 引数には状態のstateを書いてどういうオブジェクトをpropsとして対応させるのか関数の戻り値として返す。
const mapStateToProps = state => ({ value: state.count.value })

// あるアクションが発生した時reducerにタイプに応じた状態遷移を実行させるための関数がdispatch
// dispatch関数を引数においてこのコンポーネントで必要になるdispatch関数を宣言していく。
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

// ↓ これでもいける。
// const mapDispatchToProps = ({ increment, decrement })

//stateとactionをコンポーネントに関連付ける作業をしていく。connect関数を使う。
export default connect(mapStateToProps, mapDispatchToProps)(App)

