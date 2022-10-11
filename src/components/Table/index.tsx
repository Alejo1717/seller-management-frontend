import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { onTableActionRow } from '../../models/column.data'

interface Props {
    size?: 'small' | 'middle' | 'large',
    columns: ColumnsType<any>,
    dataSource: any[],
    onAction?: any,
    onSelectRow?: any,
}

const TableForm = (props: Props) => {
    const onAction = () => {
        const dataRow = onTableActionRow('Aqui');
        console.log(dataRow);
        
    }
    return (
        <div className='antd-table'>
            <Table
                size={props.size}
                columns={props.columns}
                dataSource={props.dataSource}
                pagination={false}
                showSorterTooltip={false}
                rowClassName={(record, index) => (index % 2 !== 0) ? 'color-row-per' : 'color-row-odd'}
                onRow={props.onSelectRow ? (record, index) => {
                    return {
                        onClick: event => {
                            props.onSelectRow(record, index);
                        }
                    }
                } : () => {
                    return {}
                }}
            />
        </div>
    )
}

export default TableForm