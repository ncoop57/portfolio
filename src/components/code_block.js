import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock({ language, value }) {
  if (!language) language = 'javascript';
  console.log(language)
  return (
    <SyntaxHighlighter language={language} style={atomOneDark}>
      {value}
    </SyntaxHighlighter>
  );
}