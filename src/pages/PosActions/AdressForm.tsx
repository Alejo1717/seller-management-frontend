import React from 'react';
import { Row } from 'antd';
import { useForm } from 'react-hook-form';
import InputForm from '../../components/InputForm';
import TitlePage from '../../components/TitlePage';
import TextAreaForm from '../../components/TextAreaForm';

interface Props {
    action: string;
}

/*
 *   POSIBLE MICRO FRONT-END 
 */
const AdressForm = (props: Props) => {
    const { control } = useForm<FormData>();

    return (
        <Row style={{ width: '100%', marginTop: 48 }} >
            <TitlePage title='Datos del domicilio' />
            <div className="form-row">
                <InputForm
                    name={'provincia'}
                    label={'Provincia'}
                    placeholder={'Completar'}
                    required={true}
                    // value={adressFormData.provincia}
                    // onChange={handleAdressFormDataChange}
                    error={false}
                    errorText={'Error'}
                    disabled={ props.action === 'details' ? true : false }
                    size={1}
                />
                <InputForm
                    name={'localidad'}
                    label={'Localidad'}
                    placeholder={'Completar'}
                    required={true}
                    // value={adressFormData.localidad}
                    // onChange={handleAdressFormDataChange}
                    error={false}
                    errorText={'Error'}
                    disabled={ props.action === 'details' ? true : false }
                    size={1}
                />
                <InputForm
                    name={'barrio'}
                    label={'Barrio'}
                    placeholder={'Completar'}
                    required={false}
                    // value={adressFormData.barrio}
                    // onChange={handleAdressFormDataChange}
                    error={false}
                    errorText={'Error'}
                    disabled={ props.action === 'details' ? true : false }
                    size={1}
                />
                <InputForm
                    name={'cp'}
                    label={'Código Postal'}
                    placeholder={'Completar'}
                    required={true}
                    // value={adressFormData.cp}
                    // onChange={handleAdressFormDataChange}
                    error={false}
                    errorText={'Error'}
                    disabled={ props.action === 'details' ? true : false }
                    size={1}
                />
            </div>
            <div className="form-row">
                <Row className="form-row">
                    <InputForm
                        name={'nombreCalle'}
                        label={'Calle'}
                        placeholder={'Completar'}
                        required={true}
                        // value={adressFormData.nombreCalle}
                        // onChange={handleAdressFormDataChange}
                        error={false}
                        errorText={'Error'}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                </Row>
                <Row className="form-row">
                    <InputForm
                        name={'calleAltura'}
                        label={'Número'}
                        placeholder={'Completar'}
                        required={true}
                        // value={adressFormData.calleAltura}
                        // onChange={handleAdressFormDataChange}
                        error={false}
                        errorText={'Error'}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                    <InputForm
                        name={'piso'}
                        label={'Piso'}
                        placeholder={'Completar'}
                        required={false}
                        // value={adressFormData.piso}
                        // onChange={handleAdressFormDataChange}
                        error={false}
                        errorText={'Error'}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                    <InputForm
                        name={'depto'}
                        label={'Departamento'}
                        placeholder={'Completar'}
                        required={false}
                        // value={adressFormData.depto}
                        // onChange={handleAdressFormDataChange}
                        error={false}
                        errorText={'Error'}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                </Row>
            </div>
            <div className="form-row">
                <TextAreaForm 
                    name={'observaciones'}
                    label={'Observaciones'}
                    placeholder={'Completar'}
                    required={false}
                    value={''}
                    // onChange={handleAdressFormDataChange}
                    error={false}
                    errorText={'Error'}
                    size={1}
                    disabled={ props.action === 'details' ? true : false }
                    control={control}
                />
            </div>
        </Row> 
    )
}

export default AdressForm;
