import React from 'react';
import { Tooltip } from 'antd';

interface Props {
    title: string;
    children: React.ReactNode;
}

const ToolTipForm = (props: Props) => {
    return (
        <Tooltip overlayClassName='tooltip-antd' title={props.title}>
            {props.children}
        </Tooltip>
    )
}

export default ToolTipForm;