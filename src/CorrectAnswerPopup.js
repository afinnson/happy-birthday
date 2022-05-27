import { DialogContentText, DialogTitle } from "@mui/material";

const CorrectAnswerPopup = (props) => {
    const birthdayMonth = 5;
    const birthdayDay = 27;

    const isBirthday = (date) => {
        // console.log(date.getMonth());
        // console.log(date.getDate());
        return (birthdayMonth === (date.getMonth() + 1) && birthdayDay === date.getDate())
    }

    return (
        <div
        style={{
            width: "14rem",
            padding: "2rem",
            backgroundColor: "#d69cc5",
            color: "black",
            opacity: 0.9,
            whiteSpace: "pre-line"
        }}
        >
            {"Grattis" + (isBirthday(props.date) ? "" : " i efterskott") + "!\n"}
            {"Jag hoppas du " + (isBirthday(props.date) ? "får" : "hade") + " en jättebra födelsedag. "}
            {"Det var\nallt jag ville säga"}
        </div>
    )
}

export default CorrectAnswerPopup;