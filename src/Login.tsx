import React, { useReducer, useEffect } from 'react';
import classnames from 'classnames';

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false,
};

type Action = { type: 'setUsername'; payload: string }
  | { type: 'setPassword'; payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload
      };
  }
}

export const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    username,
    password,
    isButtonDisabled,
    helperText,
    isError
  } = state;

  useEffect(() => {
    if (username.trim() && password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [username, password])

  const handleClick = () => {
    if (username === 'abc@email.com' && password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfull'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      isButtonDisabled || handleClick();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => (
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      })
    );

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => (
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      })
    );

  return (
    <>
      <h1>Login App</h1>
      <form method="post" action="/form">
        <label htmlFor="username">Name</label>
        <input
          className={classnames('login-input', {
            'login-input_with-error': isError
          })}
          id="username"
          type="email"
          name="Username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          onKeyPress={handleKeyPress}
        />
        <label htmlFor="password">Name</label>
        <input
          className={classnames('login-input', {
            'login-input_with-error': isError
          })}
          id="password"
          type="password"
          name="Password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />
        {helperText && (
          <p>{helperText}</p>
        )}
        <button onClick={handleClick} className={classnames('login-button', {
            'login-button_disabled': isButtonDisabled
          })}>
          Login
        </button>
      </form>
    </>
  );
}
