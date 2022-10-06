import { Row } from 'antd';
import { RouteTab, StepStatus } from '../../models/routetabs.model';

interface Props {
    routeTab: RouteTab;
    navigate: any;
}

const ItemTab = (props: Props) => {
    return (
        <div className='siderbar-act'>
            {
                <Row
                    justify='center'
                    align='middle'
                    className={`item-link-container ${props.routeTab.showOn === StepStatus.ACTIVE
                        ? 'item-link-active'
                        : 'item-link-done'
                    }`}
                >
                    {props.routeTab.icon}
                </Row>
            }
        </div>
    )
}

export default ItemTab;