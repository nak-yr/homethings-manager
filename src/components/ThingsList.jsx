import React from 'react';
import {Accordion, Card, Button, Modal, Form} from 'react-bootstrap';
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

    handleSubmit (e) {
        e.preventDefault();
        let eName = e.currentTarget.elements["formBasicName"];
        console.log(eName.value);
        this.setState({
            showEdit: false,
        })
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
                    Name<input id="name" placeholder="追加したいものの名前" required/>
                    Location<input id="location" placeholder="追加したいものを置く場所" required/>
                    Memo<input id="memo" placeholder="備考" required/>
                </label>
                <input type="submit" value="リストに追加"/>
            </form>
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
                                            const eName = e.currentTarget.elements["formBasicName"];
                                            const eLocation = e.currentTarget.elements["formBasicLocation"];
                                            const eMemo = e.currentTarget.elements["formBasicMemo"];
                                            thing.name = eName.value;
                                            thing.location = eLocation.value;
                                            thing.memo = eMemo.value;
                                            this.setState({showEdit: false});
                                        }
                                        }>
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="name" placeholder="変更後の名前を入力" value={thing.name} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicLocation">
                                                <Form.Label>Location</Form.Label>
                                                <Form.Control type="location" placeholder="変更後の場所を入力" value={thing.location} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicMemo">
                                                <Form.Label>Memo</Form.Label>
                                                <Form.Control type="memo" placeholder="変更後のメモを入力" value={thing.memo} />
                                            </Form.Group>
                                            <Button variant="outline-success" type="submit">
                                                変更を適用
                                            </Button>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="outline-secondary" onClick={this.handleClose.bind(this)}>
                                            OK
                                            </Button>
                                        </Modal.Footer>
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