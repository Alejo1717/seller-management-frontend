import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Control, FieldErrorsImpl, useForm, UseFormSetValue } from 'react-hook-form';
import DatePickerCustom from '../../components/DatePickerForm';
import InputForm from '../../components/InputForm'
import SelectForm from '../../components/SelectForm';
import TextAreaForm from '../../components/TextAreaForm';
import TitlePage from '../../components/TitlePage'
import { Seller } from '../../models/column.data';

interface Props {
    action?: string;
    sellerSelected: any;
    sellerData: any;
    setSellerData: any;
    control: Control<any, any>;
    errors: Partial<FieldErrorsImpl<Seller>>;
    setValue: UseFormSetValue<Seller>;
}

const dniList = ['11111111', '12345678', '11222333'];

const SellerForm = (props: Props) => {
    // const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const optionsDocType = [
        { title: 'DNI', value: 'docType1' },
        { title: 'LE', value: 'docType2' },
    ];
    const optionsGender = [
        { title: 'F', value: 'gender1' },        
        { title: 'M', value: 'gender2' },       
        { title: 'Otro', value: 'gender3' },
    ];
    const optionsSellerType = [
        { title: 'Virtual..', value: 'sellerType1' },        
        { title: 'Presencial..', value: 'sellerType2' },
    ];

    const handleFormChange = (e: any) => {
        const {name, value} = e.target;        
        props.setSellerData({...props.sellerData, [name]: value});
    }
    const [showForm, setShowForm] = useState(false);
    
    useEffect( () => {
        if(props.sellerSelected) 
            props.setSellerData(props.sellerSelected);
    }, []);

    useEffect( () => {
        if(props.sellerData.docNum.length === 8) 
            setShowForm(true)
        else 
            setShowForm(false)
    }, [props.sellerData.docNum])

    // useEffect( () => {
    //     if(showForm) {
    //         if(dniList.includes(props.sellerData.docNum)) alert('USUARIO EXISTENTE')
    //         else setShowForm(true)  
    //     } 
    // }, [showForm])

    return (
        <Row style={{ width: '100%', marginTop: 48 }} >
            {props.action === 'create' && <TitlePage title='Alta de vendedor' /> }
            {props.action === 'edit' && <TitlePage title='Edición de vendedor' /> }
            {props.action === 'details' && <TitlePage title='Detalles de vendedor' /> }
            <div className="form-row"> 
                <SelectForm
                    key={'docType'}
                    name={'docType'}
                    label={'Tipo de documento'}
                    required={true}
                    placeholder={"Seleccionar"}
                    value={props.sellerData.docType}
                    defaultValue={props.sellerSelected && props.sellerSelected.docType}
                    dataItems={optionsDocType}
                    itemTitle={'title'}
                    itemValue={'value'}
                    onChange={(e: any) => props.setSellerData({ ...props.sellerData, docType: e })}
                    error={props.errors.docType}
                    errorText={props.errors.docType?.message}
                    control={props.control}
                    disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                />
                <InputForm
                    key={'docNum'}
                    name={'docNum'}
                    label={'Nro de documento'}
                    required={true}
                    placeholder={"Completar"}
                    value={props.sellerData.docNum}
                    defaultValue={props.sellerSelected && props.sellerSelected.docNum}
                    onChange={handleFormChange}
                    error={props.errors.docNum}
                    errorText={props.errors.docNum?.message}
                    control={props.control}
                    disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                />
            </div>
            { showForm && <>
                <div className="form-row">
                    <InputForm
                        key={'fName'}
                        name={'fName'}
                        label={'Nombre'}
                        required={true}
                        placeholder={"Completar"}
                        value={props.sellerData.fName}
                        defaultValue={props.sellerSelected && props.sellerSelected.fName}
                        onChange={handleFormChange}
                        error={props.errors.fName}
                        errorText={props.errors.fName?.message}
                        control={props.control}
                        disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                    />
                    <InputForm
                        key={'lName'}
                        name={'lName'}
                        label={'Apellido'}
                        required={true}
                        placeholder={"Completar"}
                        value={props.sellerData.lName}
                        defaultValue={props.sellerSelected && props.sellerSelected.lName}
                        onChange={handleFormChange}
                        error={props.errors.lName}
                        errorText={props.errors.lName?.message}
                        control={props.control}
                        disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                    />
                </div>
                <div className="form-row">
                    <SelectForm
                        key={'gender'}
                        name={'gender'}
                        label={'Género'}
                        required={true}
                        placeholder={props.sellerData ? props.sellerData.gender : "Seleccionar"}
                        value={props.sellerData.gender}
                        defaultValue={props.sellerSelected && props.sellerSelected.gender}
                        dataItems={optionsGender}
                        itemTitle={'title'}
                        itemValue={'value'}
                        onChange={(e: any) => props.setSellerData({ ...props.sellerData, gender: e })}
                        error={props.errors.gender}
                        errorText={props.errors.gender?.message}
                        control={props.control}
                        disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                    />
                    <InputForm
                        key={'cellphone'}
                        name={'cellphone'}
                        label={'Celular'}
                        required={true}
                        placeholder={"Completar"}
                        value={props.sellerData.cellphone}
                        defaultValue={props.sellerSelected && props.sellerSelected.cellphone}
                        onChange={handleFormChange}
                        error={props.errors.cellphone}
                        errorText={props.errors.cellphone?.message}
                        control={props.control}
                        disabled={ props.action === 'details' ? true : false }
                    />
                </div>
                <div className="form-row" style={{alignItems: 'baseline'}}>
                    <InputForm
                        key={'email'}
                        name={'email'}
                        label={'Email'}
                        required={true}
                        placeholder={"Completar"}
                        value={props.sellerData.email}
                        defaultValue={props.sellerSelected && props.sellerSelected.email}
                        onChange={handleFormChange}
                        error={props.errors.email}
                        errorText={props.errors.email?.message}
                        control={props.control}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                    <TextAreaForm
                        key={'notes'}
                        name={'notes'}
                        label={'Observaciones'}
                        placeholder={'Completar'}
                        required={false}
                        value={props.sellerData.notes}
                        onChange={handleFormChange}
                        control={props.control}
                        error={props.errors.notes}
                        errorText={props.errors.notes?.message}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                </div>
                <div className="form-row">
                    <SelectForm
                        key={'sellerType'}
                        name={'sellerType'}
                        label={'Tipo de vendedor'}
                        required={true}
                        placeholder={"Seleccionar"}
                        value={props.sellerData.sellerType}
                        defaultValue={props.sellerSelected && props.sellerSelected.sellerType}
                        dataItems={optionsSellerType}
                        itemTitle={'title'}
                        itemValue={'value'}
                        onChange={(e: any) => props.setSellerData({ ...props.sellerData, sellerType: e })}
                        error={props.errors.sellerType}
                        errorText={props.errors.sellerType?.message}
                        control={props.control}
                        disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                    />
                    <InputForm
                        key={'pos'}
                        name={'pos'}
                        label={'P.O.S.'}
                        required={true}
                        placeholder={"Completar"}
                        value={props.sellerData.pos}
                        defaultValue={props.sellerSelected && props.sellerSelected.pos}
                        onChange={handleFormChange}
                        error={props.errors.pos}
                        errorText={props.errors.pos?.message}
                        control={props.control}
                        disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                    />
                </div>
                <div className="form-row">  
                    <DatePickerCustom 
                        name={'activeSince'}
                        label={'Fecha de Alta'}
                        value={props.sellerData.activeSince}
                        onChange={(e: any) => props.setSellerData({ ...props.sellerData, activeSince: e })}
                        required={true}
                        error={props.errors.activeSince}
                        errorText={props.errors.activeSince?.message}
                        control={props.control}
                        disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                        size={1}
                    />
                    
                    { !(props.action === 'create' || props.action === 'edit') ?
                        <DatePickerCustom 
                            name={'activeUntil'}
                            label={'Fecha de baja'}
                            value={props.sellerData.activeUntil}
                            onChange={(e: any) => props.setSellerData({ ...props.sellerData, activeUntil: e })}
                            required={true}
                            error={props.errors.activeUntil}
                            errorText={props.errors.activeUntil?.message}
                            control={props.control}
                            disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                            size={1}
                        />
                        : <div style={{flex: '1'}}></div>
                    }
                </div>
                <div className="form-row" style={{alignItems: 'baseline'}}>
                    { !(props.action === 'create' || props.action === 'edit') &&
                        <TextAreaForm 
                            key={'finishedWorkingReason'}
                            name={'finishedWorkingReason'}
                            label={'Motivo'}
                            placeholder={'Completar'}
                            required={true}
                            value={props.sellerData.finishedWorkingReason}
                            onChange={handleFormChange}
                            control={props.control}
                            error={props.errors.finishedWorkingReason}
                            errorText={props.errors.finishedWorkingReason?.message}
                            disabled={ props.action === 'details' || props.action === 'edit' ? true : false }
                            size={1}
                        />
                    }
                    <InputForm
                        key={'creditLimit'}
                        name={'creditLimit'}
                        label={'Límite de crédito'}
                        required={true}
                        placeholder={"Completar"}
                        value={props.sellerData.creditLimit}
                        defaultValue={props.sellerSelected && props.sellerSelected.creditLimit}
                        onChange={handleFormChange}
                        error={props.errors.creditLimit}
                        errorText={props.errors.creditLimit?.message}
                        control={props.control}
                        disabled={ props.action === 'details' ? true : false }
                        size={1}
                    />
                    { (props.action === 'create' || props.action === 'edit') && <div style={{flex: '1'}}></div> }
                </div>
            </>}
        </Row>
    )
}

export default SellerForm
