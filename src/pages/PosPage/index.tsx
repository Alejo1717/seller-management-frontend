import React from 'react';
import PosActions from '../PosActions';
import TableForm from '../../components/TableForm';
import TitlePage from '../../components/TitlePage';
import InputForm from '../../components/InputForm';
import DeleteModal from '../PosActions/DeleteModal'; 
import { StyPrimaryButton } from '../../components/Button/button.style';
import { dataAgente, dataPuntoDeVenta, dataSubagente } from '../../datamock/dataMock';
import { ACTIONS_TABLE, columnsSalePoint,  columnsSubagente, Seller, Subagente } from '../../models/column.data';

const PosPage = () => {
  const [showPosTable, setShowPosTable] = React.useState<boolean>(false);
  const [posSelected, setPosSelected] = React.useState<Seller | null>();
  const [showPosActions, setShowPosActions] = React.useState<boolean>(false);
  const [actionSelected, setActionSelected] = React.useState<string>('');
  const [subagents, setSubagents] = React.useState<Subagente[]>([]);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false)

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
            setPosSelected(seller);
            setShowDeleteModal(true);
            return;
        }

        setActionSelected(action);
        setPosSelected(seller);
        setShowPosActions(true);
    }

    const handleNewSellerBtn = (action: string) => {
        setActionSelected(action);
        setShowPosActions(true);
    }

    const onAction = (subagent: Subagente) => {
        setShowPosTable(true);
    }

    const onCancel = () => setShowPosActions(false);


    React.useEffect(() => { setSubagents(dataSubagente) }, [])

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
            
            { showPosActions 
                ?
                <PosActions 
                    subagents={subagents} 
                    posSelected={posSelected} 
                    onCancel={onCancel} 
                    action={actionSelected}
                /> 
                :
                <>
                    <div style={{ width: '100%', marginTop: 48 }}>
                        <TitlePage title='Subagentes' />
                        <TableForm
                            size='small'
                            columns={columnsSubagente}
                            dataSource={subagents}
                            onAction={(value: any) => onAction(value)}
                        />
                    </div>

                    { showPosTable &&
                        <div style={{ width: '100%', marginTop: 48 }}>
                            <TitlePage title='Puntos de venta' />
                            <div className="button-wrapper">
                                <StyPrimaryButton onClick={() => handleNewSellerBtn('create')}>
                                    Alta Pos
                                </StyPrimaryButton>
                            </div>
                            <TableForm
                                size='small'
                                columns={columnsSalePoint}
                                dataSource={dataPuntoDeVenta}
                                onActions={onActions}
                            />
                        </div>
                    }
                </>
            }
            <DeleteModal 
                onOpen={showDeleteModal}
                setShowModal={setShowDeleteModal}
                onDelete={()=>{}}
                sellerSelected={undefined}
            />
        </> 
    )
}

export default PosPage;
