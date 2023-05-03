'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';


export default function CreatePostForm({session}:any) {
  const [markdownTitle, setMarkdownTitle] = useState('Basics of Markdown');
  const [markdownContent, setMarkdownContent] = useState(
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

`
  );

  console.log(session?.user)

  const formSubmitHandler = async (event: any) => {
    event.preventDefault();

    const data = {
      title: markdownTitle,
      content: markdownContent,
      email: session?.user?.email
    }
    try{
      const response = await fetch('http://localhost:3000/api/posts',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(data)
      })
      const result = await response.json();
      console.log('Success:', result)
    }
    catch(error){
      console.log("Error", error)
    }
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
          onChange={(e) => setMarkdownContent(e.target.value)}
          value={markdownContent}
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
          <ReactMarkdown children={markdownContent} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
}
