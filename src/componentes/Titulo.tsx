import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TituloProps } from '../interfaces/tituloProps'

export function Titulo({ children }: TituloProps) {
    return (
        <Text fontSize={"2xl"}
            fontWeight={"bold"}
            color="gray.500"
            textAlign="center"
            mt={5} >
            Faça login em sua conta
        </Text>
    )
}
