import React, { useState } from 'react';


export default function Textform(props) {

    const [text, setText] = useState('');
    // const [word, setWord] = useState(0);

    const handleUpperCaseClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase", "Success");
    }

    const handleLowerCaseClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "Success");
    }
    const alternatingCaseClick = () => {
        let newtext = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newtext += text[i].toUpperCase();
            }
            else {
                newtext += text[i].toLowerCase();
            }
        }
        setText(newtext);
    }
    // const capitalisedCaseClick = () => {
    //     let newtext = "sahil kumar"
    //         .toLowerCase().split(' ').map({
    //             newtext.charAt(0).toUpperCase + newtext.slice(1).join(' ')
    //         })
    //     setText(newtext);
    // }
    const handleReverseClick = () => {
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "Success");

    }

    const handleClearClick = () => {
        let newtext = '';
        setText(newtext);
    }
    const extraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
    }
    // const countword = () => {
    //     let count = 0;
    //     for (let i = 0; i < text.length; i++) {
    //         if (text[i] === " ") {
    //             count++;
    //         }
    //     }
    //     count += 1;
    //     setWord(count);
    // }
    // useEffect(() => {
    //     if (text.length === 0) setWord(0);
    //     else countword();
    // }, [text])
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="10" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpperCaseClick} >Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowerCaseClick} >Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={alternatingCaseClick} >Alternating Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={extraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleReverseClick} >Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
            </div>

            <div className="container my-4 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>TextArea Summary</h2>
                <b><p>Your textarea has {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p></b>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes required to read this</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
