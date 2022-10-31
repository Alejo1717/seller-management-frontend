import { SelePoint, Seller, Subagente } from "../models/column.data";

export const dataAgente = {
    nombre: 'Alejandro Garcia',
    code: '554454455'
}

export const dataSubagente: Subagente[] = [
    {
        code: '2344566',
        name: 'Compañia 1',
        type: '564'
    },
    {
        code: '987654',
        name: 'Compañia 2',
        type: '124'
    },
    {
        code: '456789',
        name: 'Compañia 3',
        type: '456'
    },
    {
        code: '258741',
        name: 'Compañia 4',
        type: '741'
    }
];

export const dataVendedores: Seller[] = [
    {
        subagent: '2344566',
        id: '1',
        fName: 'Lucas',
        lName: 'Pratto',
        docType: 'docType1',
        docNum: '38111222',
        gender: 'gender1',
        cellphone: '1122334455',
        email: 'mail@mail.com',
        notes: '',
        sellerType: 'sellerType1',
        pos: '123',
        activeSince: '01/01/2022',
        activeUntil: '',
        finishedWorkingReason: '',
        creditLimit: '200',
    },
    {
        subagent: '2344566',
        id: '2',
        fName: 'Lautaro',
        lName: 'Gianetti',
        docType: 'docType1',
        docNum: '38648429',
        gender: 'gender1',
        cellphone: '1122334455',
        email: 'mail@mail.com',
        notes: '',
        sellerType: 'sellerType1',
        pos: '123',
        activeSince: '01/06/2020',
        activeUntil: '',
        finishedWorkingReason: '',
        creditLimit: '800',
    },
    {
        subagent: '2344566',
        id: '3',
        fName: 'Lucas',
        lName: 'Janson',
        docType: 'docType1',
        docNum: '38675223',
        gender: 'gender1',
        cellphone: '1122334455',
        email: 'mail@mail.com',
        notes: '',
        sellerType: 'sellerType1',
        pos: '123',
        activeSince: '01/03/2022',
        activeUntil: '',
        finishedWorkingReason: '',
        creditLimit: '300',
    },
    {
        subagent: '2344566',
        id: '4',
        fName: 'Thiago',
        lName: 'Almada',
        docType: 'docType1',
        docNum: '41987654',
        gender: 'gender1',
        cellphone: '1122334455',
        email: 'mail@mail.com',
        notes: '',
        sellerType: 'sellerType1',
        pos: '123',
        activeSince: '01/01/2022',
        activeUntil: '06/06/2021',
        finishedWorkingReason: 'Renuncia en buenos términos por un mejor empleo',
        creditLimit: '200',
    },
];

export const dataPuntoDeVenta: SelePoint[] = [
    {
        subagent: '2344566',
        code: '1',
        name: 'Punto de venta 1',
        location: 'Buenos Aires',
        pos: '123',
        activeSince: '01/01/2022',
        activeUntil: '',
        creditLimit: '200',
    },
    {
        subagent: '2344566',
        code: '2',
        name: 'Punto de venta 2',
        location: 'Buenos Aires',
        pos: '123',
        activeSince: '01/01/2022',
        activeUntil: '',
        creditLimit: '200',
    },
    {
        subagent: '2344566',
        code: '3',
        name: 'Punto de venta 3',
        location: 'Buenos Aires',
        pos: '123',
        activeSince: '01/01/2022',
        activeUntil: '',
        creditLimit: '200',
    },
    {
        subagent: '2344566',
        code: '4',
        name: 'Punto de venta 4',
        location: 'Buenos Aires',
        pos: '123',
        activeSince: '01/01/2022',
        activeUntil: '',
        creditLimit: '200',
    },
];
