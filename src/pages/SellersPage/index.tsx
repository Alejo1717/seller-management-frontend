import React from 'react';
import { Checkbox } from 'antd';
import SellerActions from '../SellerActions';
import InputForm from '../../components/InputForm';
import TitlePage from '../../components/TitlePage';
import TableForm from '../../components/TableForm';
import DeleteModal from '../PosActions/DeleteModal';
import { StyPrimaryButton } from '../../components/Button/button.style';
import { dataAgente, dataSubagente, dataVendedores } from '../../datamock/dataMock';
import { ACTIONS_TABLE, columnsSellers, columnsSubagente, Seller, Subagente } from '../../models/column.data';
import { getEntities } from '../../services/entities/entities.service';

interface Props { }

const SellersPage = (props: Props) => {
    const [showSellerActions, setShowSellerActions] = React.useState<boolean>(false);
    const [showSellerTable, setShowSellerTable] = React.useState<boolean>(false);
    const [sellerSelected, setSellerSelected] = React.useState<Seller | null>();
    const [actionSelected, setActionSelected] = React.useState<string>('');
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [showOldSellers, setShowOldSellers] = React.useState(false);
    const [subagent, setSubagent] = React.useState<Subagente[]>([]);

    const currentSellers = dataVendedores.filter(seller => !seller.activeUntil);

    const onAction = (subagent: Subagente) => {
        setSubagent([subagent]);
        setShowSellerTable(true);
    }

    const onCancel = () => {
        setShowSellerActions(false);
        setSellerSelected(null);
    }

    const onActions = (action: string, seller: Seller) => {
        switch (action) {
            case ACTIONS_TABLE.DELETE:
                break;
            case ACTIONS_TABLE.DETAILS:
                break;
            case ACTIONS_TABLE.EDIT:
                break;
            default:
                break;
        }

        if (action === 'delete') {
            setSellerSelected(seller);
            setShowModal(true);
            return;
        }

        setActionSelected(action);
        setSellerSelected(seller);
        setShowSellerActions(true);
    }

    const handleNewSellerBtn = (action: string) => {
        setActionSelected(action);
        setShowSellerActions(true);
    }

    const handleDelete = () => { }

    React.useEffect(() => { 
      const res = getEntities(55, false);
      console.log('ENTITY', res)
    }, [])
    return (
        <>
            <TitlePage title='Agente' />
            <div style={{ width: 420 }}>
                <InputForm
                    name={'agent'}
                    defaultValue={dataAgente.code}
                    disabled
                />
            </div>
            {showSellerActions
                ?
                <SellerActions subagent={subagent} sellerSelected={sellerSelected} onCancel={onCancel} action={actionSelected} />
                :
                <>
                    <div style={{ width: '100%', marginTop: 48 }} >
                        <TitlePage title='Subagentes' />
                        <TableForm
                            size='small'
                            columns={columnsSubagente}
                            dataSource={dataSubagente}
                            onAction={(value: any) => onAction(value)}
                        />
                    </div>

                    {showSellerTable &&
                        <div style={{ width: '100%', marginTop: 48 }}>
                            <TitlePage title='Vendedores' />
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', textAlign: 'center' }}>
                                    <Checkbox onChange={() => setShowOldSellers(!showOldSellers)}>
                                        <p style={{ fontWeight: '600', fontStyle: 'italic' }}>Incluir vendedores dados de baja</p>
                                    </Checkbox>
                                </div>
                                <div className="button-wrapper">
                                    <StyPrimaryButton onClick={() => handleNewSellerBtn('create')}>
                                        Alta vendedor
                                    </StyPrimaryButton>
                                </div>
                            </div>
                            <TableForm
                                size='small'
                                columns={columnsSellers}
                                dataSource={showOldSellers ? dataVendedores : currentSellers}
                                onActions={onActions}
                            />
                            <DeleteModal
                                onOpen={showModal}
                                setShowModal={setShowModal}
                                onDelete={handleDelete}
                                sellerSelected={sellerSelected}
                            />
                        </div>
                    }
                </>
            }
        </>
    )
}

export default SellersPage;
