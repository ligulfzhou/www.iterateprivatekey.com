import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer, Td, Skeleton,
} from '@chakra-ui/react'
import Pagination from "./Pagination";
import {emptyArrayOfLength} from "../utils/util";


export default function DerivationPathKeyPairTable({keyPairs=[], isLoading=true, isError=false}) {
    const arr = emptyArrayOfLength(32)

    return (
        <>
            <div>
                <>
                    <Pagination/>
                    <div className='mx-auto mx-12'>
                        <TableContainer>
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Path</Th>
                                        <Th>Address</Th>
                                        <Th>PrivateKey</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {isLoading && arr.map((item, idx) => {
                                        return (
                                            <Tr>
                                                <Td key={`${idx}-1`}><Skeleton height='20px'/></Td>
                                                <Td key={`${idx}-2`}><Skeleton height='20px'/></Td>
                                                <Td key={`${idx}-3`}><Skeleton height='20px'/></Td>
                                            </Tr>
                                        )
                                    })}
                                    {!isLoading && keyPairs.map((item, idx) => {
                                        return (
                                            <Tr>
                                                <Td key={`k-${idx}-1`}><Skeleton height='20px'/></Td>
                                                <Td key={`k-${idx}-1`}><Skeleton height='20px'/></Td>
                                                <Td key={`k-${idx}-1`}><Skeleton height='20px'/></Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>

                    </div>

                    <Pagination/>
                </>
            </div>
        </>
    );
}
