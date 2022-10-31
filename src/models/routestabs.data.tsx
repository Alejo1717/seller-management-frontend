import Icon from "@mdi/react";
import { mdiAccountMultiple, mdiAccountSearch, mdiFindReplace, mdiMapMarker, } from "@mdi/js";


export const InitRoutesTabs = [
	{
		path: "/",
		name: "Agentes",
		icon: <Icon path={mdiAccountMultiple} className='item-icon' />,
		tooltipName: "Agentes",
		showOn: "active"
	},
	{
		path: "/pos",
		name: "POS",
		icon: <Icon path={mdiMapMarker} className='item-icon' />,
		tooltipName: "POS",
		showOn: "done"
	},
	{
		path: "/find-sellers",
		name: "Consultar Vendedores",
		icon: <Icon path={mdiAccountSearch} className='item-icon' />,
		tooltipName: "Consultar Vendedores",
		showOn: "done"
	},

];