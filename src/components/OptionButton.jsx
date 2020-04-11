import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import '../App.css';

class OptionButton extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false,
        }
    }

    handleClickEdit () {
        this.setState({show: !this.state.show});
    }

    handleClose () {
        this.setState({show: !this.state.show});
    }

    render() {
        return (
            <>
            <Button variant="outline-secondary" onClick={this.handleClickEdit.bind(this)}>このカードを編集</Button>{' '}
            <Button variant="outline-danger">このカードを削除</Button>

            <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
            <Modal.Header closeButton>
                <Modal.Title>編集・削除機能</Modal.Title>
            </Modal.Header>
            <Modal.Body>機能は後日実装予定です。</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={this.handleClose.bind(this)}>
                OK
                </Button>
            </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default OptionButton;