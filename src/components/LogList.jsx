import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {deleteLogs, setLog} from '../actions/actions-type';

function LogList() {

    const {count} = useSelector(state => state.dragonReducer);
    const {countKnight} = useSelector(state => state.knightReducer)
    const {logs} =useSelector(state => state.logReducer);

    const dispatch = useDispatch();

    useEffect(() =>
        {
            dispatch(setLog(count))

        },[count, countKnight, dispatch]
    );

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr className="bg-secondary">
                    <th scope="col">Table des Logs
                        <button
                            className="ml-3 btn-sm rounded btn-dark"
                            onClick={() => dispatch(deleteLogs(logs))}>Delete
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>

                {logs.map((log, i) =>
                    <tr key={i}>
                        <td>{log.date}

                        </td>
                    </tr>

                )}
                </tbody>
            </table>
        </div>
    )}




export default LogList;


