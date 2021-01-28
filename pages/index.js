import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
// eslint-disable-next-line import/no-named-as-default
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [seuNome, setSeuNome] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>aheuaheuaheuaheu</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(ev) {
              ev.preventDefault();
              router.push(`/quiz?name=${seuNome}`);
            }}
            >
              <input
                onChange={function(ev) {
                  setSeuNome(ev.target.value);
                }}
                placeholder="Quem é você?"
              />
              <button type="submit" disabled={seuNome.length === 0}>
                Jogar
                {seuNome}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>aheuaheuaheuaheu</h1>
            <p>aheuhuahueijkajksbjklljkasdçksdhjksdf</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/timoteobrasil/aluraquiz-base" />
    </QuizBackground>
  );
}
