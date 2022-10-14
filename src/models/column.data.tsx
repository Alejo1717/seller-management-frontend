import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Row } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";

export interface Subagente {
    code: string;
    name: string;
    type: string;
}

export enum ACTIONS_TABLE {
    EDIT = "edit",
    DELETE = "delete",
    DETAILS = "details"
}

export const columnsSubagente: ColumnsType<Subagente> = [
    {
        title: 'Código',
        dataIndex: 'code',
        sorter: (a: any, b: any) => a.code - b.code,
        align: 'center',
        width: '20%',
    },
    {
        title: 'Nombre Comercial',
        dataIndex: 'name',
        sorter: (a: any, b: any) => a.name - b.name,
        align: 'center',
        width: '20%',
    },
    {
        title: 'Tipo',
        dataIndex: 'type',
        sorter: (a: any, b: any) => a.type - b.type,
        align: 'center',
        width: '20%',
    },
    {
        title: '',
        key: 'action',        
        width: '40%',
    },
];

export interface Seller {
    id: string;
    firstName: string;
    lastName: string;
    type: string;
    createDate: string;
    credit: number;
    deleteDate: string;
    obs: string;
}

export const columnsSellers: ColumnsType<Seller> = [
    {
        title: 'id',
        dataIndex: 'id',
        sorter: (a: any, b: any) => a.id - b.id,
        align: 'center',
        width: '10%',
    },
    {
        title: 'Nombres',
        dataIndex: 'firstName',
        sorter: (a: any, b: any) => a.firstName - b.firstName,
        align: 'center',
        width: '13%',
    },
    {
        title: 'Apellidos',
        dataIndex: 'lastName',
        sorter: (a: any, b: any) => a.lastName - b.lastName,
        align: 'center',
        width: '13%',
    },
    {
        title: 'Tipo Vendedor',
        dataIndex: 'type',
        sorter: (a: any, b: any) => a.type - b.type,
        align: 'center',
        width: '13%',
    },
    {
        title: 'Fecha Alta',
        dataIndex: 'createDate',
        render: createDate => <span>{(createDate !== '') ? moment(createDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.createDate - b.createDate,
        align: 'center',
        width: '13%',
    },
    
    {
        title: 'Fecha Baja',
        dataIndex: 'deleteDate',
        render: deleteDate => <span>{(deleteDate !== '') ? moment(deleteDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.deleteDate - b.deleteDate,
        align: 'center',
        width: '13%',
    },
    {
        title: 'Credito',
        dataIndex: 'credit',
        sorter: (a: any, b: any) => a.credit - b.credit,
        align: 'center',
        width: '13%',
    },
    {
        title: 'Acciones',
        key: 'actions',
        align: 'center',
        width: '11%',
    },
]