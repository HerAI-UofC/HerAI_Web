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
export declare type CandidateUpdateFormInputValues = {
    firstname?: string;
    lastname?: string;
    message?: string;
    number?: string;
    email?: string;
};
export declare type CandidateUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    number?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateUpdateFormOverridesProps = {
    CandidateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateUpdateFormProps = React.PropsWithChildren<{
    overrides?: CandidateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    candidate?: any;
    onSubmit?: (fields: CandidateUpdateFormInputValues) => CandidateUpdateFormInputValues;
    onSuccess?: (fields: CandidateUpdateFormInputValues) => void;
    onError?: (fields: CandidateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CandidateUpdateFormInputValues) => CandidateUpdateFormInputValues;
    onValidate?: CandidateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateUpdateForm(props: CandidateUpdateFormProps): React.ReactElement;
