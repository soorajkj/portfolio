"use client";

import * as React from "react";
import Toast, { ToastActionElement } from "@/components/core/toast";

interface ToastProps {
  title: string;
  description?: string;
  action?: ToastActionElement;
}

interface ToasterContextType {
  toasts: ToastProps[];
  toast: (_payload: ToastProps) => void;
}

interface ToasterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ToasterContext = React.createContext<ToasterContextType | undefined>(
  undefined
);

export default function Toaster(props: ToasterProps) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const handleAddToast = React.useCallback((toast: Omit<ToastProps, "id">) => {
    const id = Date.now().toString();
    setToasts((current) => [...current, { id, ...toast }]);
  }, []);

  const handleDispatch = React.useCallback(
    (payload: ToastProps) => handleAddToast({ ...payload }),
    [handleAddToast]
  );

  return (
    <ToasterContext.Provider
      value={{ toasts, toast: handleDispatch }}
      {...props}
    >
      {props.children}
      <Toast.ToastProvider duration={5000}>
        <ToastList toasts={toasts} />
        <Toast.ToastViewport />
      </Toast.ToastProvider>
    </ToasterContext.Provider>
  );
}

export const useToast = () => {
  const context = React.useContext(ToasterContext);
  if (context) return context;
  throw new Error("useToast must be used within Toasts");
};

const ToastList = ({ toasts }: { toasts: ToastProps[] }) => {
  return Array.from(toasts).map((toast, i) => {
    const { title, description, action, ...rest } = toast;

    return (
      <Toast.ToastRoot key={i} {...rest}>
        <Toast.ToastTitle>{title}</Toast.ToastTitle>
        {description && (
          <Toast.ToastDescription>{description}</Toast.ToastDescription>
        )}
        <div className="static">{action}</div>
        <Toast.ToastClose />
      </Toast.ToastRoot>
    );
  });
};
