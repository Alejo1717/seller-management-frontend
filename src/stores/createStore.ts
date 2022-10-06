import create from 'zustand';
import { InitRoutesTabs } from '../models/routestabs.data';

const routesTabsStore = create(set => ({
  routesTabs: InitRoutesTabs,
  deliveryTab: false,
  setRoutesTabs: () => set((state: any) => ({ routesTabs: state.routesTabs }))
}));



export const useStore = {
  routesTabsStore,
}
