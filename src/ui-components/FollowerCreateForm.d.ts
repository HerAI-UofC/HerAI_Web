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
export declare type FollowerCreateFormInputValues = {
    userId?: string;
};
export declare type FollowerCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowerCreateFormOverridesProps = {
    FollowerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FollowerCreateFormProps = React.PropsWithChildren<{
    overrides?: FollowerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FollowerCreateFormInputValues) => FollowerCreateFormInputValues;
    onSuccess?: (fields: FollowerCreateFormInputValues) => void;
    onError?: (fields: FollowerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowerCreateFormInputValues) => FollowerCreateFormInputValues;
    onValidate?: FollowerCreateFormValidationValues;
} & React.CSSProperties>;
export default function FollowerCreateForm(props: FollowerCreateFormProps): React.ReactElement;
