import React from 'react';
import './BlogEntries.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BlogEntry1() {
  return (
    <div className='blog-entry'>
      <h1>Private Functions in Unit Tests</h1>
      <h2>Written by Bryan Lutz - Last Updated 10/30/2020</h2>
      <p className='blog-text'>
        This is how you blog:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  public string DoesSomething()
  {
    return "This is a test."
  }

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        And thats how you blog.
      </p>
    </div>
  );
}

export default BlogEntry1;
