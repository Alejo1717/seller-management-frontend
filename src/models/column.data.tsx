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
        sorter: (a: any, b: any) => a.name.localeCompare(b.name),
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
export const columnsSubagenteSimple: ColumnsType<Subagente> = [
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
        sorter: (a: any, b: any) => a.name.localeCompare(b.name),
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
        width: '40%',
    },
];
export interface Seller {
    subagent: string;
    id: string;
    fName: string;
    lName: string;
    docType: string;
    docNum: string;
    gender: string;
    cellphone: string;
    email: string;
    notes?: string;
    sellerType: string;
    pos: string;
    activeSince: string;
    activeUntil?: string;
    finishedWorkingReason?: string;
    creditLimit: string;
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
        dataIndex: 'fName',
        sorter: (a: any, b: any) => a.fName.localeCompare(b.fName),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Apellidos',
        dataIndex: 'lName',
        sorter: (a: any, b: any) => a.lName.localeCompare(b.lName),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Tipo Vendedor',
        dataIndex: 'sellerType',
        sorter: (a: any, b: any) => a.sellerType.localeCompare(b.sellerType),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Fecha Alta',
        dataIndex: 'activeSince',
        render: createDate => <span>{(createDate !== '') ? moment(createDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.activeSince.localeCompare(b.activeSince),
        align: 'center',
        width: '13%',
    },

    {
        title: 'Fecha Baja',
        dataIndex: 'activeUntil',
        render: deleteDate => <span>{(deleteDate !== '') ? moment(deleteDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.activeUntil.localeCompare(b.activeUntil),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Credito',
        dataIndex: 'creditLimit',
        sorter: (a: any, b: any) => a.creditLimit - b.creditLimit,
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

export const columnsSearchSellers: ColumnsType<Seller> = [
    {
        title: 'ID entidad',
        dataIndex: 'id',
        sorter: (a: any, b: any) => a.id - b.id,
        align: 'center',
        width: '10%',
    },
    {
        title: 'Nombres',
        dataIndex: 'fName',
        sorter: (a: any, b: any) => a.fName.localeCompare(b.fName),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Apellidos',
        dataIndex: 'lName',
        sorter: (a: any, b: any) => a.lName.localeCompare(b.lName),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Fecha Alta',
        dataIndex: 'activeSince',
        render: createDate => <span>{(createDate !== '') ? moment(createDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.activeSince.localeCompare(b.activeSince),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Fecha Baja',
        dataIndex: 'activeUntil',
        render: deleteDate => <span>{(deleteDate !== '') ? moment(deleteDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.activeUntil.localeCompare(b.activeUntil),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Motivo',
        dataIndex: 'finishedWorkingReason',
        align: 'center',
        width: '13%',
    },
    {
        title: 'Límite de credito',
        dataIndex: 'creditLimit',
        sorter: (a: any, b: any) => a.creditLimit - b.creditLimit,
        align: 'center',
        width: '13%',
    },
]
export interface SelePoint {
    subagent:string;
    code: string;
    name: string;
    location: string;
    pos: string;
    activeSince: string;
    activeUntil: string;
    creditLimit: string;
}
export const columnsSalePoint: ColumnsType<SelePoint> = [
    {
        title: 'Código',
        dataIndex: 'code',
        sorter: (a: any, b: any) => a.code - b.code,
        align: 'center',
        width: '10%',
    },
    {
        title: 'Nombre/Descripción',
        dataIndex: 'name',
        sorter: (a: any, b: any) => a.name.localeCompare(b.name),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Ciudad',
        dataIndex: 'location',
        sorter: (a: any, b: any) => a.location.localeCompare(b.location),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Fecha Alta',
        dataIndex: 'activeSince',
        render: createDate => <span>{(createDate !== '') ? moment(createDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.activeSince.localeCompare(b.activeSince),
        align: 'center',
        width: '13%',
    },
    {
        title: 'Fecha Baja',
        dataIndex: 'activeUntil',
        render: deleteDate => <span>{(deleteDate !== '') ? moment(deleteDate).format('DD/MM/YYYY, HH:mm:ss') : ''}</span>,
        sorter: (a: any, b: any) => a.activeUntil.localeCompare(b.activeUntil),
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