import React from 'react';
import SellerForm from './SellerForm';
import { useForm } from 'react-hook-form';
import TitlePage from '../../components/TitlePage';
import TableForm from '../../components/TableForm';
import { columnsSubagente, Seller, Subagente } from '../../models/column.data';
import { StyPrimaryButton, StySecondaryButton } from '../../components/Button/button.style';

interface Props {
    subagent: Subagente[] | undefined;
    onCancel: () => void;
    sellerSelected: Seller | null | undefined;
    action?: string;
}

const SellerActions = (props: Props) => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<Seller>();

    const defaultSellerData = {
        fName: '',
        lName: '',
        docType: '',
        docNum: '',
        gender: '',
        cellphone: '',
        email: '',
        notes: '',
        sellerType: '',
        pos: '',
        activeSince: '',
        activeUntil: '',
        finishedWorkingReason: '',
        creditLimit: '',
    }
    const [sellerData, setSellerData] = React.useState(defaultSellerData);

    const handlePrint = (handleSubmit(async (dataForm: any) => {
        // console.log('DATAFORM', dataForm);
    }));

    return (
        <div>
            <div style={{ width: '100%', marginTop: 48 }} >
                <TitlePage title='Subagente' />
                <TableForm
                    size='small'
                    columns={columnsSubagente}
                    dataSource={props.subagent ? props.subagent : []}
                />

            </div>

            <SellerForm
                sellerSelected={props.sellerSelected}
                action={props.action}
                sellerData={sellerData}
                setSellerData={setSellerData}
                control={control}
                errors={errors}
                setValue={setValue}
            />

            <div className="button-container">
                <StySecondaryButton onClick={props.onCancel}>Cancelar</StySecondaryButton>
                {props.action !== 'details' && <StyPrimaryButton onClick={handlePrint}>Guardar</StyPrimaryButton>}
            </div>
        </div>
    )
}

export default SellerActions;
