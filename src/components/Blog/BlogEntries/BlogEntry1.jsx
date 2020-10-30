import React from 'react';
import './BlogEntries.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BlogEntry1() {
  return (
    <div className='blog-entry'>
      <h1>Working With Legacy Code -- Characterization Testing</h1>
      <h4>Written by Bryan Lutz - Last Updated 10/30/2020</h2>
      <p className='blog-text'>
        Suppose you get put onto a project that is to work with a codebase over 15 years old that you have
        very little to no knowledge about. You're tasked with adding a simple feature that seems relatively
        easy to implement, but once you open the code it looks like this:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  public string DoesSomething(int O)
  {
    int l=1,i;
    string c="zz",a="fi",b="bu";
    l+=2;
    i=l;
    i+=2;
    string s = "";
    Console.WriteLine(
      (
        (O % l) > 0 && 1 > (
          O % i
        )
      ) ? s = (a + c) :
      (
        1 > (O % l) && (O % i) > 0
      ) ? s = (b + c) :
      (1 > (O % l) && 1 > (O % i)) ? s = (a + c + b + c) : s = (O + "")
    );

    return s;
  }

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        You briefly contemplate strangling a ferret, but you resist yourself because Frank is a good ferret
        and shouldnt be harmed. Instead, you think to yourself, how can we figure out what this load of crap 
        actually does? This code has no unit tests, and was written by one guy that no longer works with the
        company.  Classic.
        <br />
        <br />
        Introduce... Characterization Testing!
        <br />
        <br />
        Characterization Testing is a method of testing coined by Michael Feathers that focuses on determining
        the existing behavior of a piece of software with the intent of understanding functionality before
        a refactor or implementation of a new feature. The emphasis here, though, is on the existing behavior.  
        Let's write a test that we know will fail, but will give us some insight into the existing behavior of 
        the function:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  @Test
  public void x()
  {
      AssertEqual(null, DoesSomething(1));
  }

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        We don't give this test a proper name yet, because we don't know what it is supposed to do.  We run the
        test and it produces the following error:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  at Class1.test.DoesSomething.x() in ../ClassA/test/Test1.cs:line 14
    Expected: null
    But was:  "1"

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        Ok, so it seems like when we give DoesSomething an integer, it returns that same integer.  So, we can 
        update our test to reflect the existing behavior:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  @Test
  public void DoesSomethingReturnsGivenNumber()
  {
      AssertEqual("1", DoesSomething(1));
  }

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        We run this test and it passes just as we expect. So we've officially written and documented the first
        known behavior of this function.  Now, just to see what happens, we start sending in other various numbers.
        First we started with 1... it returns 1.  We try 2... it returns 2.  We try 3... and something magical happens:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  at Class1.test.DoesSomething.x() in ../ClassA/test/Test1.cs:line 21
    Expected: "3"
    But was:  "Fizz"

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        We just found a new characterization of this function.  When we pass it a 3, it returns Fizz. So, we
        can write a new test that documents this functionality:
      </p>

      <SyntaxHighlighter language='cs' style={dracula} className='code'>
{`
  @Test
  public void DoesSomethingReturnsGivenNumber()
  {
      AssertEqual("1", DoesSomething(1));
  }

  @Test
  public void DoesSomethingReturnsFizzWhenGiven3()
  {
      AssertEqual("Fizz", DoesSomething(3));
  }

`}
      </SyntaxHighlighter>

      <p className='blog-text'>
        After tinkering with the inputs, we can come up with a decent suite of tests that accurately document
        the existing behavior of the function. Now, it's important to note that these tests only document what the 
        function current does. They cannot tell whether or not the function is correct (or not) according to the
        business requirements. However, once we document all known existing behavior, this puts us a decent position
        to verify with the business that what the code is doing is actually what they want.
        <br />
        <br />
        Characterization testing is a brute force way of experimenting and figuring out how some unreadable code
        works, but it put a relatively perspective on complex, poorly written software and allows us to find out the 
        truth behind the behavior of the system.
        <br />
        <br />
        And as always, just when you thought you could escape it, it always turns out to be FizzBuzz.
      </p>
    </div>
  );
}

export default BlogEntry1;
