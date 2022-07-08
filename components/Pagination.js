import React, {useEffect, useState} from "react";

import {
    chakra,
    Text,
    Icon,
    Input,
    HStack,
    Flex,
} from "@chakra-ui/react";

import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useRouter} from "next/router";
import {isNullString} from "../utils/util";


export default function Pagination() {

    const router = useRouter()
    const {query} = router
    const {page: curPage} = query
    const [value, setValue] = useState();

    useEffect(()=> {
        if (!isNullString(curPage) && parseInt(curPage) > 0 && !isNullString(value)) {
            setValue(parseInt(curPage))
        }
    }, [curPage])

    const goToPage = (page)=> {
        let params = JSON.parse(JSON.stringify(router.query))
        params['page'] = page
        router.push({
            pathname: router.asPath.split("?")[0],
            query: params
        }, undefined, {
            shallow: true
        })
    }

    const goTo = () => {
        if (value && parseInt(value)>0) {
            goToPage(parseInt(value))
        }
    }

    const nextPage = () => {
        if (isNullString(curPage)) {
            goToPage(2)
        } else {
            goToPage(parseInt(curPage)+1)
        }

    }

    const prePage = () => {
        if (!isNullString(curPage) && parseInt(curPage)<=1) {
            return
        }
        goToPage(parseInt(curPage)-1)
    }
    const handleChange = (event) => setValue(event.target.value)

    const PagButton = (props) => {
        const activeStyle = {
            bg: "brand.600",
            _dark: {
                bg: "brand.500",
            },
            color: "white",
        };
        return (
            <chakra.button
                mx={1}
                px={4}
                py={2}
                rounded="md"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                color="gray.700"
                opacity={props.disabled && 0.6}
                _hover={!props.disabled && activeStyle}
                cursor={props.disabled && "not-allowed"}
                {...(props.active && activeStyle)}
            >
                {props.children}
            </chakra.button>
        );
    };

    return (
        <Flex
            bg="#edf3f8"
            _dark={{
                bg: "#171923",
            }}
            p={4}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <HStack>
                <div onClick={() => {
                    prePage()
                }}>
                    <PagButton>
                        <Icon
                            as={IoIosArrowBack}
                            color="gray.700"
                            _dark={{
                                color: "gray.200",
                            }}
                            boxSize={4}
                        />
                    </PagButton>
                </div>
                <div onClick={() => {
                    nextPage()
                }}>
                    <PagButton>
                        <Icon
                            as={IoIosArrowForward}
                            color="gray.700"
                            _dark={{
                                color: "gray.200",
                            }}
                            boxSize={4}
                        />
                    </PagButton>
                </div>
                <HStack>
                    <Input
                        value={value}
                        onChange={handleChange}
                        w="200px"
                        placeholder='Page'
                    />
                    <Text wordBreak="unset" onClick={() => {
                        goTo()
                    }}>Go</Text>
                </HStack>
            </HStack>
        </Flex>
    );
};
