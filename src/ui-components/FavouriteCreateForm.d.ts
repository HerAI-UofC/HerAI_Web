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
export declare type FavouriteCreateFormInputValues = {
    userId?: string;
};
export declare type FavouriteCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavouriteCreateFormOverridesProps = {
    FavouriteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FavouriteCreateFormProps = React.PropsWithChildren<{
    overrides?: FavouriteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FavouriteCreateFormInputValues) => FavouriteCreateFormInputValues;
    onSuccess?: (fields: FavouriteCreateFormInputValues) => void;
    onError?: (fields: FavouriteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavouriteCreateFormInputValues) => FavouriteCreateFormInputValues;
    onValidate?: FavouriteCreateFormValidationValues;
} & React.CSSProperties>;
export default function FavouriteCreateForm(props: FavouriteCreateFormProps): React.ReactElement;
