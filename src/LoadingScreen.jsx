import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import App from "./App";

const spinAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const titleAnimation = keyframes`
0% {
  color: black;
}
100% {
  color: white;
  transform: scale(1.2);
}
`;

const Container = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
`;

const LoadingContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
background: black;
z-index: 999;
`;
const Spinner = styled.div`
width: 64px;
height: 64px;
border: 8px solid;
border-color: #3d5af1 transparent #3d5af1 transparent;
border-radius: 50%;
animation: ${spinAnimation} 1.2s linear infinite;
`;

const LoadingContent = styled.div`
`;

const LoadingContentTitle = styled.h1`
color: white;
animation: ${titleAnimation} 1.2s linear infinite;
`;


const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Spinner />
          <LoadingContent>
            <LoadingContentTitle>Loading...</LoadingContentTitle>
          </LoadingContent>
        </LoadingContainer>
      ) : (
        <App />
      )
      }
    </Container>
  );
}

export default LoadingScreen;
