import { ReactNode } from "react";

export interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}

export interface formProps {
    childern: ReactNode;
    action: (formData: FormData) => void;
    className: string;
    onSubmit?: () => void;
}