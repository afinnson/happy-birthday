import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';

import fanfare from './fanfare.mp3';

import SOLUTION from './solution.js';
import CorrectAnswerPopup from './CorrectAnswerPopup';

const QuestionBox = () => {
    const audio = new Audio(fanfare);

    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState("0");
    const [date, setDate] = useState(new Date);

    const openPopUp = () => {
        setDate(new Date);
        setOpen(true);
        audio.play();
    }

    const handleClose = () => {
        setOpen(false);
    }

    const buttonOnClick = () => answer === SOLUTION() ? openPopUp() : console.log(answer + " är fel :(");

    function SimpleDialog(props) {
        const { onClose, selectedValue, open } = props;
      
        return (
            <Dialog onClose={handleClose} open={open}>
                <CorrectAnswerPopup date={date}/>
            </Dialog>);
      }

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
            width: "70vw",
            maxWidth: "40rem",
            borderWidth: "2px",
            borderRadius: "5px",
            borderStyle: "solid",
            borderColor: '#242424',
            // backgroundColor: '#bc9932',
            backgroundColor: '#121212',
            opacity: 0.9
        }}
        >
            <div style={{padding: "1rem "}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus nibh et diam euismod porttitor. Ut tempus risus quis vestibulum consequat. Proin volutpat libero id quam pulvinar aliquam. Sed ullamcorper ipsum sit amet ipsum sagittis laoreet. Nam lobortis consequat lacus eu ullamcorper. Proin quis felis ac sem consectetur vulputate et at leo. Sed justo quam, mollis ac mauris vitae, cursus dapibus urna. Mauris sit amet magna at nibh tincidunt commodo eget in orci. Praesent vehicula commodo nunc non suscipit. Fusce convallis mollis urna, quis posuere eros ultricies sed. Donec quis diam vitae turpis dapibus dignissim. In blandit elit non convallis volutpat. Praesent ipsum felis, ornare at nisl vel, vulputate venenatis neque. Fusce ultricies nisi a lacus porta, non eleifend magna tincidunt.
            </div>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
            <div
                style={{
                    display: "flex",
                    padding: "1rem",
                    // justifyContent: "space-around",
                    // alignSelf: "center",
                    // alignItems: "center",
                    flexDirection: "row",
                    // minHeight: "5rem",
                    // width: "100%"
                }}
            >
                <div 
                    style={{
                        display: "flex",
                        flex: 1,
                        alignSelf: "stretch"
                        // minHeight: "3rem"                        
                    }}
                >
                    <Button
                    onClick={buttonOnClick}
                    style={{
                        backgroundColor: '#dbb62e',
                        alignSelf: "stretch"
                        // maxWidth: "3rem"
                    }}
                    color= {answer === SOLUTION() ? "success" : "error"}
                    >
                        🎁
                    </Button>
                </div>
                <div 
                    style={{
                        display: "flex",
                        alignSelf: "stretch",
                        flex: 2
                        // minHeight: "3rem"                        
                    }}
                >
                    <TextField
                        sx={{ input: { color: 'white', backgroundColor: "#0ca696", borderRadius: "4px" } }} 
                        label=""
                        variant="outlined"
                        onKeyDownCapture={(e) => {
                            if (e.code === "Enter") {
                                buttonOnClick();
                            }
                        }}
                        color="success"
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>
            </div>
        </div> 
    )
}

export default QuestionBox;
