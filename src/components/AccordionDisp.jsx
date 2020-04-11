import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import '../App.css';
import OptionButton from './OptionButton';

class AccordionDisp extends React.Component {
    render () {
        var name = this.props.name;
        var location = this.props.location;
        var memo = this.props.memo;
        return (
            <Accordion className="AccordContent">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <ul className="ListDispWhole">
                            <li className="ThingName">{name}</li>
                            <li className="ThingChild">Location : {location}</li>
                            <li className="ThingChild">Memo : {memo}</li>
                        </ul>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <OptionButton />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default AccordionDisp;