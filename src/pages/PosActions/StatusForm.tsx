import { Row } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import DatePickerCustom from '../../components/DatePickerForm/DatePicker';
import InputForm from '../../components/InputForm';
import TextAreaForm from '../../components/TextAreaForm';
import TitlePage from '../../components/TitlePage';

interface Props {
    action: string;
}

const StatusForm = (props: Props) => {
    const { control } = useForm<FormData>();

    return (
        <Row style={{ width: '100%', marginTop: 48 }} >
            <TitlePage title='Estado' />
            <div className="form-row">
                <DatePickerCustom 
                    name={'activeSince'}
                    label={'Fecha de Alta'}
                    value={''}
                    onChange={(e: any) => console.log('')}
                    required={true}
                    // error={props.errors.activeSince}
                    // errorText={props.errors.activeSince?.message}
                    // control={props.control}
                    disabled={ props.action === 'details' ? true : false }
                    size={1}
                />
                { !(props.action === 'create' || props.action === 'edit') ?
                    <DatePickerCustom 
                        name={'activeUntil'}
                        label={'Fecha de baja'}
                        value={''}
                        onChange={() => {}}
                        required={true}
                        // error={props.errors.activeUntil}
                        // errorText={props.errors.activeUntil?.message}
                        // control={props.control}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                    : <div style={{flex: '1'}}></div>
                }
            </div>
            { !(props.action === 'create' || props.action === 'edit') &&
                <div className="form-row">
                    <TextAreaForm 
                        key={'finishedWorkingReason'}
                        name={'finishedWorkingReason'}
                        label={'Motivo'}
                        placeholder={'Completar'}
                        required={true}
                        value={''}
                        onChange={()=>{}}
                        control={control}
                        // error={props.errors.finishedWorkingReason}
                        // errorText={props.errors.finishedWorkingReason?.message}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                </div>
            }
        </Row>
    )
}

export default StatusForm;
