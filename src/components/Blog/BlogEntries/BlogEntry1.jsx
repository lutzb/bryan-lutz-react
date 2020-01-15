import React from 'react';
import './BlogEntries.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BlogEntry1() {
  const codeString = `
    public static List<int> JustDoIt(int count)
    {
        Console.WriteLine($"Hello {Name}!");
        return new List<int>(new int[] { 1, 2, 3 })
    }
  `;

  return (
    <div className='blog-entry'>
      <p classname='blog-text'>Hello world this is my blog and this is my code:</p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
        {codeString}
      </SyntaxHighlighter>

      That code right there is straight fire, yo.
    </div>
  );
}

export default BlogEntry1;
