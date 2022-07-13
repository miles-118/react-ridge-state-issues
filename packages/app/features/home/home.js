import React from 'react'
import {
  Center,
  HStack,
  Text,
  Stack,
  Button,
  StatusBar,
  Box,
  Hidden,
} from 'native-base'
import { loginState } from "../../utils/state/loginState";

function ResponsiveButtons() {
    const [isSignedIn, setSignin] = loginState.use();
    return (
        <Center
        w={{ base: '100%', md: '30%' }}
        pt={{ base: 0, md: '190' }}
        pb={{ base: 0, md: '190' }}
        px={{ base: 4, md: '50' }}
        >
            <Stack w={{ base: "50%", md: "100%" }} direction={{ base: "row", md: "column" }} space={{ base: 2, md: 10 }} mt={{ base: 2, md: 0 }} mb={{ base: 10, md: 0 }} justifyContent="center">
                <Button py={4} w="100%" onPress={() => {
                    setSignin(!isSignedIn)
                }}>
                    Login State: {isSignedIn}
                </Button>
                <Button
                    w="100%"
                    py={4}
                >
                   Button 2
                </Button>
            </Stack>
        </Center>
    );
}

export function HomeScreen() {
  return (
    <>
        <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
        />
        <Center
            w="100%"
            h='100%'
            _light={{ bg: 'primary.900' }}
            _dark={{ bg: 'coolGray.900' }}
        >
            <Stack
                w="100%"
                h='100%'
                direction={{ base: 'column', md: 'row' }}
                >
                <HStack
                    flexDirection={{ md: 'row' }}
                    flex={1}
                >
                    <Box
                    w={{ base: '100%', md: '70%' }}
                    pt={{ base: '0', md: '8' }}
                    px={{ base: '0', md: '8' }}
                    flex={1}
                    _light={{ bg: {md: 'primary.900'} }}
                    _dark={{ bg: {md: 'coolgray.900'} }}
                    >
                        <Box flex={1} justifyContent="space-between" mb={{ base: 0, md: 4 }}>
                            <Box flex={1} alignItems="center" justifyContent='center'>
                                <Center>
                                    <Text
                                    mt="0"
                                    fontSize="4xl"
                                    fontWeight="bold"
                                    textAlign="center"
                                    color='coolGray.50'
                                    >
                                    Long text descibing how SSR does not work...
                                    </Text>
                                </Center>
                            </Box>
                        </Box>
                        <Hidden from="md">
                            <ResponsiveButtons />
                        </Hidden>
                    </Box>
                    <Hidden till="md">
                        <ResponsiveButtons />
                    </Hidden>
                </HStack>
            </Stack>
      </Center>
    </>
  )
}