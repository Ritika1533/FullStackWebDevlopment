import React, { useContext } from 'react';
import { Box, styled } from '@mui/material';
import Editor from './Editor';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 60vh;
`;

export default function Cde() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor heading="HTML" icon="/" color="#FF204E" value={html} onChange={setHtml} />
      <Editor heading="CSS" icon="*" color="#008DDA" value={css} onChange={setCss} />
      <Editor heading="JS" icon="()" color="#FFC700" value={js} onChange={setJs} />
    </Container>
  );
}