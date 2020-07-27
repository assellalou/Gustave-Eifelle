import React, { useState } from 'react';
import styled from 'styled-components';

const Login = ({ connect }) => {
  const [username, setUsername] = useState('student@gustaveeiffel.com');
  const [password, setPassword] = useState('student123');
  const [err, setErr] = useState([]);

  const handleLogin = () => {
    if (username == 'student@gustaveeiffel.com' && password == 'student123') {
      connect();
    } else {
      setErr(["email and password don't match"]);
    }
  };
  return (
    <Container>
      <InputContainer>
        <h1 style={{ marginBottom: 20 }}>Welcome Back</h1>
        <StyledInput
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {err.length ? <Err>{err}</Err> : null}
        <StyledButton onClick={handleLogin}>Sign in</StyledButton>
      </InputContainer>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  position: relative;
  background: #ededed;
  box-shadow: 5px 5px 10px #cecece, -5px -5px 10px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  border-radius: 8px;
`;
const StyledInput = styled.input`
  padding-left: 25px;
  width: 350px;
  height: 40px;
  margin: 5px 0;
  border: none;
  border-radius: 8px;
  background: #ededed;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  &:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
    outline: none;
  }
`;
const StyledButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #ce3d3d;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Err = styled.p`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 20px;
  color: #ce3d3d;
  bottom: 0;
  font-size: 13px;
`;
export default Login;
