import React from 'react';
import {Accordion, Card, Button, Modal} from 'react-bootstrap';
import '../App.css';

class AccordionDisp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            thingsList: [],
            showEdit: false
        }
    }

    handleClickCard () {
        this.setState({
            thingsList: this.props.thingslist
        })
    }

    handleClickEdit () {
        this.setState({showEdit: true});
    }

    handleClickDelete (List, thing) {
        const newList = List.filter(list => list !== thing);
        List = newList.slice();
        return List;
    }

    handleClose () {
        this.setState({
            showEdit: false
        });
    }

    render () {
        let List = this.props.thingslist.slice();
        return (
            <>
            <ul className="ListDispWhole">
                {List.map( (thing, index) =>
                    <Accordion className="AccordContent" onLoad={this.handleClickCard.bind(this)}>
                        <Card onClick={this.handleClickCard.bind(this)}>
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
                                    <Button onClick={this.handleClickDelete.bind(this,List,thing)}>このカードを削除</Button>

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
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    )
                }
            </ul>
            
            </>
        );
    }
}

export default AccordionDisp;