import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer, Td, Skeleton,
    Tag, TagLabel,
} from '@chakra-ui/react'
import Pagination from "./Pagination";
import {emptyArrayOfLength} from "../utils/util";
import useMnemonicCodes from "../hooks/useMnemonicCodes";
import Link from "next/link";
import {CheckIcon, CloseIcon, ChevronRightIcon} from '@chakra-ui/icons'


export default function MnemonicCodeTable() {
    const {mnemonic_codes, isError, isLoading} = useMnemonicCodes()
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
                                        <Th>Mnemonic Code</Th>
                                        <Th>Valid?</Th>
                                        <Th>Detail</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {isLoading && arr.map((item) => {
                                        return (
                                            <Tr>
                                                <Td><Skeleton height='20px'/></Td>
                                                <Td><Skeleton height='20px'/></Td>
                                                <Td><Skeleton height='20px'/></Td>
                                                <Td><Skeleton height='20px'/></Td>
                                            </Tr>
                                            // <PrivateKeyTableRowSkeleton key={item}/>
                                        )
                                    })}
                                    {!isLoading && mnemonic_codes.map((item) => {
                                        return (
                                            <Tr>
                                                <Td>{item.number}</Td>
                                                <Td>
                                                    <div className=''>
                                                        {item && item.words && item.words.length > 0 && item.words.map((word) => (
                                                            <Tag>{word}</Tag>
                                                        ))}
                                                    </div>
                                                </Td>
                                                <Td>{item.valid ? (<CheckIcon/>) : (<CloseIcon/>)}</Td>
                                                <Td>{item.valid && (
                                                    <Link href={`/mnemoniccode/detail?mnemonic=${item.words}`}
                                                          className='cursor-pointer'>
                                                        <Tag
                                                            variant='solid' colorScheme='teal'
                                                            class='cursor-pointer'
                                                        >
                                                            <TagLabel>Detail</TagLabel>
                                                            <ChevronRightIcon/>
                                                        </Tag>
                                                    </Link>
                                                )}</Td>
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
