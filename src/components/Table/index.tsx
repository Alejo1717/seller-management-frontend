import React from 'react';
import Icon from '@mdi/react';
import { Row, Table } from 'antd';
import { mdiArrowRight, mdiDelete, mdiEye, mdiPencil } from '@mdi/js';
import { ColumnsType } from 'antd/lib/table';
import { ACTIONS_TABLE } from '../../models/column.data';

interface Props {
    size?: 'small' | 'middle' | 'large',
    columns: ColumnsType<any>,
    dataSource: any[],
    onAction?: any,
    onActions?: any,
    onSelectRow?: any,
}

const TableForm = (props: Props) => {


    return (
        <div className='antd-table'>
            <Table
                size={props.size}
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
            >
                {
                    props.columns.map((col: any, index: number) => {
                        return (
                            <div key={`${'rowTable' + index}`}>
                                {
                                    col.key !== 'action' && col.key !== 'actions' &&
                                    <Table.Column
                                        {...col} key={`${'colTable' + index}`} />
                                }
                                {
                                    col.key === 'action' &&
                                    <Table.Column
                                        {...col}
                                        key={`${'colActionTable' + index}`}
                                        render={(_: any, record: any) => {
                                            return (
                                                <Row justify='end' key={`${'action' + __dirname}`}>
                                                    <div
                                                        onClick={() => props.onAction(record)}
                                                        style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                    >
                                                        <Icon
                                                            path={mdiArrowRight}
                                                        />
                                                    </div>
                                                </Row>
                                            )
                                        }}
                                    />
                                }
                                {
                                    col.key === 'actions' &&
                                    <Table.Column
                                        {...col}
                                        key={`${'colActionsTable' + index}`}
                                        render={(_: any, record: any) => {
                                            return (
                                                <Row justify='space-evenly' key={`${'actions' + __dirname}`}>
                                                    <div
                                                        onClick={() => props.onActions(ACTIONS_TABLE.DELETE, record)}
                                                        style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                    >
                                                        <Icon
                                                            path={mdiDelete}
                                                        />
                                                    </div>
                                                    <div
                                                        onClick={() => props.onActions(ACTIONS_TABLE.DETAILS, record)}
                                                        style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                    >
                                                        <Icon
                                                            path={mdiEye}
                                                        />
                                                    </div>
                                                    <div
                                                        onClick={() => props.onActions(ACTIONS_TABLE.EDIT, record)}
                                                        style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                    >
                                                        <Icon
                                                            path={mdiPencil}
                                                        />
                                                    </div>
                                                </Row>
                                            )
                                        }}
                                    />
                                }
                            </div>
                        )
                    })
                }

            </Table>
        </div>
    )
}

export default TableForm