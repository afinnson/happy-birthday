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
    const [date, setDate] = useState(new Date());

    const openPopUp = () => {
        setDate(new Date());
        setOpen(true);
        audio.play();
    }

    const handleClose = () => {
        setOpen(false);
    }

    const buttonOnClick = () => answer === SOLUTION() ? openPopUp() : console.log(answer + " är fel :(");

    function SimpleDialog(props) {
        const { open } = props;
      
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
            opacity: 0.9,
            whiteSpace: "pre-line"
        }}
        >
            <div style={{padding: "1rem "}}>
                {"Det finns 18 olika rektanglar med heltalskoordinater i ett rutnät med sidlängder 2 och 3. " +
                "Låt r(n, m) vara antalet rektanglar i ett (n x m)-rutnät, så att r(2, 3) = 18. " +
                "Låt n ≤ m vara de minsta positiva heltalen sådana att r(n,m) = 18194484.\n" +
                "Vad är n + m²?"}
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
                        {/* // eslint-disable-next-line */}
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
