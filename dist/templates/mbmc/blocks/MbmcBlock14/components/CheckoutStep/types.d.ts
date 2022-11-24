import React from 'react';
export declare type CheckoutStepProps = {
    name: string;
    isActive?: boolean;
    isCompleted?: boolean;
    StepComponent: React.ReactNode;
    handleEdit?: () => void;
};
