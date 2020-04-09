import React from "react";
import "../App.css";

class DDMenu extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            listIsOpen: false,
        }
    }

    toggleList () {
        this.setState(prevState => ({
            listIsOpen: !prevState.listIsOpen,
        }))
    }

    hundleClick (val) {
        this.setState({
            listIsOpen: false,
        })
        alert(val);
    }

    render () {
        const { listIsOpen } = this.state;
        return (
            <div className="DDMenu">
                <div className="OptionButton" onClick={this.toggleList.bind(this)} >︙</div>
                {listIsOpen && (
                    <div className="DDMenuWrap">
                        <div className="DDMenuContent" onClick={this.hundleClick.bind(this, 1)}>
                            編集
                        </div>
                        <div className="DDMenuContent" onClick={this.hundleClick.bind(this, 2)}>
                            削除
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default DDMenu;