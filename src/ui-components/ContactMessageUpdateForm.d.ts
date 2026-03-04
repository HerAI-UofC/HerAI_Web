/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactMessageUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type ContactMessageUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactMessageUpdateFormOverridesProps = {
    ContactMessageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactMessageUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactMessageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactMessage?: any;
    onSubmit?: (fields: ContactMessageUpdateFormInputValues) => ContactMessageUpdateFormInputValues;
    onSuccess?: (fields: ContactMessageUpdateFormInputValues) => void;
    onError?: (fields: ContactMessageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactMessageUpdateFormInputValues) => ContactMessageUpdateFormInputValues;
    onValidate?: ContactMessageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactMessageUpdateForm(props: ContactMessageUpdateFormProps): React.ReactElement;
