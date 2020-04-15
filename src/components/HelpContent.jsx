import React from 'react';
import '../App.css';
import {Button, Modal} from 'react-bootstrap';

class HelpContent extends React.Component {
    constructor () {
        super ();
        this.state = {
            showHelp: false,
        };
    }

    handleClickHelp () {
        this.setState ({
            showHelp: true,
        })
    }

    handleCloseHelp () {
        this.setState ({
            showHelp: false,
        })
    }

    render () {
        return (
            <>
            <Button variant="outline-secondary" type="help" onClick={this.handleClickHelp.bind(this)}>
                使い方
            </Button>
            <Modal show={this.state.showHelp} onHide={this.handleCloseHelp.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>使い方</Modal.Title>
                </Modal.Header>
                <Modal.Body>使い方</Modal.Body>
                <Modal.Footer>
                <Button variant="outline-secondary" type="heloclose" onClick={this.handleCloseHelp.bind(this)}>
                    閉じる
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    } 
}

export default HelpContent;