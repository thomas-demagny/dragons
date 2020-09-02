import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setKnight, addKnight} from '../actions/actions-type';




function FormKnight() {

    const dispatch = useDispatch();
    const {knight} = useSelector(state => state.knightReducer);



    const handleChange = (event) => {
        const { value } = event.target;

        dispatch(setKnight(value))
    }

    return (

        <>
            <div className="form-group">

                <input type="text" className="form-control"
                       placeholder="entrer un chevalier"
                       value={knight} onChange={handleChange}
                />
                <button
                    onClick={() => dispatch(addKnight(knight))}
                    className="btn btn-dark mt-3">Add
                </button>
            </div>


        </>
    )
}

export default FormKnight;






