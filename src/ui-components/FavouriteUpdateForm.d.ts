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
export declare type FavouriteUpdateFormInputValues = {
    userId?: string;
};
export declare type FavouriteUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavouriteUpdateFormOverridesProps = {
    FavouriteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FavouriteUpdateFormProps = React.PropsWithChildren<{
    overrides?: FavouriteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    favourite?: any;
    onSubmit?: (fields: FavouriteUpdateFormInputValues) => FavouriteUpdateFormInputValues;
    onSuccess?: (fields: FavouriteUpdateFormInputValues) => void;
    onError?: (fields: FavouriteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavouriteUpdateFormInputValues) => FavouriteUpdateFormInputValues;
    onValidate?: FavouriteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FavouriteUpdateForm(props: FavouriteUpdateFormProps): React.ReactElement;
