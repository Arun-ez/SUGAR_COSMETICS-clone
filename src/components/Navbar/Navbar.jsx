import "./Navbar.css"
import React from 'react'
import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Heading } from '@chakra-ui/layout';
import { HiUserCircle, HiMenuAlt2 } from "react-icons/hi"
import { FiHeart } from "react-icons/fi"
import { FiSearch } from "react-icons/fi"
import { TbDiscount2 } from "react-icons/tb"
import { RiShoppingBagLine } from "react-icons/ri"
import { NavLink } from 'react-router-dom';
import { Sidebar } from "./Sidebar";
import { Logo } from "./Logo";

const Navbar = () => {

    let { isOpen, onOpen, onClose } = useDisclosure();

    const handle_drawer = () => {
        onOpen();
    }

    const nav_routes = [
        { name: "LIPS", path: "" },
        { name: "EYES", path: "" },
        { name: "FACE", path: "" },
        { name: "SKINCARE", path: "" },
        { name: "ACCESSORIES", path: "" },
        { name: "GIFT & KITS", path: "" },
        { name: "BESTSELLERS", path: "" },
        { name: "NEW LAUNCHES", path: "" },
        { name: "OFFERS", path: "" },
        { name: "BLOG", path: "" },
        { name: "STORES", path: "" },
    ]

    return (
        <Flex className='navbar' w="100vw" direction="column">
            <Flex
                bg="#000000"
                w="100%"
                h={["55px", "55px", "80px", "80px"]}
                alignItems="center"
                justifyContent="space-between"
                pl={["10px", "10px", "60px", "60px"]}
                pr={["30px", "30px", "60px", "60px"]}
            >

                <Flex display={["flex", "flex", "flex", "none"]} gap="20px">
                    <HiMenuAlt2 color='white' fontSize="20px" onClick={handle_drawer} />
                    <Sidebar onClose={onClose} isOpen={isOpen} />
                    <Logo h={["25px", "25px", "40px", "40px"]} display={["block", "block", "none", "none"]} />
                </Flex>

                <Logo h={["25px", "25px", "40px", "40px"]} display={["none", "none", "block", "block"]} />

                <Flex w="40%" border="1px solid white" borderRadius="8px" overflow="hidden" display={["none", "none", "none", "flex"]}>
                    <Input
                        placeholder='Try "Liquid Lipstick"'
                        border="none"
                        _focusVisible={false}
                        borderRadius="none"
                        bg="#212121"
                        color="white"
                        style={{ caretColor: "#fc2779" }} />

                    <Button borderRadius="0px" w="150px" gap="5px"> <FiSearch fontSize="20px" /> Search </Button>
                </Flex>

                <Heading as="p" color="white" fontSize="15px" display={["none", "none", "flex", "flex"]} gap="4px" alignItems="center">
                    <HiUserCircle fontSize="25px" />
                    Login/Register
                </Heading>

                <Flex color="white" fontSize="20px" gap="20px">
                    <FiHeart />
                    <RiShoppingBagLine />
                    <TbDiscount2 />
                </Flex>

            </Flex>

            <Flex
                display={["none", "none", "none", "flex"]}
                bg="#141414"
                color="white"
                h="55px"
                alignItems="center"
                gap="3%"
                paddingLeft="40px"
                fontSize="14px"
                whiteSpace="nowrap">
                {nav_routes.map(({ name, path }, id) => {
                    return <NavLink className="nav_item hover-underline-animation " to={path} key={id}> {name} </NavLink>
                })}
            </Flex>
        </Flex>
    )
}

export default Navbar;