/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreScheduleFields
// ====================================================

export interface CoreScheduleFields_scheduleItems {
    __typename: "ScheduleItem";
    id: string;
    day: string;
    start_time: any | null;
    end_time: any | null;
    created_at: any;
    updated_at: any;
}

export interface CoreScheduleFields {
    __typename: "Schedule";
    id: string;
    name: string | null;
    created_at: any;
    updated_at: any;
    scheduleItems: (CoreScheduleFields_scheduleItems | null)[];
}
