import {
    Box,
    Flex,
    Link,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    HStack, IconButton,
} from '@chakra-ui/react';
import NextLink from "next/link"
import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';

const NavLink = ({children}) => (
    <NextLink
        href={children.href}
        passHref>
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={children.href}>
            {children.name}
        </Link>
    </NextLink>
);

const LinksInfo = [{
    name: 'PrivateKey',
    href: '/'
}, {
    name: 'MnemonicCode',
    href: '/mnemoniccode'
}, {
    name: 'KnownPrivateKey',
    href: '/knownprivatekey'
}, {
    name: 'KnownMnemonicCode',
    href: '/knownmnemoniccode'
}];


export default function Nav() {
    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    <HStack spacing={8} alignItems={'center'}>
                        <Box>IteratePrivateKey</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            {LinksInfo.map((link) => (
                                <NavLink key={link.href}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {LinksInfo.map((link) => (
                                <NavLink key={link.href}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}
