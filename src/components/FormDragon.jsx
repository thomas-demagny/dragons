import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setDragon, addDragon} from '../actions/actions-type';




function FormDragon() {

    const dispatch = useDispatch();
    const {dragon} = useSelector(state => state.dragonReducer);



    const handleChange = (event) => {
        const { value } = event.target;

        dispatch(setDragon(value))

    }

    return (

        <>
            <div className="form-group">

                <input type="text" className="form-control"
                       placeholder="entrer un nouveau dragon"
                       value={dragon} onChange={handleChange}
                />
                <button
                    onClick={() => dispatch(addDragon(dragon))}
                    className="btn btn-dark mt-3">Add
                </button>
            </div>


        </>
    )
}

export default FormDragon;

















