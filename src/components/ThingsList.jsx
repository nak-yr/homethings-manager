import React from 'react';
import {Accordion, Card, Button, Modal, Form} from 'react-bootstrap';
import HelpContent from './HelpContent'
import '../App.css';

class ThingsList extends React.Component {
    constructor() {
        super();
        this.state = {
            thingsList: [],
            showEdit: false
        };
    }

    handleClickEdit () {
        this.setState({showEdit: true});
    }

    handleClickDelete (thing) {
        this.setState({
            thingsList: this.state.thingsList.filter(list => list !== thing)
        })
    }

    handleClose () {
        this.setState({showEdit: false});
    }

    render () {
        return (
            <>
            <Form className="AddingForm" onSubmit={e => {
                e.preventDefault();
                const nameElement = e.currentTarget.elements["formInputName"];
                const locationElement = e.currentTarget.elements["formInputLocation"];
                const memoElement = e.currentTarget.elements["formInputMemo"]
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
                <Form.Group controlId="formInputName" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="追加したいものの名前" required />
                </Form.Group>
                <Form.Group controlId="formInputLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="location" placeholder="追加したいものを置く場所" required />
                </Form.Group>
                <Form.Group controlId="formInputMemo">
                    <Form.Label>Memo</Form.Label>
                    <Form.Control type="memo" placeholder="備考" required />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    リストに追加
                </Button>{' '}
                <HelpContent />
            </Form>

            <div>
                <ul className="ListDispWhole">
                    {this.state.thingsList.map( (thing, index) =>
                        <Accordion className="AccordContent">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <ul className="ListDispWhole">
                                        <li key={thing.name.toString()} className="ThingName">{thing.name}</li>
                                        <li key={thing.location.toString()} className="ThingChild">Location : {thing.location}</li>
                                        <li key={thing.memo.toString()} className="ThingChild">Memo : {thing.memo}</li>
                                    </ul>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Button variant="outline-secondary" onClick={this.handleClickEdit.bind(this)}>このカードを編集</Button>{' '}
                                        <Button variant="outline-danger" onClick={this.handleClickDelete.bind(this,thing)}>このカードを削除</Button>

                                        <Modal show={this.state.showEdit} onHide={this.handleClose.bind(this)}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>カードを編集</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <Form onSubmit={e => {
                                            e.preventDefault();
                                            const eName = e.currentTarget.elements["formChangeName"];
                                            const eLocation = e.currentTarget.elements["formChangeLocation"];
                                            const eMemo = e.currentTarget.elements["formChangeMemo"];
                                            thing.name = eName.value;
                                            thing.location = eLocation.value;
                                            thing.memo = eMemo.value;
                                            this.setState({showEdit: false});
                                        }
                                        }>
                                            <Form.Group controlId="formChangeName" >
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="name" placeholder={thing.name} required />
                                            </Form.Group>
                                            <Form.Group controlId="formChangeLocation">
                                                <Form.Label>Location</Form.Label>
                                                <Form.Control type="location" placeholder={thing.location} />
                                            </Form.Group>
                                            <Form.Group controlId="formChangeMemo">
                                                <Form.Label>Memo</Form.Label>
                                                <Form.Control type="memo" placeholder={thing.memo} />
                                            </Form.Group>
                                            <Button variant="outline-success" type="submit">
                                                変更を適用
                                            </Button>
                                            <Button variant="outline-secondary" type="submit">
                                                キャンセル
                                            </Button>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer />
                                        </Modal>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        )
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default ThingsList;