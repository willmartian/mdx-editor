import React from 'react'
import Container from "@material-ui/core/Container";
import MDX from '@mdx-js/runtime';
import PreviewErrorBoundary from "./PreviewErrorBoundary";
import { useEffect, useState } from "react";

function Preview({ MDXContent, components, LayoutComponent, setMDXContent }) {
  const [errorBoundaryKey, setErrorBoundaryKey] = useState(0);
  const [hasError, setHasError] = useState(false);
  // const [MDXVisible, setMDXVisible] = useState(MDXContent ? MDXContent.getPlainText() : "");

  // useEffect(() => {
  //   if (!hasError) {
  //     setMDXVisible(MDXContent ? MDXContent.getPlainText() : "");
  //   } else {
  //     setErrorBoundaryKey(prevState => prevState + 1);
  //     setMDXVisible("## Error!");
  //     setHasError(false);
  //   }
  // }, [MDXContent])

  // useEffect(() => {

  // }, [hasError]);

  return (
    <Container style={{height: "100%", resize: "horizontal"}}>
      <PreviewErrorBoundary key={errorBoundaryKey} setHasError={setHasError} setMDXContent={setMDXContent}>
        <LayoutComponent>
          {!hasError &&
            <MDX components={components}>
              { MDXContent }
            </MDX>
          }
        </LayoutComponent>  
      </PreviewErrorBoundary>
    </Container>
  );
}

export default Preview;