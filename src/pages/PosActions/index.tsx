import React from 'react';
import CodeForm from './CodeForm';
import TableForm from '../../components/TableForm';
import TitlePage from '../../components/TitlePage';
import { columnsSubagenteSimple, Seller, Subagente } from '../../models/column.data';
import { StyPrimaryButton, StySecondaryButton } from '../../components/Button/button.style';

interface Props {
    subagents: Subagente[];
    posSelected: Seller | null | undefined;
    action: string;
    onCancel: () => void;
}

const PosActions = (props: Props) => {
    const [userForm, setUserForm] = React.useState('');
    
    return (
        <>
            <div style={{ width: '100%', marginTop: 28 }}  >
                <TitlePage title='Subagente' />
                <TableForm
                    size='small'
                    columns={columnsSubagenteSimple}
                    dataSource={props.subagents}
                />
            </div>

            <CodeForm 
                action={props.action} 
                userForm={userForm}
                setUserForm={setUserForm}
            />

            <div className="button-wrapper" style={{marginTop: userForm.length > 0 ? 'inherit' : '12rem'}}>
                <StySecondaryButton onClick={props.onCancel}>
                    Cancelar
                </StySecondaryButton>
                { (props.action !== 'details' || userForm.length > 0) &&
                    <StyPrimaryButton onClick={props.onCancel}> Guardar </StyPrimaryButton>
                }
            </div>
        </>
    )
}

export default PosActions;
