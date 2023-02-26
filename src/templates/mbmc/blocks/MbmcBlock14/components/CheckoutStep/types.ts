import React from "react";

export type CheckoutStepProps = {
  name: string;
  isActive?: boolean;
  isCompleted?: boolean;
  StepComponent: React.ReactNode;
  handleEdit?: () => void;
};
