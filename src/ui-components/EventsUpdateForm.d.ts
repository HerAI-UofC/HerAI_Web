/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Events } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventsUpdateFormInputValues = {
    title?: string;
    location?: string;
    date?: string;
    isUpcoming?: boolean;
    summary?: string;
    description?: string;
    videoDescription?: string;
    pdfDescription?: string;
    presenters?: string;
};
export declare type EventsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    isUpcoming?: ValidationFunction<boolean>;
    summary?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    videoDescription?: ValidationFunction<string>;
    pdfDescription?: ValidationFunction<string>;
    presenters?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventsUpdateFormOverridesProps = {
    EventsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    isUpcoming?: PrimitiveOverrideProps<SwitchFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    videoDescription?: PrimitiveOverrideProps<TextFieldProps>;
    pdfDescription?: PrimitiveOverrideProps<TextFieldProps>;
    presenters?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    events?: Events;
    onSubmit?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onSuccess?: (fields: EventsUpdateFormInputValues) => void;
    onError?: (fields: EventsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventsUpdateFormInputValues) => EventsUpdateFormInputValues;
    onValidate?: EventsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventsUpdateForm(props: EventsUpdateFormProps): React.ReactElement;
