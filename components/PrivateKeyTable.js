import React from "react";
import useKeyPairs from "../hooks/useKeyPairs";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react'
import PrivateKeyTableRow from "./PrivateKeyTableRow";
import Pagination from "./Pagination";
import PrivateKeyTableRowSkeleton from "./PrivateKeyTableRowSkeleton";
import {emptyArrayOfLength} from "../utils/util";


export default function PrivateKeyTable() {
    const {keyPairs, isLoading, isError} = useKeyPairs();
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
                                        <Th>Number</Th>
                                        <Th>Private Key1</Th>
                                        <Th>Private Key2</Th>
                                        <Th>Address1</Th>
                                        <Th>Address2</Th>
                                        <Th>Address3</Th>
                                        <Th>Address4</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {isLoading && arr.map((item) => {
                                        return (
                                            <PrivateKeyTableRowSkeleton key={item}/>
                                        )
                                    })}
                                    {!isLoading && keyPairs.map((item) => {
                                        return (
                                            <PrivateKeyTableRow key={item.number} keyPair={item}/>
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
