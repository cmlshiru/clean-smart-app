"use client";
import { Manuals } from "@/app/models/manuals.interface";
import React, { FC, FormEvent, use, useEffect, useState } from "react";
// import styles from './DocEditor.module.css';
interface DocEditorProps {
  docTitle?: string;
}

const DocEditor: FC<DocEditorProps> = () => {

  const defaultContent: Manuals[] = [
    {
      contentType: "text",
      content: "Bathroom Course Manual  \nand LESSON 3-PROCEDURES FOR CLEANING A BATHROOM  \nand REPEAT CLEAN  \nand ENGLISH  \nand PRODUCTS USED TO CLEAN A BATHROOM",
    },
    {
      contentType: "text",
      content: "este es otro lorem ipsum pero no dice nada",
    },
  ];

  const [isEditable, setIsEditable] = useState(true);
  const [pageContent,setPageContent] = useState(defaultContent);
  const [isLoading, setIsLoading] = useState(false);
  // const apiCall = () => {

  // }

  const addTextBlock = () => {
    const auxContent = {
      contentType: "text",
      content: "este es otro lorem ipsum pero no dice nada",
    };
    
    setPageContent([...pageContent,auxContent]);
    setIsLoading(false);
    console.log('added box',pageContent);
  }

  const changeContent = (e:FormEvent, id:number) => {
    const divContent = document.getElementById(`p ${id}`);
    pageContent[id].content = divContent?divContent.textContent:pageContent[id].content;
    console.log(divContent?.textContent,id);
    console.log('nuevo content',pageContent[id].content);
  }

  const renderPageContent = (paragraph: Manuals, id: number) => {
    if (paragraph.contentType === "text") {
      return (
        <p
          key={id}
          id={`p ${id}`}
          contentEditable={isEditable}
          onClick={() => setIsEditable(true)}
          onChange={(e) => console.log(e)}
          style={{whiteSpace: 'pre-line'}}
          className={isEditable?'p-editable':''}
          onInput={(e) => changeContent(e, id)}
          suppressContentEditableWarning={true}
        >
          {paragraph.content}
        </p>
      );
    }
  };

  useEffect(() => {
    console.log('is loading', isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log('new page content', pageContent);
  }, [pageContent]);

  if(isLoading) return (<div className="">Loading...</div>);

  return (
    <div>
      <div className="d-flex justify-content-around pb-5">
        <div className="manual-button" onClick={addTextBlock}>Add Text</div>
        <div className="manual-button"> Add img </div>
        <div className="manual-button"> Font size </div>
        <div className="manual-button"> Font type </div>
      </div>
      {pageContent.map((paragraph, id) => (
        renderPageContent(paragraph, id)
      ))}
    </div>
  );
};

export default DocEditor;
