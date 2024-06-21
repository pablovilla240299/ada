import React from 'react';

function Home() {
    const listItem = [1, 2, 3, 4];

    const addItem = () => {
        const varibleA = 1;
        const variableB = 2;  // Corregido a variableB para mantener la consistencia en mayúsculas/minúsculas
        const variableC = 3;
        return varibleA * 3 + variableC * variableB;
    };

    return (
        <div>
            <div>Home</div>
            <p>hola mundo</p>
            <button onClick={addItem}>Click me</button>
        </div>
    );
}

export default Home;
