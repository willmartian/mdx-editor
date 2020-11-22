const style = {
    main: {
        border: "2px solid black",
        borderRadius: ".25em",
        margin: "1em"
    },

    h3: {
        color: "white",
        backgroundColor: "black",
        padding: ".5em"
    },

    p: {
        padding: "2em",
        paddingTop: ".25em",
        paddingBottom: ".25em"
    }
}

const KeyTakeaway = ({children}) => {
  return (
    <div style={style.main}>
        <h3 style={style.h3}>Key Takeaway</h3>
        <p style={style.p}>{children}</p>
    </div>
  )
}

export default KeyTakeaway;