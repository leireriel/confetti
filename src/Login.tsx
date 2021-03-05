import { useReducer } from "react";
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
        }
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    username,
    password,
    isButtonDisabled,
    helperText,
    isError
  } = state;

  return (
    <>
      <h1>Login App</h1>
      <form method="post" action="/form">
        <label for="username">Name</label>
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
        <label for="password">Name</label>
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

        // TODO BUTTON

      </form>
    </>
  );
}
