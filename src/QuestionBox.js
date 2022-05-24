import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import landscape from './landscape.jpg';
import fanfare from './fanfare.mp3';

import SOLUTION from './solution.js';

const QuestionBox = () => {
    const audio = new Audio(fanfare);

    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState("0");

    const openPopUp = () => {
        console.log("Hej")
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
          <Dialog onClose={handleClose} open={open} 
            style={{
                backgroundColor: '#bc9932',
                color: '#00ff00'
            }}
          >
            <div
             style={{
                backgroundColor: '#ff00ff',
             }}
            >
                HEJ
            </div>
          </Dialog>
        );
      }

    return (
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "50rem",
            borderWidth: "2px",
            borderRadius: "2px",
            borderStyle: "solid",
            borderColor: '#cca937',
            backgroundColor: '#bc9932'
        }}
        >
            <img src={landscape} alt=""/>

            <div>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus nibh et diam euismod porttitor. Ut tempus risus quis vestibulum consequat. Proin volutpat libero id quam pulvinar aliquam. Sed ullamcorper ipsum sit amet ipsum sagittis laoreet. Nam lobortis consequat lacus eu ullamcorper. Proin quis felis ac sem consectetur vulputate et at leo. Sed justo quam, mollis ac mauris vitae, cursus dapibus urna. Mauris sit amet magna at nibh tincidunt commodo eget in orci. Praesent vehicula commodo nunc non suscipit. Fusce convallis mollis urna, quis posuere eros ultricies sed. Donec quis diam vitae turpis dapibus dignissim. In blandit elit non convallis volutpat. Praesent ipsum felis, ornare at nisl vel, vulputate venenatis neque. Fusce ultricies nisi a lacus porta, non eleifend magna tincidunt.
            </div>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
            <div
                style={{
                    alignContent: "space-evenly",
                    flexDirection: "row",
                    display: "flex"
                }}
            >
                <Button
                onClick={buttonOnClick}
                style={{
                    backgroundColor: '#cca937'
                }}>
                    🎁
                </Button>
                <TextField
                    label="Outlined"
                    variant="outlined"
                    onKeyDownCapture={(e) => {
                        if (e.code === "Enter") {
                            buttonOnClick();
                        }
                    }}
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </div>
        </div> 
    )
}

export default QuestionBox;
