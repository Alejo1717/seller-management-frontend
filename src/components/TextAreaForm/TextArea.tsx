import * as React from 'react';
import Icon from '@mdi/react';
import { mdiAsterisk } from '@mdi/js';
import { Col, Input, Row, Typography } from 'antd';

export interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    value: any;
    onChange: any;
    onBlur?: any;
    onFocus?: any;
    required?: boolean;
    disabled?: boolean;
    error?: any;
    errorText?: any;
    size?: number;
}

const TextAreaCostum = (props: Props) => {

    const onchangeUser = (e: any) => {
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
        <>
            <Col className='form-antd-style' style={{ flex: props.size }}>
                {props.label &&
                    <Row className='label-content'>
                        <Typography.Text className={props.error ? 'label label-error' : 'label'}>
                            {props.label}
                            <>
                                {
                                    props.required
                                        ?
                                        <Typography.Text className={props.error ? 'required required-error' : 'required'}>
                                            <Icon path={mdiAsterisk} size={'10px'} style={{marginBottom: '3px', marginLeft: '-3px'}} />
                                        </Typography.Text>
                                        :
                                        <Typography.Text className={'required'} />
                                }
                            </>
                        </Typography.Text>
                    </Row>
                }
                <Row className={props.error ? 'input-error' : 'input'}>
                    <Input.TextArea
                        name={props.name}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={onchangeUser}
                        onFocus={() => onFocus()}
                        onBlur={() => onBlur()}
                        disabled={props.disabled ? props.disabled : false}
                        allowClear={true}
                    />
                </Row>
                {
                    props.error
                        ?
                        <Row align='top' className='error-content'>
                            <Typography.Text className='error' >
                                {props.errorText}
                            </Typography.Text>
                        </Row>
                        : null
                }
            </Col>
        </>
    );
}

export default TextAreaCostum;
