import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {deleteDragon, reverseOrder} from '../actions/actions-type';

function DragonList() {

    const {dragons, dragon} = useSelector(state => state.dragonReducer);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr className="bg-secondary">
                    <th scope="col">Dragons
                        <button
                            className="btn-xs btn-secondary ml-2"
                            onClick={() => dispatch(reverseOrder(dragon))}>Reverse
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {dragons.map((dragon, i) =>
                    <tr key={i}>
                        <td>{dragon}
                            <button
                                className="btn-xs btn-danger ml-2"
                                onClick={() => dispatch(deleteDragon(dragon))}>
                                Delete
                            </button>
                        </td>
                    </tr>

                )}
                </tbody>
            </table>
        </div>
    )}



export default DragonList;







