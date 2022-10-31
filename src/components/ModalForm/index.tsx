import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import { Modal, Row } from 'antd'
import React from 'react'

interface Props {
    isModalOpen: boolean;
    children: any;
    onClose: any;
}

const ModalForm = (props: Props) => {
    return (
        <div className='modal-antd-style'>
            <Modal
                open={props.isModalOpen}
                footer={null}
                centered
                closable={false}
                width={502}
                style={{ borderRadius: '20px' }}
                bodyStyle={{
                    width: 502,
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: 0,
                    margin: 0
                }}
            >
                <div style={{ padding: 15 }}>
                    <Row justify='end'>
                        <div onClick={props.onClose} style={{ width: 20, height: 20, cursor: 'pointer' }}>
                            <Icon path={mdiClose} />
                        </div>
                    </Row>
                    {props.children}
                </div>

            </Modal>
        </div>
    );
};

export default ModalForm;