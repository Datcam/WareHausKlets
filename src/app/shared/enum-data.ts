export enum Path {
  AUTH = 'auth',
  GAMES = 'games',
  LIBRARY = 'library',
  FRIENDS = 'friends',
  PROFILE = 'profile',
  MAIN = 'main',
  SIGN_UP_SUCCESS_PAGE = 'sign-up-success_page',
}

export enum UserObjectProperty {
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirm_password',
  NAME = 'name',
  AGE = 'age'
}

export enum Message {
  SAVE_DATA = 'Ваші данні були успішно відправлені!',
  SUCCESS_SIGN_UP = 'Ви успішно зарееструвались!',
  SUCCESS_SIGN_IN = 'Ви успішно увійшли!',
  ADD_FRIEND = 'Friend was successfully added!',
  REMOVE_FRIEND = `Friend was successfully removed!`,
  ADD_GAME = 'Game was successfully added!',
  START_DOWNLOAD = 'Download successfully started!',
  SHARE_GAME = 'You successfully shared the game!'
}
