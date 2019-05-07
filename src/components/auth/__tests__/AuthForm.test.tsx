import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import AuthForm, { AuthFormProps } from '../AuthForm';

describe('AuthForm', () => {
  const setup = (props: Partial<AuthFormProps> = {}) => {
    const initialProps: AuthFormProps = {
      mode: 'REGISTER',
      onToggleMode: () => {},
      onSendAuthEmail: (email: string) => {},
      loading: false,
      registered: null,
    };
    return render(<AuthForm {...initialProps} {...props} />);
  };

  it('renders correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  describe('handles modes', () => {
    it('REGISTER', () => {
      const { getAllByText } = setup();
      getAllByText('회원가입');
    });
    it('LOGIN', () => {
      const { getAllByText } = setup({ mode: 'LOGIN' });
      getAllByText('로그인');
    });
  });

  it('calls onToggleMode', () => {
    const onToggleMode = jest.fn();
    const { container } = setup({
      mode: 'REGISTER',
      onToggleMode,
    });

    const anchor = container.querySelector('a');
    expect(anchor).toBeTruthy();
    if (!anchor) return;
    fireEvent.click(anchor);
    expect(onToggleMode.mock.calls.length).toBe(1);
  });
});
