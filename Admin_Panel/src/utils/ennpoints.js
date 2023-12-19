export const endPoints = {
  // Admin
  ADMIN_LOGIN: '/auth/admin/login',
  GET_USER: '/auth/user-profile',
  UPDATE_USER: '/auth/update-profile/:id',
  DELETE_USER: '/user/delete-user/:id',
  ADD_USER: '/auth/register',
  UPDATE_STATUS: '/user/update-status/:id',
  GET_USER_LIST: '/user/user-list',
  GET_USER_BY_ID: '/user/get-user-details/:id',
  CREATE_FORM: '/questionbook/create-form',
  GET_QUESTIONS_LIST: '/questionbook/get-questionaries-list',
  GET_FORM: '/questionbook/get-form',
  UPDATE_FORM: '/questionbook/updateQuestion/:id',
  GET_SINGLE_FORM: '/questionbook/get-single-form/:id',
  DELETE_FORM: '/questionbook/delete-form/:id',
  GET_ANSWER_LIST: '/questionbook/get-result-list',
  GET_ANSWER_BY_ID: '/questionbook/get-answer-sheet',
}
