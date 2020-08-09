import React from 'react';

function Wrapper({ children}) {
    return (
        <div classname="wrapper">
            { children }
        </div>
    );
}

export default Wrapper;