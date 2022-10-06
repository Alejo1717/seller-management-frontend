import React from 'react';
import 'moment/locale/es';
import Icon from '@mdi/react';
import locale from 'antd/es/date-picker/locale/es_ES';
import { mdiAsterisk, mdiCalendar} from '@mdi/js';
import { Col, DatePicker, DatePickerProps, Row,  Typography } from 'antd';

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
    defaultValue?: any;
}

const dateFormat = 'DD/MM/YYYY';

const DatePickerCostum = (props: Props) => {

    const onChangeDate: DatePickerProps['onChange'] = (date) => {
        props.onChange(date?.toJSON())
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
            }
            <Row className={props.error ? 'date-picker-error' : 'date-picker'} >
                <DatePicker
                    onChange={onChangeDate}
                    placeholder={props.placeholder}
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                    disabled={props.disabled ? props.disabled : false}
                    format={dateFormat}
                    style={{ width: '100%' }}
                    suffixIcon={
                        <span className='icon-arrow-content'>
                            <Icon path={mdiCalendar} className='icon-arrow' />
                        </span>
                    }
                    locale={locale}
                />
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

export default DatePickerCostum;
