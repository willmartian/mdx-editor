import React, { lazy, useRef, useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import { monaco } from '@monaco-editor/react';
import { Container } from "@material-ui/core";

monaco.init()
  .then(monaco => {
    monaco.languages.register({ id: 'components' });
    monaco.languages.registerCompletionItemProvider('components', {
      provideCompletionItems: () => {
        var suggestions = [
          {
            label: '<Quiz>',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
              '<Quiz>',
              '\t<Item>',
              '\t\t<Prompt>1. What is the answer?</Prompt>',
              '\t\t<Answer>This one!</Answer>',
              '\t\t<Answer correct>No, this one!</Answer>',
              '\t\t<Answer>Or maybe this?</Answer>',
              '\t</Item>',
              '</Quiz>'
            ].join('\n'),
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'This is a quiz.'
          }
        ];
        return { suggestions: suggestions };
      }
    });
  }).catch(error => console.log(error));

const CodeEditor = ({ setMDXContent, theme }) => {
  const [isEditorReady, setIsEditorReady] = useState(false);

  const handleEditorDidMount = () => {
    setIsEditorReady(true);
  }

  const handleEditorChange = (ev, value) => {
    setMDXContent(value);
  }

  return (
    <Container style={{height: "100%", width: "100%", margin: 0, padding: 0, resize: "horizontal"}}> 
      <ControlledEditor
        theme={theme}
        language={"components"}
        editorDidMount={handleEditorDidMount}
        loading={"Loading..."}
        onChange={handleEditorChange}
      />
    </Container>
  );
}

export default CodeEditor;