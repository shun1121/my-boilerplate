import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { postEvent } from '../actions'

class EventsNew extends Component {
// ↓ 初期化した時にbindする。
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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

  async onSubmit(values) {
    // ↓ functionじゃないというエラー。
    await this.props.postEvent(values)
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
const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
// reduxFormの引数には設定に関するオブジェクトを渡す。例えばバリデーション
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
