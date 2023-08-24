import React from "react";

function InputForm({ data, setInp, inp }) {
    function chengeInp(event) {
        setInp({ ...inp, [event.target.name]: event.target.value })
    }

    return (
        <>
            {data.map((el, index) => <div key={index}>
                <input name={el.text} type={el.type} placeholder={el.text} onChange={chengeInp}>
                </input>
            </div>)}
        </>
    )
}

export default InputForm;