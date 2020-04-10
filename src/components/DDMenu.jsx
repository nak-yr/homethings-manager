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

    handleClick (val) {
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
                        <div className="DDMenuContent" onClick={this.handleClick.bind(this, "機能は後日実装予定")}>
                            編集
                        </div>
                        <div className="DDMenuContent" onClick={this.handleClick.bind(this, "機能は後日実装予定")}>
                            削除
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default DDMenu;