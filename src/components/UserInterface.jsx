import React from 'react';
import '../App.css';

function UserInterface() {
    return (
        <>
        <div className="TitleBar dark">
            <h1>Home Things Manager</h1>
            { /*リストの中身を動的に変更するような仕様にする*/ }
        </div>
        <div className="MainField">
            <button>リストに追加</button>
            <button>リストを変更</button>
        </div>
        </>
    )
}

export default UserInterface;