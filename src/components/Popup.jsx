import React from "react"

export default function Popup() {



    return (
        <dialog open className="backdrop-blur-lg">
            <form method="dialog">
                <p>Please enter all value in input</p>
                <button type="submit">Close the dialog</button>
            </form>
        </dialog>);
}