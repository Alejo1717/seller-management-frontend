import { Table } from 'antd'
import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js';
import { useForm } from 'react-hook-form'
import { dataVendedores } from '../../datamock/dataMock';
import TitlePage from '../../components/TitlePage';
import InputForm from '../../components/InputForm';
import { StyLinkButton, StyPrimaryButton, StySecondaryButton } from '../../components/Button/button.style';
import { columnsSearchSellers, Seller } from '../../models/column.data';
import SelectForm from '../../components/SelectForm';

interface Props {}

const FindSellers = (props: Props) => {
    const { control,  reset } = useForm<FormData>();

    const defaultSearchData = { docType: '', docNum: '' }
    const [searchData, setSearchData] = useState(defaultSearchData);

    const optionsDocType = [
        { title: 'DNI', value: 'docType1' },
        { title: 'LE', value: 'docType2' },
    ];

    const [searchSellers, setSearchSellers] = useState<Seller[] | null>(null);

    const handleSearch = (e:any) => {
        e.preventDefault();
        const filteredSellers = dataVendedores.filter( (seller: Seller) => {            
            return seller.docNum === searchData.docNum && seller.docType === searchData.docType;         
        });
        
        setSearchSellers(filteredSellers);
    }

    const handleEmptyFilters = () => {
        reset();
        setSearchData(defaultSearchData);
        setSearchSellers(null);
    }

    return (
        <>
            <TitlePage title='Histórico de vendedores' />
            <form 
                onSubmit={handleSearch}
                style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '15px', width: '50%'}} 
            >
                <SelectForm
                    key={'docType'}
                    name={'docType'}
                    label={'Tipo de documento'}
                    placeholder={"Seleccionar"}
                    value={searchData.docType}
                    dataItems={optionsDocType}
                    itemTitle={'title'}
                    itemValue={'value'}
                    onChange={(e: any) => setSearchData({ ...searchData, docType: e })}
                    size={1}
                    control={control}
                />
                <InputForm
                    key={'docNum'}
                    name={'docNum'}
                    label={'Nro de documento'}
                    value={searchData.docNum}
                    onChange={(e:any) => setSearchData({...searchData, docNum: e.target.value})}
                    control={control}
                    size={1}
                />
                <StyPrimaryButton style={{marginTop: '18px'}}>
                    <Icon path={mdiMagnify} /> 
                    Buscar
                </StyPrimaryButton>
            </form>
            
            <div style={{ width: '100%', marginTop: 48 }} >
                <TitlePage title='Resultados' />
                <div className="button-wrapper">
                    <StyLinkButton onClick={handleEmptyFilters}>
                        Limpiar datos
                    </StyLinkButton>
                </div>
                <Table
                    size='small'
                    columns={columnsSearchSellers}
                    dataSource={searchSellers ? searchSellers : dataVendedores}
                    pagination={false}
                    showSorterTooltip={false}
                />
            </div>
        </>
    )
}

export default FindSellers;
