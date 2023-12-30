import styled from '@emotion/styled';

const shakeAnimation = `
  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25%, 75% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
  }
`;

export const AnimatedFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  animation: ${props =>
    props.error === 'Unable to login' ? 'shake 0.5s' : 'none'};
  ${shakeAnimation}
`;
