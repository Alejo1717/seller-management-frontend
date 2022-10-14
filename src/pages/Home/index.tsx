import { Modal } from 'antd';
import React from 'react';
import InputForm from '../../components/InputForm';
import Table from '../../components/Table';
import TitlePage from '../../components/TitlePage/intedx';
import { dataAgente, dataSubagente, dataVendedores } from '../../datamock/dataMock';
import { ACTIONS_TABLE, columnsSellers, columnsSubagente, Seller, Subagente } from '../../models/column.data';
import SellersPage from '../Sellers';

interface Props { }

const Home = (props: Props) => {
    const [showSellerTable, setShowSellerTable] = React.useState<boolean>(false);
    const [showSellerPage, setShowSellerPage] = React.useState<boolean>(false);
    const [sellerSelected, setSellerSelected] = React.useState<Seller>();
    const [sellers, setSellers] = React.useState<Seller[]>();
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const [actionSelected, setActionSelected] = React.useState<string>('')

    const onAction = (subagent: Subagente) => {
        setShowSellerTable(true)
        setSellers(dataVendedores)
    }
    const onSelectRow = (seller: Seller, index: number) => {
        setShowSellerPage(true)
        console.log('SELLERS and INDEX ROW', seller, index);

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
        console.log('ACTION and SELECT SELLER', action, seller);
        setActionSelected(action);
        setSellerSelected(seller);
        setIsModalOpen(true)
    }
    return (
        <div>
            <TitlePage title='Agentes' />
            <div style={{ width: 420 }}>
                <InputForm
                    name={'agent'}
                    defaultValue={dataAgente.code}
                    disabled
                />
            </div>
            {showSellerPage ?
                <SellersPage /> :
                <div style={{ width: '100%', marginTop: 48 }} >
                    <TitlePage title='Subagentes' />
                    <Table
                        size='small'
                        columns={columnsSubagente}
                        dataSource={dataSubagente}
                        onAction={(value: any) => onAction(value)}
                    />
                    {
                        showSellerTable &&
                        <div style={{ width: '100%', marginTop: 48 }} >
                            <TitlePage title='Vendedores' />
                            <Table
                                size='small'
                                columns={columnsSellers}
                                dataSource={dataVendedores}
                                onActions={onActions}
                            />
                        </div>
                    }
                </div>}
            <Modal open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
                <p>Acción Seleccionada: {actionSelected}</p>
                <p>Vendedo Seleccionado: {sellerSelected?.firstName + ' ' + sellerSelected?.lastName}</p>
            </Modal>
        </div>
    )
}

export default Home