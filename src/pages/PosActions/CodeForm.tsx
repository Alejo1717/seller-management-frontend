import React from 'react';
import { icons } from '../../assets';
import { useForm } from 'react-hook-form';
import { Col, Row, Typography } from 'antd';
import InputForm from '../../components/InputForm';
import ModalForm from '../../components/ModalForm';
import TitlePage from '../../components/TitlePage';
import TextAreaForm from '../../components/TextAreaForm';
import { SearchCodeData } from '../../models/seller.pos.model';
import { StyPrimaryButton } from '../../components/Button/button.style';
import DatePickerCustom from '../../components/DatePickerForm/DatePicker';

interface Props {
    action: string;
    userForm: string;
    setUserForm: React.Dispatch<React.SetStateAction<string>>;
}

const oldCodes = ['123', '456'];
const currentCodes = ['111', '222'];

const CodeForm = (props: Props) => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<SearchCodeData>({ mode: 'onChange' });

    const [codeInput, setcodeInput] = React.useState('');
    const [currentUserModal, setCurrentUserModal] = React.useState(false);
    const [oldUserModal, setOldUserModal] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);

    const handleReUseData = () => {
        setShowForm(true);
        setOldUserModal(false)
        // fetchData()
    }

    React.useEffect(() => {
        if (oldCodes.includes(codeInput)) {
            setCurrentUserModal(true);
        } else if (currentCodes.includes(codeInput)) {
            setOldUserModal(true);
        } else if (codeInput.length === 3) {
            setShowForm(true);
        }
        else {
            setShowForm(false);
        }
    }, [codeInput])

    return (
        <div style={{ marginTop: 28 }}>
            {props.action === 'create' && <TitlePage title='Alta de punto de venta' />}
            {props.action === 'details' && <TitlePage title='Detalles de punto de venta' />}
            {props.action === 'edit' && <TitlePage title='Edición de punto de venta' />}

            <div className="form-row">
                <InputForm
                    key={'entity'}
                    name={'entity'}
                    label={'Entidad'}
                    control={control}
                    size={1}
                    disabled={true}
                />
                <InputForm
                    key={'code'}
                    name={'code'}
                    label={'Código'}
                    value={codeInput}
                    onChange={(e: any) => setcodeInput(e.target.value)}
                    control={control}
                    size={1}
                    placeholder={'Ingrese el código para buscar disponibilidad'}
                    disabled={props.action === 'details' || props.action === 'edit' ? true : false}
                />
            </div>

            {(showForm || (props.action !== 'create' || props.userForm.length > 0)) && <>
                {/* FORM */}
                <div className="form-row">
                    <InputForm
                        key={'name'}
                        name={'name'}
                        label={'Nombre'}
                        required={true}
                        placeholder={"Completar"}
                        // value={props.sellerData.fName}
                        // defaultValue={props.sellerSelected && props.sellerSelected.fName}
                        // onChange={handleFormChange}
                        // error={props.errors.fName}
                        // errorText={props.errors.fName?.message}
                        // control={props.control}
                        disabled={props.action === 'details' || props.action === 'edit' ? true : false}
                    />
                    <InputForm
                        key={'creditLimit'}
                        name={'creditLimit'}
                        label={'Límite de crédito'}
                        required={true}
                        placeholder={"Completar"}
                        // value={props.sellerData.fName}
                        // defaultValue={props.sellerSelected && props.sellerSelected.fName}
                        // onChange={handleFormChange}
                        // error={props.errors.fName}
                        // errorText={props.errors.fName?.message}
                        // control={props.control}
                        disabled={props.action === 'details' ? true : false}
                    />
                </div>
                <div className="form-row">
                    <InputForm
                        key={'phoneNum'}
                        name={'phoneNum'}
                        label={'Teléfono'}
                        required={true}
                        placeholder={"Completar"}
                        // value={props.sellerData.fName}
                        // defaultValue={props.sellerSelected && props.sellerSelected.fName}
                        // onChange={handleFormChange}
                        // error={props.errors.fName}
                        // errorText={props.errors.fName?.message}
                        // control={props.control}
                        disabled={props.action === 'details' ? true : false}
                    />
                    <InputForm
                        key={'cpa'}
                        name={'cpa'}
                        label={'CPA'}
                        required={true}
                        placeholder={"Completar"}
                        // value={props.sellerData.fName}
                        // defaultValue={props.sellerSelected && props.sellerSelected.fName}
                        // onChange={handleFormChange}
                        // error={props.errors.fName}
                        // errorText={props.errors.fName?.message}
                        // control={props.control}
                        disabled={props.action === 'details' || props.action === 'edit' ? true : false}
                    />
                </div>

                {/* ADRESS FORM */}

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
                        disabled={props.action === 'details' ? true : false}
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
                        disabled={props.action === 'details' ? true : false}
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
                        disabled={props.action === 'details' ? true : false}
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
                        disabled={props.action === 'details' ? true : false}
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
                            disabled={props.action === 'details' ? true : false}
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
                            disabled={props.action === 'details' ? true : false}
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
                            disabled={props.action === 'details' ? true : false}
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
                            disabled={props.action === 'details' ? true : false}
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
                        disabled={props.action === 'details' ? true : false}
                        control={control}
                    />
                </div>

                {/* STATUS FORM */}

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
                        disabled={props.action === 'details' || props.action === 'edit' ? true : false}
                        size={1}
                    />
                    {!(props.action === 'create' || props.action === 'edit') ?
                        <DatePickerCustom
                            name={'activeUntil'}
                            label={'Fecha de baja'}
                            value={''}
                            onChange={() => { }}
                            required={true}
                            // error={props.errors.activeUntil}
                            // errorText={props.errors.activeUntil?.message}
                            // control={props.control}
                            disabled={props.action === 'details' || props.action === 'edit' ? true : false}
                            size={1}
                        />
                        : <div style={{ flex: '1' }}></div>
                    }
                </div>
                {!(props.action === 'create' || props.action === 'edit') &&
                    <div className="form-row">
                        <TextAreaForm
                            key={'finishedWorkingReason'}
                            name={'finishedWorkingReason'}
                            label={'Motivo'}
                            placeholder={'Completar'}
                            required={true}
                            value={''}
                            onChange={() => { }}
                            control={control}
                            // error={props.errors.finishedWorkingReason}
                            // errorText={props.errors.finishedWorkingReason?.message}
                            disabled={props.action === 'details' || props.action === 'edit' ? true : false}
                            size={1}
                        />
                    </div>
                }
            </>}
            <ModalForm isModalOpen={currentUserModal} onClose={() => setCurrentUserModal(false)}>
                <div style={{ paddingLeft: 15, paddingTop: 15 }}>
                    <Row>
                        <Col style={{ width: '12%' }}>
                            <Row align='middle' style={{ height: '100%' }}>
                                <img src={icons.AlertIcon} alt='icon/svg' style={{ width: 30, height: 30 }} />
                            </Row>

                        </Col>
                        <Col style={{ width: '88%' }}>
                            <Typography.Text className='modal-text'>
                                El código {codeInput} ya está asociado a un punto de venta activo.
                            </Typography.Text>
                        </Col>
                    </Row>
                    <Row justify='space-evenly' style={{ marginTop: 47 }}>
                        <StyPrimaryButton onClick={() => setCurrentUserModal(false)}>
                            Usar otro código
                        </StyPrimaryButton>
                    </Row>
                </div>
            </ModalForm>

            <ModalForm isModalOpen={oldUserModal} onClose={() => setOldUserModal(false)}>
                <div style={{ paddingLeft: 15, paddingTop: 15 }}>
                    <Row>
                        <Col style={{ width: '12%' }}>
                            <Row align='middle' style={{ height: '100%' }}>
                                <img src={icons.AlertIcon} alt='icon/svg' style={{ width: 30, height: 30 }} />
                            </Row>
                        </Col>
                        <Col style={{ width: '88%' }}>
                            <Typography.Text className='modal-text'>
                                El código {codeInput} está asociado a un punto de venta dado de baja. ¿Querés reactivarlo?
                            </Typography.Text>
                        </Col>
                    </Row>
                    <Row justify='space-evenly' style={{ marginTop: 47 }}>
                        <StyPrimaryButton onClick={() => setOldUserModal(false)}>
                            Usar otro código
                        </StyPrimaryButton>
                        <StyPrimaryButton onClick={handleReUseData}>
                            Reutilizar datos
                        </StyPrimaryButton>
                    </Row>
                </div>
            </ModalForm>
        </div>
    )
}

export default CodeForm