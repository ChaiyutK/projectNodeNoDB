import React, { forwardRef, useImperativeHandle, useRef } from "react"

const Popup = forwardRef(function Popup({onErrorDialog},ref) {

    const dialog = useRef();

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })


    return (
        <dialog ref={dialog} className="rounded-lg p-6 w-11/12 max-w-lg bg-white shadow-lg">
            
                <p>Please enter all value in input</p>
            <form method="dialog" onSubmit={onErrorDialog}>
                <button>Close the dialog</button>
            </form>
        </dialog>);
});

export default Popup;