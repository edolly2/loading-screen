import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const dots = keyframes`
0% {
  content: "";
}
25% {
  content: ".";
}
50% {
  content: "..";
}
75% {
  content: "...";
}
100% {
  content: "";
}
`;

const Container = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 999;
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
color: #3d5af1;
`;

const Dots = styled.span`
position: absolute;
  &::after {
    content: "";
    animation: ${dots} 2s linear infinite;
  }
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
            <LoadingContentTitle>Loading<Dots></Dots></LoadingContentTitle>
          </LoadingContent>
        </LoadingContainer>
      ) : (
        null
      )
      }
    </Container>
  );
}

export default LoadingScreen;
