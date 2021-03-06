import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PureRender } from '../components';
import Form from './components/form/index';
import * as TalkActions from './actions';
import * as AlertActions from '../Alert/actions';
import Alert from '../Alert/components/alert/index';

class SubmitTalk extends Component {
  render() {
    if (this.props.alert.display) {
      return (
        <Alert {...this.props.alert} actions={this.props.alertActions} />
      );
    }

    return (
      <Form
        talk={this.props.submitTalk}
        name={this.props.submitTalk.name}
        email={this.props.submitTalk.email}
        profession={this.props.submitTalk.profession}
        onlineProfile={this.props.submitTalk.onlineProfile}
        topic={this.props.submitTalk.topic}
        importance={this.props.submitTalk.importance}
        questionsComments={this.props.submitTalk.questionsComments}
        actions={this.props.talkActions}
        alert={this.props.alert}
        alertActions={this.props.alertActions}
        isConnected={this.props.isConnected}
      />
    );
  }
}

function setupState(state) {
  return ({
    submitTalk: state.submitTalk,
    alert: state.alert
  });
}

function setupActions(dispatch) {
  return ({
    talkActions: bindActionCreators(TalkActions, dispatch),
    alertActions: bindActionCreators(AlertActions, dispatch)
  });
}

export default connect(setupState, setupActions)(PureRender(SubmitTalk));
