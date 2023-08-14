function Options({ arr }) {
    return (
        <>
            {arr.map((el, index) => <p key={index}>{el}</p>)}
        </>
    )
}

export default Options;