import React  from 'react';
import './App.css';
import FormDragon from "./components/FormDragon";
import DragonList from "./components/DragonList";
import KnightList from "./components/KnightList";
import FormKnight from "./components/FormKnight";
import {useSelector} from "react-redux";
import LogList from "./components/LogList";


function App() {

    const {count} = useSelector(state => state.dragonReducer);
    const {countKnight} = useSelector(state => state.knightReducer)






    return (
        <>
            <header className="bg-secondary">
                <h1 className="text-center p-4">Dragon's and Knight's List, number of dragon(s): {count} ,
                    number of Knight(s): {countKnight} </h1>
            </header>

            <div className="d-flex ">

                <div className="col pt-5">
                    <h2 className="bg-primary p-2"> Enter a dragon</h2>
                    <FormDragon />
                    <h2 className="bg-primary p-2"> Enter a knight</h2>
                    <FormKnight />
                </div>
                <div className="col pt-5">
                    <DragonList />
                </div>
                <div className="col pt-5">
                    <KnightList />
                </div>
            </div>

            <div >
                <LogList />
            </div>


        </>
    );
}

export default App;



















