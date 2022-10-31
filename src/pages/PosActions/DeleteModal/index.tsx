import React from 'react';
import Icon from '@mdi/react';
import { Divider, Modal } from 'antd';
import { Seller } from '../../../models/column.data';
import TextAreaForm from '../../../components/TextAreaForm';
import { mdiAlertCircleOutline as alertIcon } from '@mdi/js';
import DatePickerForm from '../../../components/DatePickerForm';
import { StySecondaryButton } from '../../../components/Button/button.style';

interface Props {
    onOpen: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    onDelete: () => void;
    sellerSelected: Seller | null | undefined;
}

const DeleteModal = (props: Props) => {
    
    return (
        <>
            <Modal
                open={props.onOpen}
                width={700}
                footer={[
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <StySecondaryButton theme='danger' onClick={() => props.setShowModal(false)}>
                            Dar de baja
                        </StySecondaryButton>
                        <StySecondaryButton onClick={() => props.setShowModal(false)}>
                            Cancelar
                        </StySecondaryButton>
                    </div>
                ]}
                closable={false}
            >
                <>
                    <div style={{marginLeft: '2rem'}}>
                        <span style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                            <Icon path={alertIcon} style={{color: 'crimson', height: '24px'}} />
                            { /* // TODO */ }
                            <h3 style={{margin: 0}}>¿Seguro que quiere dar de baja a '{props.sellerSelected?.fName}'?</h3>
                        </span>
                        <h4>Escriba el motivo y selecciones una fecha para confirmar la baja.</h4>
                    </div>
                    
                    <Divider />

                    <TextAreaForm
                        name={'finishedWorkingReason'}
                        label={'Motivo de la baja'}
                        placeholder={'Completar'}
                        required={true}
                        value={''}
                        onChange={() => console.log('lala')}
                        error={false}
                        errorText={'Error'}
                        size={1}
                    />
                    <DatePickerForm
                        name={'workingUntil'}
                        label={'Fecha de baja'}
                        value={''}
                        onChange={() => console.log('cambio de fecha')}
                    />
                </>
            </Modal>
        </>
    );
}

export default DeleteModal;
