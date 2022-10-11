import React from 'react';
import { Row } from 'antd';
import { useForm } from 'react-hook-form';
import DatePickerForm from '../../components/DatePickerForm';
import { StyPrimaryButton } from '../../components/Button/button.style';

interface Props { }
type FormData = {
    dateBirth: string;
    age: string;
    country: string;
    email: string;
}
const SellersPage = (props: Props) => {
    const [date, setDate] = React.useState<string>('');
    const [country, setCountry] = React.useState<string>('');
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const onHandleSubmit = handleSubmit(async (data: any) => {
        console.log('Data', data);
        console.log('State', country, ' ', date)

    });

    return (
        <Row style={{ width: '100%' }} >
            <div className="form-row">
                <DatePickerForm
                    key={'dateBirth'}
                    name={'dateBirth'}
                    control={control}
                    label={'Tipo de documento'}
                    required={true}
                    placeholder={"Seleccionar"}
                    value={date}
                    onChange={setDate}
                    error={errors.dateBirth}
                    errorText={errors.dateBirth?.message}
                    size={2}
                />
            </div>
            <span>{date}</span>
            <StyPrimaryButton onClick={() => onHandleSubmit()}>
                Continuar
            </StyPrimaryButton>
        </Row>
    )
}

export default SellersPage;
