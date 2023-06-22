import React from 'react';

export const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();


    const handleSubmit = (e) => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" ref={nameInput} />
            <input type="age" name="number" placeholder="Age" ref={ageInput} />
            <input type="hairColor" name="name" placeholder="Hair Color" ref={hairColorInput} />
            <input type="submit" value="Submit" />
        </form>
    );
};