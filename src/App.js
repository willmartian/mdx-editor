import "./App.css"
import Preview from "./components/Preview.component";
import MDXEditor from "./components/MDXEditor.component"
import TopAppBar from "./components/TopAppBar.component";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import KeyTakeaway from "./components/KeyTakeaway.component"
import { Quiz, Item, Prompt, Answer } from "./components/Quiz.component";

const components = {
  KeyTakeaway,
  Quiz, Item, Prompt, Answer
}

const LayoutComponent = null;

function App() {
  const [MDXContent, setMDXContent] = useState(null);
  return (
    <>
      <TopAppBar />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{height: "100%"}}
      >
        <Grid item xs={6} style={{height: "100%"}}>
          <Preview MDXContent={MDXContent} setMDXContent={setMDXContent} components={components} LayoutComponent={LayoutComponent ? LayoutComponent : React.Fragment}/>
        </Grid>
        <Grid item xs={6} style={{height: "100%"}}>
          <MDXEditor setMDXContent={setMDXContent} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;