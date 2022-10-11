import React from 'react';
import InputForm from '../../components/InputForm';
import Table from '../../components/Table';
import TitlePage from '../../components/TitlePage/intedx';
import { dataAgente, dataSubagente, dataVendedores } from '../../datamock/dataMock';
import { columnsSellers, columnsSubagente, Sellers, Subagente } from '../../models/column.data';

interface Props { }

const Home = (props: Props) => {
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
            <div style={{ width: '100%', height: 48 }} />
            <TitlePage title='Subagentes' />
            <Table
                size='small'
                columns={columnsSubagente}
                dataSource={dataSubagente}
            />
            <div style={{ width: '100%', height: 48 }} />
            <TitlePage title='Vendedores' />
            <Table
                size='small'
                columns={columnsSellers}
                dataSource={dataVendedores}
            />
        </div>
    )
}

export default Home