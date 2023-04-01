import { ReactNode } from 'react';

export type AlertContextProviderProps = {
  children: ReactNode
}

export type AlertProps = {
  title: string;
  message?: string;
  duration?: number;
  status?: 'success' | 'warning' | 'error' | 'info'
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left' | 'top-center' | 'bottom-center'
}

export type AlertContextProps = {
  success: (value: AlertProps) => void;
  error: (value: AlertProps) => void;
  info: (value: AlertProps) => void;
  warning: (value: AlertProps) => void;
}