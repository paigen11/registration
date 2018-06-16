import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ErrorModal extends Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        return (

            <Modal
                className='error-modal'>
                <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{this.props.error.errorHeader}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.error.errorBody}</Modal.Body>
                    <Modal.Footer>
                        <Button>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        )
    }
}

export default ErrorModal;