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
      <Err>{err}</Err>
      <input
        type="email"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign in</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;
const Err = styled.p`
  background: #f00;
`;
export default Login;
