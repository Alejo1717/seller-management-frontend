import { Row } from 'antd';
import { RouteTab, StepStatus } from '../../models/routetabs.model';

interface Props {
    routeTab: RouteTab;
    navigate: any;
    onClick?: any
}

const ItemTab = (props: Props) => {
    return (
        <div className='siderbar-act'>
            {
                <div
                    className={`item-link-container ${props.routeTab.showOn === StepStatus.ACTIVE
                        ? 'item-link-active'
                        : 'item-link-done'
                        }`}
                >
                    {props.routeTab.icon}
                </div>
            }
        </div>
    )
}

export default ItemTab;