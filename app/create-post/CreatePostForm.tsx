'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';

export default function CreatePostForm() {
  const [markdownTitle, setMarkdownTitle] = useState('Basics of Markdown');
  const [markdownInput, setMarkdownInput] = useState(
    `
Markdown is the most popular markup language that can be used to format documents. It can be used to create *websites*,*ebooks*,*email*,*chats in discussions forums*.

## Topics
1. Paragraphs 

    MD expects a full line space to show texts in a different line else it joins text in the same line.
2.  Text decorations

    MD can write **bold** texts, ~~italiic~~ *italic*  texts
3. Headings
    No of #'s represent the type of heading. Github will automatically add id's to headings, so the text will be automatically linked. 
    ## This is h2
    ### This is h3
4. Links

   [My Github](https://github.com/bhupendra1011 "all repos") account.[Bhupendra][1] github repo.

5. Images
    Images can be used just like links. ![Alt txt](img url)

    !["cat Img"](http://placekitten.com/200/200)

    Thumbnails images can also be used which links to larger image 
    [<img src="http://placekitten.com/20/20">](http://placekitten.com/200/200)

6. Ordered and Unordered Lists

    Coding Best Practices:

    * Keep code DRY
    * Writing Unit Test cases
    * Checking cross-browser support

    Steps to merge branch:

    1. Create a branch from feature
    1. commit your changes
    1. push your changes
    1. raise a pull request
`
  );

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="text-black flex items-start justify-evenly ">
      <form
        className="flex flex-col items-center w-1/2"
        onSubmit={formSubmitHandler}
      >
        <label htmlFor="title"> Blog Title: </label>
        <input
          id="title"
          type="text"
          value={markdownTitle}
          onChange={(e) => setMarkdownTitle(e.target.value)}
        />
        <label htmlFor="content">Post</label>
        <textarea
          onChange={(e) => setMarkdownInput(e.target.value)}
          value={markdownInput}
          id="content"
          rows={20}
          className="w-full p-4 ml-2 rounded-md bg-gray-100 border border-black mb-2"
        ></textarea>
        <button
          className="bg-gray-700 p-2 text-white rounded-full"
          type="submit"
        >
          Create Post
        </button>
      </form>

      <div className="overflow-auto h-screen w-1/2 p-4 ">
        <h2>Preview</h2>
        <div className="prose lg:prose-xl ">
          <h1>{markdownTitle}</h1>
          <ReactMarkdown children={markdownInput} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
}
