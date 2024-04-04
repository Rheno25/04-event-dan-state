import { useState } from "react";

export default function Form(){
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if(status === 'success'){
        return <h1>Yay... Correct Answer!</h1>
    }

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        }catch (err){
            setStatus('typing');
            setError(err);
        }        
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }

    return(
        <>
            <div className="w-full max-w-xs">
                <h2>Guess the animal name</h2>
                <p>What animal is Doraemon afraid of?</p>
                <form
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                    onSubmit={handleSubmit}>
                    <textarea
                        value={answer}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}
                    />
                    <br />
                    <button
                        className="bg-blue p-2 m-2 rounded text-sm text-white"
                        disabled={answer.length === 0 || status === 'submitting'}>
                        Submit
                        </button>
                        {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
                    </form>
            </div>
        </>
    );
}

function submitForm(answer){
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'rat'
            if(shouldError){
                reject(new Error('Nice guess but its not correct. Try again!'));
            }else{
                resolve();
            }
        }, 500);
    });
}

export function Form_2(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <>
            <h2>Please fill out your full name</h2>
            <label className="block-w-full m-2">
                First Name:
                <input className="text-sm text-black ml-2 rounded"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label className="block w-full m-2">
                Last Name:
                <input className="text-sm text-black ml-2 rounded"
                    value={lastName}
                    onChange={handleLastNameChange}
                    />
            </label>
            <p>Your full name is: <b className="text-blue-600">{fullName}</b></p>
        </>
    )
}