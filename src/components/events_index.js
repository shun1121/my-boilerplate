import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
} 

// mapStateToPropsはstateの情報からこのコンポーネントに必要な物を取り出してコンポーネント内のpropsとしてマッピングする。
// 引数には状態のstateを書いてどういうオブジェクトをpropsとして対応させるのか関数の戻り値として返す。
const mapStateToProps = state => ({ events: state.events})

// あるアクションが発生した時reducerにタイプに応じた状態遷移を実行させるための関数がdispatch
// dispatch関数を引数においてこのコンポーネントで必要になるdispatch関数を宣言していく。
const mapDispatchToProps = ({ readEvents })

//stateとactionをコンポーネントに関連付ける作業をしていく。connect関数を使う。
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

