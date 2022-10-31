import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Icon from '@mdi/react';
import HeaderAct from '../Header';
import SiderBar from '../SiderBar';
import useStore from '../../stores';
import { mdiAccountCircle, mdiLogoutVariant } from "@mdi/js";
import { RouteTab, StepStatus } from '../../models/routetabs.model';
import { useNavigate } from 'react-router-dom';

interface Props {
	children: ReactNode
}

export const routesLower = [
	{
		path: "/profile",
		name: "profile",
		icon: <Icon path={mdiAccountCircle} className='item-icon' />,
		tooltipName: "Perfil"
	},
	{
		path: "/logout",
		name: "logout",
		icon: <Icon path={mdiLogoutVariant} className='item-icon' />,
		tooltipName: "Logout"
	}
];

const LayoutAct = (props: Props) => {
	const navigate = useNavigate();
	const routesTabs = useStore.routesTabsStore((state: any) => state.routesTabs);

	const onChangeItemTab = (routeTab: RouteTab, index: number) => {
		routesTabs.map((rt: RouteTab, index: number) => {
			if (rt.name === routeTab.name) {
				routesTabs[index].showOn = StepStatus.ACTIVE;
			} else {
				routesTabs[index].showOn = StepStatus.DONE;
			}
		})
		useStore.routesTabsStore.setState(routesTabs);
		navigate(routeTab.path);
	}

	return (
		<div key={'layout-act'} className='layout-act'>
			<Layout>
				<Layout.Sider width={'auto'}>
				<SiderBar routesTabs={routesTabs} routesLower={routesLower} onChangeItemTab={onChangeItemTab} />
				</Layout.Sider>
				<Layout>
					<Layout.Header>
						<HeaderAct/>
					</Layout.Header>
					<Layout.Content className='main-content'>
						{props.children}
					</Layout.Content>
				</Layout>
			</Layout>
		</div>
	)
}

export default LayoutAct