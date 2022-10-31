import * as React from 'react';
import Icon from '@mdi/react';
import { mdiAsterisk } from '@mdi/js';
import { Col, Input, Row, Typography } from 'antd';
import { FieldValues, UseFormRegister } from 'react-hook-form';
export interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    value: any;
    onChange?: any;
    onBlur?: any;
    onFocus?: any;
    required?: boolean;
    disabled?: boolean;
    error?: any;
    errorText?: any;
    size?: number;
    defaultValue?: any;
}

const InputCustom = (props: Props) => {

    const onchange = (e: any) => {
        props.onChange(e);
    };

    const onFocus = () => {
        if (props.onFocus) {
            props.onFocus(true)
        }
    }
    const onBlur = () => {
        if (props.onBlur) {
            props.onBlur(!(props.value === ''))
        }
    }
    return (
        <div>
            <Col className='form-antd-style' style={{ flex: props.size }}>
                {props.label &&
                    <div>
                        <Row className='label-content'>
                            <Typography.Text className={props.error ? 'label label-error' : 'label'}>
                                {props.label}
                                <>
                                    {props.required
                                        ?
                                        <Typography.Text className={props.error ? 'required required-error' : 'required'}>
                                            <Icon path={mdiAsterisk} size={'10px'} style={{ marginBottom: '3px', marginLeft: '-3px' }} />
                                        </Typography.Text>
                                        :
                                        <Typography.Text className={'required'} />
                                    }
                                </>
                            </Typography.Text>
                        </Row>
                    </div>
                }
                <div className={props.error ? 'input-error' : 'input'}>
                    <Input
                        name={props.name}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={onchange}
                        onFocus={() => onFocus()}
                        onBlur={() => onBlur()}
                        disabled={props.disabled ? props.disabled : false}
                        defaultValue={props.defaultValue}
                    />
                </div>
                <div style={{ display:'flex', alignItems: 'flex-start'}}>
                    <div className='error-content'>
                        {props.error
                            ?
                            <Typography.Text className='error' >
                                {props.errorText}
                            </Typography.Text>
                            : null
                        }
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default InputCustom;