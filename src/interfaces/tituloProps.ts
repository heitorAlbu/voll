import { ITextProps, Text } from "native-base"
import { ReactNode } from "react"

export interface TituloProps extends ITextProps {
    children: ReactNode;
}