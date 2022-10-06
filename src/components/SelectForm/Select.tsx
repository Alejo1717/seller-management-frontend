import React from 'react';
import Icon from '@mdi/react';
import { Col, Row, Select, Typography } from 'antd';
import { mdiChevronDown, mdiAsterisk } from '@mdi/js';

export interface Props {
    name: string;
    label?: string;
    placeholder?: string;
    value: any;
    dataItems: any[];
    itemValue: string;
    itemTitle: string;
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

const SelectCostum = (props: Props) => {
    const onchangeUser = (e: any) => {     
        props.onChange(e)
    };

    const onFocus = () => {
        if (props.onFocus) {
            props.onFocus(true)
        }
    };
    const onBlur = () => {
        if (props.onBlur) {
            props.onBlur(!(props.value === ''))
        }
    };

    return (
        <Col className='form-antd-style' style={{ flex: props.size }}>
            {
                props.label &&
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
            <Row className={props.error ? 'select-error' : 'select'} >
                <Select
                    value={props.value}
                    defaultValue={props.defaultValue}
                    onChange={onchangeUser}
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                    defaultActiveFirstOption={false}
                    disabled={props.disabled ? props.disabled : false}
                    style={{ width: '100%' }}
                    suffixIcon={
                        <span className='icon-arrow-content'>
                            <Icon path={mdiChevronDown} className='icon-arrow' />
                        </span>
                    }
                >
                    {
                        <>
                            <>
                                {props.placeholder &&
                                    < Select.Option key={`'item-select000'`} selected disabled value={''}
                                    
                                    >
                                        <span className='select-placeholder'>{props.placeholder}</span>                                        
                                    </Select.Option>
                                }
                            </>
                            <>
                                {props.dataItems.map((item: any, index: number) => {
                                    return (
                                        <Select.Option key={`'item-select'${index}`} value={item[props.itemValue]}>
                                            {item[props.itemTitle]}
                                        </Select.Option>
                                    )
                                })}
                            </>

                        </>}

                </Select>
            </Row>
            <Row align='top' className='error-content'>
                    {
                        props.error
                            ?
                            <Typography.Text className='error' >
                                {props.errorText}
                            </Typography.Text>
                            : null
                    }
                </Row>
        </Col >
    )
}

export default SelectCostum;