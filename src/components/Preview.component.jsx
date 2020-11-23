import React from 'react';
import Container from "@material-ui/core/Container";
import JsxParser from 'react-jsx-parser';
import { LinearProgress } from '@material-ui/core';

const Preview = ({ MDXContent, components, LayoutComponent }) => {

  return (
    <Container style={{height: "100%", width: "100%", margin: 0, padding: 0, resize: "horizontal"}}> 
      <LayoutComponent>
        <JsxParser 
          components={components}
          jsx={MDXContent}
          autoCloseVoidElements={true}
          renderError={() => <Spinner MDXContent={MDXContent}/>}
        />
      </LayoutComponent>
    </Container>
  );
}

const Spinner = ({ MDXContent }) => {
  return (
    <div>
      <LinearProgress style={{width: "100%"}} color="secondary" />
      <h3 style={{ color: "red" }}>HTML Error :(</h3>
      <br/>
      <pre>{MDXContent}</pre>
    </div>
  );
}

export default Preview;