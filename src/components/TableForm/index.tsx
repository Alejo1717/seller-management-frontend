import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowRight, mdiCancel, mdiDelete, mdiEye, mdiPencil } from '@mdi/js';
import Table, { ColumnsType } from 'antd/lib/table';
import { ACTIONS_TABLE } from '../../models/column.data';
import ToolTipForm from '../ToolTipForm';

interface Props {
    size?: 'small' | 'middle' | 'large',
    columns: ColumnsType<any>,
    dataSource: any[],
    onAction?: any,
    onActions?: any,
    onSelectRow?: any,
}

const TableForm = (props: Props) => {
    const [selectedRow, setSelectedRow] = React.useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = React.useState<number>();
    const onSelectedRow = (record: any) => {
        const index = props.dataSource.indexOf(record)
        setSelectedRow(true);
        setSelectedIndex(index);
    }
    return (
        <div className='antd-table'>
            

            {/* <Table
                size={props.size}
                dataSource={props.dataSource}
                pagination={false}
                showSorterTooltip={false}
                rowClassName={(record, index) => selectedRow ? (index === selectedIndex) ? 'color-row-select' :
                    (index % 2 !== 0) ? 'color-row-per' : 'color-row-odd' : (index % 2 !== 0) ? 'color-row-per' : 'color-row-odd'}
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
                <div>
                    {
                        props.columns.map((col: any, index: number) => {
                            return (
                                <div key={`${'rowTable' + index}`}>
                                    {
                                        col.key !== 'action' && col.key !== 'actions' &&
                                        <Table.Column {...col} key={`${'colTable' + index}`} />
                                    }
                                    {
                                        col.key === 'action' &&
                                        <Table.Column
                                            {...col}
                                            key={`${'colActionTable' + index}`}
                                            render={(_: any, record: any) => {
                                                return (
                                                    <div>
                                                        <Row justify='end' key={`${'action' + __dirname}`}>
                                                            <div
                                                                onClick={() => { props.onAction(record); onSelectedRow(record) }}
                                                                style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                            >
                                                                <Icon path={mdiArrowRight} />
                                                            </div>
                                                        </Row>
                                                    </div>
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
                                                    <div>
                                                        <Row justify='space-evenly' key={`${'actions' + __dirname}`}>
                                                            <ToolTipForm title='Dar de baja'>
                                                                <div
                                                                    onClick={() => props.onActions(ACTIONS_TABLE.DELETE, record)}
                                                                    style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                                >
                                                                    <Icon path={mdiCancel} />
                                                                </div>
                                                            </ToolTipForm>
                                                            <ToolTipForm title='Detalles'>
                                                                <div
                                                                    onClick={() => props.onActions(ACTIONS_TABLE.DETAILS, record)}
                                                                    style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                                >
                                                                    <Icon path={mdiEye} />
                                                                </div>
                                                            </ToolTipForm>
                                                            <ToolTipForm title='Editar'>
                                                                <div
                                                                    onClick={() => props.onActions(ACTIONS_TABLE.EDIT, record)}
                                                                    style={{ width: 20, height: 20, cursor: 'pointer' }}
                                                                >
                                                                    <Icon path={mdiPencil} />
                                                                </div>
                                                            </ToolTipForm>
                                                        </Row>
                                                    </div>
                                                )
                                            }}
                                        />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </Table>  */}
        </div>
    )
}

export default TableForm