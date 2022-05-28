import React from "react";
import SOLUTION from "./solution";

const CorrectAnswerPopup = (props) => {
    const birthdayMonth = 5;
    const birthdayDay = 29;

    const isBirthday = (date) => {
        // console.log(date.getMonth());
        // console.log(date.getDate());
        return (birthdayMonth === (date.getMonth() + 1) && birthdayDay === date.getDate())
    }

    return (
        <div
        style={{
            width: "10.5rem",
            padding: "1.5rem",
            backgroundColor: "#d69cc5",
            color: "black",
            borderStyle: "solid",
            borderWidth: "4px",
            borderColor: "#f6bcd5",
            opacity: 0.9,
            whiteSpace: "pre-line"
        }}
        >
            {"Grattis" + (isBirthday(props.date) ? "" : " i efterskott") + "!\n"}
            {"Jag hoppas att du " + (isBirthday(props.date) ? "får" : "hade") + " en jättebra födelsedag! "}
            {"Som en bonus borde du kunna återanvända din lösning här till "} <a href="https://projecteuler.net/problem=85">det här</a>
            {" problemet på Project Euler!"}
            {" Du kan även fundera på vad det är för speciellt med talet " + SOLUTION() + "."}
            {" Det var\nallt jag ville säga"}
        </div>
    )
}

export default CorrectAnswerPopup;