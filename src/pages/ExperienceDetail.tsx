import React, { useEffect } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Color } from "../constants/Color";
import { Device } from "../constants/Device";

type LocationState = {
  content: string;
};

export const ExperienceDetail: React.FC<RouteComponentProps> = ({
  location,
}) => {
  const { content } = location.state as LocationState;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 25%;

  box-sizing: border-box;

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0;
  }

  p {
    margin: 20px 0 10px;
  }

  a {
    font-weight: 500;
    color: ${Color.DarkMint};
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0 0 0 40px;
  }

  img {
    max-width: 100%;
    max-height: 450px;
    object-fit: contain;
  }

  @media (max-width: ${Device.Tablet}px) {
    padding: 0 20%;

    ul {
      padding: 0 0 0 30px;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    padding: 0 2%;

    ul {
      padding: 0 0 0 20px;
    }
  }
`;