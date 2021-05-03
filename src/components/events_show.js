import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
// putEventは更新用
import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error }} = field
    // こうすることで下のrenderのcomponents部分が表示される。
    //{...input}入寮した内容が渡ってくる。
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {/* validate関数でreturnしたerrorsがここでは単数形になってひょうじされる？ */}
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    // console.log(id)
    await this.props.deleteEvent(id) //deleteEventをactionファイルで定義していく。
    this.props.history.push('/')
  }

  async onSubmit(values) {
    // ↓ functionじゃないというエラー。
    //await this.props.postEvent(values)
    // ↓ トップページの履歴をプッシュ。どんな意図？
    this.props.history.push('/')
  }

  render() {
    // renderされた時にhandleSubmit関数は割ったってくるためrender内に書く。
    // pristineは何も入っていない状態、submittingは送信している状態。
    const { handleSubmit, pristine, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
} 
// valuesには入力された値が入っている。
const validate = values => {
    const errors = {}

    if (!values.title) errors.title = "Enter a title"
    if (!values.body) errors.body = "Enter a body"

    return errors
}
// Uncaught (in promise) TypeError: this.props.deleteEvent is not a function at EventsShow.onDeleteClick
// ↑ のエラーは下でdeleteEvent関数をバインドしていないから。connectの第二引数にmapDispatchToPropsを渡す。
const mapDispatchToProps = ({ deleteEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)
