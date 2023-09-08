/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardCardContentsDefaultOverridesProps = {
    CardCardContentsDefault?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type CardCardContentsDefaultProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardCardContentsDefaultOverridesProps | undefined | null;
}>;
export default function CardCardContentsDefault(props: CardCardContentsDefaultProps): React.ReactElement;
