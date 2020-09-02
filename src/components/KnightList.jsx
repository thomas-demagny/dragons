import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {deleteKnight} from '../actions/actions-type';

function KnightList() {

    const {knights} = useSelector(state => state.knightReducer);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr className="bg-secondary">
                    <th scope="col">
                        Knights
                    </th>
                </tr>
                </thead>
                <tbody>
                {knights.map((knight, i) =>
                    <tr key={i}>
                        <td>{knight}
                            <button
                                className="btn-xs btn-danger ml-2"
                                onClick={() => dispatch(deleteKnight(knight))}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>

            </table>
        </div>
    )
}

export default KnightList;