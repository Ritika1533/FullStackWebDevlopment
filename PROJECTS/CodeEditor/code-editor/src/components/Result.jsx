import React, { useContext } from 'react';
import { Box } from '@mui/material'; // Import Box from @mui/material
import { DataContext } from '../context/DataProvider';

function Result() {
  const { html, css, js } = useContext(DataContext);
  const srcCode = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}<script>
      </html>
    `;

  return (
    <Box>
      <iframe
        srcDoc={srcCode}
        title='Output'
        sandbox='allow-scripts'
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Box>
  );
}

export default Result;
