export function Question({text, choices, answer}) {
    return <div>
        <h2>{text}</h2>
        <ul>
            {choices.map((choice, index) => {
                return <li key={index}>{choice}</li>
            })}
        </ul>
        <p>Answer: {answer}</p>
    </div>
}