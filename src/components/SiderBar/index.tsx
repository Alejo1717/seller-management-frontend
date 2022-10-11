import * as React from 'react';
import ItemTab from './ItemTab';
import { Row, Tooltip } from 'antd';
import { images } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { RouteTab, StepStatus } from '../../models/routetabs.model';

interface Props {
    routesTabs: any[];
    routesLower: any[];
}

const SiderBar: React.FC<Props> = (props) => {
    const navigate = useNavigate();
    let filteredRoutes = props.routesTabs.filter((routeTab: any) => (routeTab.showOn === StepStatus.ACTIVE || routeTab.showOn === StepStatus.DONE))
    
    return (
        <header className='siderbar-act'>
            <div className='siderbar-page'>
                <div className='siderbar-container'>
                    <nav className='nav-container'>
                        <div>
                            <Row justify='center' align='middle' className='logo-link-container ' >
                                <img src={images.LogoClaro} className='item-icon' alt='logo/svg' style={{pointerEvents: 'none'}} />
                            </Row>
                            <div>
                                {
                                    filteredRoutes.map((routeTab: RouteTab, index: number) => (
                                        <Tooltip  placement="right" key={`item-tab${index}`} >
                                            <ItemTab                                                 
                                                routeTab={routeTab} 
                                                navigate={navigate}
                                            />
                                        </Tooltip>
                                    ))
                                }
                            </div> 
                        </div>
                        <div className='icon-lower-container'>
                            {
                                props.routesLower.map((routerTab: any, index: number) => (
                                    <Tooltip key={`'item-tooltip'${index}`} title={routerTab.tooltipName} placement="right">
                                        <Row justify='center' align='middle' className='item-link-container item-link' key={`'item-lower'${index}`}>
                                            {routerTab.icon}
                                        </Row>
                                    </Tooltip>
                                ))
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default SiderBar;