import React from 'react';

export type CheckoutStepProps = {
    name: string;
    isActive?: boolean;
    StepComponent: React.ReactNode;
    handleEdit?: () => void;
};
