import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

interface Props {
    size?: 'small' | 'middle' | 'large',
    columns:ColumnsType<any>,
dataSource: any[],
}

const TableForm = (props: Props) => {
    return (
        <div className='antd-table'>
            <Table
                size={props.size}
                columns={props.columns}
                dataSource={props.dataSource}
                pagination={false}
                showSorterTooltip={false}
                rowClassName={(record, index) => (index % 2 !== 0) ? 'color-row-per' : 'color-row-odd'}
            />
        </div>
    )
}

export default TableForm