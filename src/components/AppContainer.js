import styled from 'styled-components';

export const AppContainer = styled.div`
	background-color: ${({ theme }) => theme.epsilon};
	background: linear-gradient(to bottom right, ${({ theme }) => theme.epsilon} 30%, ${({ theme }) => theme.delta});
  min-height: 100vh;
  padding-top: 88px;
`