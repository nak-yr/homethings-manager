import React from 'react';
import {Dropdown} from 'react-bootstrap';

class DDMenuBootstrap extends React.Component {

    handleClickEdit () {
        alert("機能は後日実装");
    }

    handleClickDelete () {
        alert("機能は後日実装");
    }

    render () {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">Option</Dropdown.Toggle>
    
                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.handleClickEdit.bind(this)}>編集</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleClickDelete.bind(this)}>削除</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
    
}

export default DDMenuBootstrap;