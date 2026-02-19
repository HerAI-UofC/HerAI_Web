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
export declare type FollowerUpdateFormInputValues = {
    userId?: string;
};
export declare type FollowerUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FollowerUpdateFormOverridesProps = {
    FollowerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FollowerUpdateFormProps = React.PropsWithChildren<{
    overrides?: FollowerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    follower?: any;
    onSubmit?: (fields: FollowerUpdateFormInputValues) => FollowerUpdateFormInputValues;
    onSuccess?: (fields: FollowerUpdateFormInputValues) => void;
    onError?: (fields: FollowerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FollowerUpdateFormInputValues) => FollowerUpdateFormInputValues;
    onValidate?: FollowerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FollowerUpdateForm(props: FollowerUpdateFormProps): React.ReactElement;
