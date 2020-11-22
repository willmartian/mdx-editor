import Container from "@material-ui/core/Container";
import {ContentState, EditorState} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
// import editorStyles from './editorStyles.css';
import 'draft-js/dist/Draft.css';
import { useEffect, useRef, useState } from "react";
import 'draft-js-mention-plugin/lib/plugin.css';
import snippets from "../snippets"

const SuggestionEntry = (props) => {
  const {
    mention,
    ...parentProps
  } = props;
  return(
    <div {...parentProps}>
      {mention.name.split('>')[0] + '>'}
    </div>
  );
}

const MentionComponent = (props) => {
  return (
    <>{props.mention.value}</>
  );
}

const mentionPlugin = createMentionPlugin({
  snippets,
  mentionTrigger: '<',
  mentionComponent: MentionComponent,
});
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

function MDXEditor({ setMDXContent }) {

  const [suggestions, setSuggestions] = useState(snippets);

  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(ContentState.createFromText(
`# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

*italic*

**bold**

[Link](#url-goes-here)

`
    )),
  );

  const editor = useRef(null);

  useEffect(() => {
    setMDXContent(editorState.getCurrentContent().getPlainText());
  });

  const onSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, snippets))
  };

  const onAddMention = () => {
    console.log("test")
  }

  const focusEditor = () => {
    editor.current.focus()
  }

  return (
    <Container onClick={() => focusEditor()} style={{height: "100%"}}>
      <Editor 
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder={"Write text here..."}
        plugins={plugins}
        style={{height: "100%"}}
      />
      <MentionSuggestions
        onSearchChange={onSearchChange}
        suggestions={suggestions}
        onAddMention={() => console.log("added!!")}
        entryComponent={SuggestionEntry}
        onOpen={() => console.log(this)}
      />
    </Container>
  );
}

export default MDXEditor;