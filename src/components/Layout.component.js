import React from "react"


const Layout = ({ children }) => {
  return (
    <>
      <h1>Title</h1>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout