
import React from 'react'
import { Button } from '@material-ui/core'
import {ErrorBoundary} from 'react-error-boundary'
import RefreshIcon from '@material-ui/icons/Refresh'

const ErrorFallback = ({error, resetErrorBoundary}) => {
  return (
    <div role="alert">
      <h1>HTML in progress :)</h1>
      <p>Press below when you are ready to view changes.</p>
      <Button
        variant={"contained"}
        color={"primary"}
        startIcon={<RefreshIcon />}
        onClick={resetErrorBoundary}
      >
        Refresh
      </Button>
    </div>
  )
}

const PreviewErrorBoundary = (props) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      props.setHasError(false);
    }}
    onError={() => props.setHasError(true)}
  >
    {props.children}
  </ErrorBoundary>
)

export default PreviewErrorBoundary;