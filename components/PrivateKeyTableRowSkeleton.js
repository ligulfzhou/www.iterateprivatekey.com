import React from "react";
import {
    Tr,
    Td,
} from '@chakra-ui/react'
import {Skeleton} from '@chakra-ui/react'

export default function PrivateKeyTableRowSkeleton() {
    return (
        <Tr>
            <Td><Skeleton height='20px'/></Td>
            <Td><Skeleton height='20px'/></Td>
            <Td><Skeleton height='20px'/></Td>
            <Td><Skeleton height='20px'/></Td>
            <Td><Skeleton height='20px'/></Td>
            <Td><Skeleton height='20px'/></Td>
            <Td><Skeleton height='20px'/></Td>
        </Tr>
    )
}
