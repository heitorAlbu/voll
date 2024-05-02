import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TituloProps } from '../interfaces/tituloProps'

export function Titulo({ children, ...rest }: TituloProps) {
    return (
        <Text fontSize={"2xl"}
            fontWeight={"bold"}
            color="gray.500"
            textAlign="center"
            mt={5}
            {...rest} >
            Faça login em sua conta
        </Text>
    )
}
