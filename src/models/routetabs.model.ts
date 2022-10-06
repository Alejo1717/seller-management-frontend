import { ReactNode } from "react";

export enum StepStatus {
    ACTIVE = "active",
    DONE = "done",
    NO_ACTIVE = "no-active"
}

export interface RouteTab {
    path: string;
    name: string
    icon: ReactNode;
    tooltipName: string;
    showOn: string;
}

