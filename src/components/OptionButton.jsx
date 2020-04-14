import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import '../App.css';

class OptionButton extends React.Component {
    constructor(){
        super();
        this.state = {
            showEdit: false,
            showDelete: false,
        }
    }

    handleClickEdit () {
        this.setState({showEdit: true});
    }

    handleClickDelete () {
        this.setState({showDelete: true});
    }

    handleClickDeleteConfirm () {
        this.props.children = [];
    }

    handleClose () {
        this.setState({
            showEdit: false,
            showDelete: false,
        });
    }

    render() {
        return (
            <>
            <Button variant="outline-secondary" onClick={this.handleClickEdit.bind(this)}>このカードを編集</Button>{' '}
            <Button variant="outline-danger" onClick={this.handleClickDelete.bind(this)}>このカードを削除</Button>

            <Modal show={this.state.showEdit} onHide={this.handleClose.bind(this)}>
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

            <Modal show={this.state.showDelete} onHide={this.handleClose.bind(this)}>
            <Modal.Header closeButton>
                <Modal.Title>削除確認</Modal.Title>
            </Modal.Header>
            <Modal.Body>本当にこのカードを削除しますか？</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={this.handleClickDeleteConfirm.bind(this)}>
                削除
                </Button>
                <Button variant="outline-secondary" onClick={this.handleClose.bind(this)}>
                キャンセル
                </Button>
            </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default OptionButton;