import React from "react";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Alex Farias"
            image="https://avatars.githubusercontent.com/u/86809174?s=400&u=eed672fd21cf64e7d9e9e6f5c51e72d0a674aba6&v=4"
            percentual={25}
          />
          <UserInfo
            nome="Alex Farias"
            image="https://avatars.githubusercontent.com/u/86809174?s=400&u=eed672fd21cf64e7d9e9e6f5c51e72d0a674aba6&v=4"
            percentual={65}
          />
          <UserInfo
            nome="Alex Farias"
            image="https://avatars.githubusercontent.com/u/86809174?s=400&u=eed672fd21cf64e7d9e9e6f5c51e72d0a674aba6&v=4"
            percentual={45}
          />
          <UserInfo
            nome="Alex Farias"
            image="https://avatars.githubusercontent.com/u/86809174?s=400&u=eed672fd21cf64e7d9e9e6f5c51e72d0a674aba6&v=4"
            percentual={72}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
