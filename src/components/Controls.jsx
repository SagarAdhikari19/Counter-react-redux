import React from 'react'
import { useDispatch } from 'react-redux'


function Controls() {

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });

    }

    const handleDecrement = () => {

        dispatch({ type: "DECREMENT" });
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3" fdprocessedid="n13yuf" onClick={handleIncrement}> + 1 </button>
                <button type="button" className="btn btn-success btn-lg px-4" fdprocessedid="4q0j4c" onClick={handleDecrement}> - 1</button>
            </div>
        </>
    )
}

export default Controls