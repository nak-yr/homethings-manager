import React from 'react';
import '../App.css';

class ThingsList extends React.Component {
    constructor() {
        super();
        this.state = {
            thingsList: []
        };
    }

    render () {
        return (
            <>
            <form className="AddingForm" onSubmit={
                event => {event.preventDefault();

                const nameElement = event.currentTarget.elements["name"];
                const locationElement = event.currentTarget.elements["location"];
                this.setState(
                    {
                    thingsList: this.state.thingsList.concat({
                        name: nameElement.value,
                        location: locationElement.value
                    })
                    },
                    // stateの変更後に入力した値を空にする
                    () => {
                    nameElement.value = "";
                    locationElement.value = "";
                    }
                )
                }
            }>
                <label>
                    Name<input id="name" placeholder="追加したいものの名前" />
                    Location<input id="location" placeholder="追加したいものを置く場所" />
                </label>
                <input type="submit" value="リストに追加"/>
            </form>
            <div className="ListDisp">
                ここに配列の内容を表示<br />
                <url>https://qiita.com/rioc/items/8723c236e10d989e827d#6-%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6todo%E3%82%92%E8%BF%BD%E5%8A%A0</url>
            </div>
            </>
        )
    }
}

export default ThingsList;