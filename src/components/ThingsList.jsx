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
                const memoElement = event.currentTarget.elements["memo"]
                this.setState(
                    {
                    thingsList: this.state.thingsList.concat({
                        name: nameElement.value,
                        location: locationElement.value,
                        memo: memoElement.value
                    })
                    },
                    // stateの変更後に入力した値を空にする
                    () => {
                    nameElement.value = "";
                    locationElement.value = "";
                    memoElement.value = "";
                    }
                )
                }
            }>
                <label>
                    Name<input id="name" placeholder="追加したいものの名前" />
                    Location<input id="location" placeholder="追加したいものを置く場所" />
                    Memo<input id="memo" placeholder="備考" />
                </label>
                <input type="submit" value="リストに追加"/>
            </form>
            <div className="ListDisp">
                <ul>
                    {this.state.thingsList.map((thing, index) =>
                        <li key={index}>{thing.name}
                            <ul>
                                <li>{thing.location}</li>
                                <li>{thing.memo}</li>
                            </ul>
                        </li>
                        )
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default ThingsList;