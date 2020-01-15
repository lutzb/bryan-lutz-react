import React from 'react';
import './BlogEntries.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
// import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { obsidian } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function BlogEntry1() {
  const codeString = `
    public static String formatText(String text) 
    {
      StringBuffer result = new StringBuffer();
      for (int n = 0; n < text.length(); ++n) {
        int c = text.charAt(n);
        if (c == '<') {
          while(n < text.length() && text.charAt(n) != '/' && text.charAt(n) != '>')
            n++;
          if (n < text.length() && text.charAt(n) == '/')
            n+=4;
          else
            n++;
        }
        if (n < text.length())
          result.append(text.charAt(n));
      }
      return new String(result);
    }
  `;

  return (
    <div className='blog-entry'>
      <p classname='blog-text'>Hello world this is my blog and this is my code:</p>

      <SyntaxHighlighter style={obsidian} className='code'>
        {codeString}
      </SyntaxHighlighter>

      That code right there is straight fire, yo.
    </div>
  );
}

export default BlogEntry1;
