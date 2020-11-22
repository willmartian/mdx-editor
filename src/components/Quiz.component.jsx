import React, { useEffect, useState } from "react"

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

    item: {
        padding: "2em",
        paddingTop: ".25em",
        paddingBottom: "1em"
    },

    input: {
        margin: ".75em"
    },

    button: {
        margin: "2em",
        marginTop: "0",
        marginRight: ".5em",
        backgroundColor: "black",
        color: "white"
    },

    visible: {
        visibility: "visible",
        color: "grey"
    },

    hidden: {
        visibility: "hidden",
        color: "grey"
    },
}

const childrenWithProps = (children, addedProps) => {
    return React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, addedProps);
        }
        return child;
    });
}

export const Quiz = ({children}) => {
    const [correct, setCorrect] = useState(false);
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        setAnswered(false);
    }, [correct])

    const newChildren = childrenWithProps(children, { setCorrect: setCorrect })

    const checkCorrect = e => {
        e.preventDefault();
        if (correct) {
            console.log("correct");
        } else {
            console.log("false");
        }
        setAnswered(true);
    }

    return (
        <form style={style.main}>
            <h3 style={style.h3}>Knowledge Check</h3>
            {newChildren}
            <div>
                <button onClick={checkCorrect} style={style.button}>Submit</button>
                <small style={answered ? style.visible : style.hidden}>
                    {correct ?
                        <>Correct!</>
                    :
                        <>Sorry, try again!</>
                    }
                </small>
            </div>
        </form>
    )
}

export const Item = ({children, setCorrect}) => {
    const newChildren = childrenWithProps(children, { name: "item1", setCorrect: setCorrect });

    return (
        <div style={style.item}>
            {newChildren}
        </div>
    )
}

export const Prompt = ({children}) => {
    return (
        <legend>
            {children}
        </legend>
    )
}

export const Answer = ({children, correct, name, setCorrect}) => {
    const handleClick = () => {
        if (correct) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }

    return (
        <>
            <input required type={"radio"} style={style.input} name={name} onClick={handleClick}/>
            <label>
                {children}
            </label>
            <br/>
        </>
    )
}