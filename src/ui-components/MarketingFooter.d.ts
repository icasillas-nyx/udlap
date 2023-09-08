/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    "Suscr\u00EDbete a nuestro newsletter"?: PrimitiveOverrideProps<TextProps>;
    "No mandamos spam. Te lo prometemos."?: PrimitiveOverrideProps<TextProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Divider39413816?: PrimitiveOverrideProps<DividerProps>;
    "Frame 40529766988"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    Poductos?: PrimitiveOverrideProps<TextProps>;
    Librerias?: PrimitiveOverrideProps<TextProps>;
    CLI?: PrimitiveOverrideProps<TextProps>;
    Nube?: PrimitiveOverrideProps<TextProps>;
    Hosting?: PrimitiveOverrideProps<TextProps>;
    "Frame 404"?: PrimitiveOverrideProps<FlexProps>;
    Recursos?: PrimitiveOverrideProps<TextProps>;
    Docs?: PrimitiveOverrideProps<TextProps>;
    Aprende?: PrimitiveOverrideProps<TextProps>;
    Ejemplos?: PrimitiveOverrideProps<TextProps>;
    Changelog?: PrimitiveOverrideProps<TextProps>;
    "Frame 40539413972"?: PrimitiveOverrideProps<FlexProps>;
    "Compa\u00F1ia"?: PrimitiveOverrideProps<TextProps>;
    "Acerca de nosotros"?: PrimitiveOverrideProps<TextProps>;
    Contacto?: PrimitiveOverrideProps<TextProps>;
    Blog?: PrimitiveOverrideProps<TextProps>;
    Divider39413869?: PrimitiveOverrideProps<DividerProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "nyx_logotipo_color 1"?: PrimitiveOverrideProps<ImageProps>;
    "\u00A9 2023 Nyx Technology. Todos los derechos reservados."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
