import React from 'react';
import InputForm from '../../components/InputForm';
import Table from '../../components/Table';
import TitlePage from '../../components/TitlePage/intedx';
import { dataAgente, dataSubagente, dataVendedores } from '../../datamock/dataMock';
import { columnsSellers, columnsSubagente, Seller, Subagente } from '../../models/column.data';
import SellersPage from '../Sellers';

interface Props { }

const Home = (props: Props) => {
    const [showSellerTable, setShowSellerTable] = React.useState<boolean>(false);
    const [showSellerPage, setShowSellerPage] = React.useState<boolean>(false);
    const [sellerSelected, setSellerSelected] = React.useState<Seller>();
    const [sellers, setSellers] = React.useState<Seller[]>();
   
    const onAction = (subagent: Subagente) => {
        setShowSellerTable(true)
        setSellers(dataVendedores)
    }
    const onSelectRow = (sellers: Seller, index: number) => {
        setShowSellerPage(true)
        console.log('SELLERS and INDEX ROW', sellers, index);

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
                                onSelectRow={onSelectRow}
                            />
                        </div>
                    }
                </div>}
        </div>
    )
}

export default Home