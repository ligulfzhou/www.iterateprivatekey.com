import React from "react";
import {
    Tr,
    Td,
    Box,
    Tag,
    Tooltip, Spinner
} from '@chakra-ui/react'
import {shorterString} from "../utils/util";
import useAddressBalance from "../hooks/useAddressBalance";

const CustomCard = React.forwardRef(({children, ...rest}, ref) => (
    <Box p='1'>
        <Tag ref={ref} {...rest}>
            {children}
        </Tag>
    </Box>
))




export default function PrivateKeyTableRow({keyPair}) {
    const item = keyPair
    let addresses = [item.addresses.address, item.addresses.address_uncompressed, item.addresses.address_segwit, item.addresses.p2sh_segwit]
    const {balance, address_script_dict, isError, isLoading} = useAddressBalance(addresses)

    const has_balance = (balance, address_script_dict, key)=> {
        if (balance && address_script_dict && address_script_dict[item.addresses[key]] && balance[address_script_dict[item.addresses[key]]] && balance[address_script_dict[item.addresses[key]]].balance > 0) {
            return true
        }
        return false
    }

    const has_transactions = (balance, address_script_dict, key) => {
        if (balance && address_script_dict && address_script_dict[item.addresses[key]] && balance[address_script_dict[item.addresses[key]]] && balance[address_script_dict[item.addresses[key]]].transactions && balance[address_script_dict[item.addresses[key]]].transactions.length > 0) {
            return true
        }
        return false
    }
    return (
        <Tr>
            <Td>{item.number}</Td>
            <Td>
                <Tooltip label={item.private_keys.compressed}>
                    <CustomCard>{shorterString(item.private_keys.compressed)}</CustomCard>
                </Tooltip>
            </Td>
            <Td>
                <Tooltip label={item.private_keys.uncompressed}>
                    <CustomCard>{shorterString(item.private_keys.uncompressed)}</CustomCard>
                </Tooltip>
            </Td>

            <Td>
                <Tooltip label={item.addresses.address}>
                    <CustomCard>{shorterString(item.addresses.address)}</CustomCard>
                </Tooltip>
                {isLoading ? (
                    <Spinner size='xs'/>
                ) : (
                    <>
                        {has_transactions(balance, address_script_dict, 'address') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='green'
                        >has transaction</Tag>}
                        {has_balance(balance, address_script_dict, 'address') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='red'
                        >has balance</Tag>}
                    </>
                )}
            </Td>
            <Td>
                <Tooltip label={item.addresses.address_uncompressed}>
                    <CustomCard>{shorterString(item.addresses.address_uncompressed)}</CustomCard>
                </Tooltip>
                {isLoading ? (
                    <Spinner size='xs'/>
                ) : (
                    <>
                        {has_transactions(balance, address_script_dict, 'address_uncompressed') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='green'
                        >has transaction</Tag>}
                        {has_balance(balance, address_script_dict, 'address_uncompressed') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='red'
                        >has balance</Tag>}
                    </>
                )}
            </Td>
            <Td>
                <Tooltip label={item.addresses.address_segwit}>
                    <CustomCard>{shorterString(item.addresses.address_segwit)}</CustomCard>
                </Tooltip>
                {isLoading ? (
                    <Spinner size='xs'/>
                ) : (
                    <>
                        {has_transactions(balance, address_script_dict, 'address_segwit') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='green'
                        >has transaction</Tag>}
                        {has_balance(balance, address_script_dict, 'address_segwit') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='red'
                        >has balance</Tag>}
                    </>
                )}
            </Td>
            <Td>
                <Tooltip label={item.addresses.p2sh_segwit}>
                    <CustomCard>{shorterString(item.addresses.p2sh_segwit)}</CustomCard>
                </Tooltip>
                {isLoading ? (
                    <Spinner size='xs'/>
                ) : (
                    <>
                        {has_transactions(balance, address_script_dict, 'p2sh_segwit') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='green'
                        >has transaction</Tag>}
                        {has_balance(balance, address_script_dict, 'p2sh_segwit') && <Tag
                            borderRadius='full'
                            variant='solid'
                            colorScheme='red'
                        >has balance</Tag>}
                    </>
                )}
            </Td>
        </Tr>
    )
}
