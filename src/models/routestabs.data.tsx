import { mdiAccountMultiple, mdiMapMarker,  } from "@mdi/js";
import Icon from "@mdi/react";

export const InitRoutesTabs = [
	{
		path: "/agentes",
		name: "Agentes",
		icon: <Icon path={mdiAccountMultiple } className='item-icon' />,
		tooltipName: "Agentes",
		showOn:"active"
	},
	{
		path: "/local",
		name: "Local",
		icon: <Icon path={mdiMapMarker } className='item-icon' />,
		tooltipName: "Local",
		showOn: "done"
	},

];