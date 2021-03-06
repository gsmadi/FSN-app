import * as actionTypes from './actionTypes';
import submit from '../api/postData';
import { handleDisplayAlert } from '../Alert/actions';

export function handleAddName(name) {
  return ({type: actionTypes.TALK_NAME, name});
}

export function handleAddEmail(email) {
  return ({type: actionTypes.TALK_EMAIL, email});
}

export function handleAddOnlineProfile(onlineProfile) {
  return ({type: actionTypes.TALK_ONLINE_PROFILE, onlineProfile});
}

export function handleAddProfession(profession) {
  return ({type: actionTypes.TALK_PROFESSION, profession});
}

export function handleAddTopic(topic) {
  return ({type: actionTypes.TALK_TOPIC, topic});
}

export function handleAddImportance(importance) {
  return ({type: actionTypes.TALK_IMPORTANCE, importance});
}

export function handleAddQuestionsComments(questionsComments) {
  return ({type: actionTypes.TALK_QUESTIONS_COMMENTS, questionsComments});
}

export function handleIsLoading(isLoading) {
  return ({type: actionTypes.TALK_IS_LOADING, isLoading});
}

export function handleClearSubmitTalk() {
  return ({type: actionTypes.CLEAR_SUBMIT_TALK});
}

export function handleSubmit(data) {
  return (dispatch => {
    dispatch(handleIsLoading(true));
    submit(data, 'classes/TalkSubmission')
      .then(() => {
        const alert = {
          style: 'success',
          messageLine1: 'Thank you for submiting your talk!',
          messageLine2: 'The FSN team will evaluate your proposal and get back to you.',
          header: 'Success!'
        };

        dispatch(handleDisplayAlert(alert));
        dispatch(handleIsLoading(false));
        dispatch(handleClearSubmitTalk());
      })
      .catch(() => {
        dispatch(handleIsLoading(false));
      });
  });
}
