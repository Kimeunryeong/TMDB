import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Skeleton,
  SkeletonCircle,
  Spinner,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";

export default function Chakra() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-4">
          <h1>test</h1>
          <Button colorScheme="teal" size="xs">
            버튼
          </Button>
          <Button colorScheme="red" size="md">
            빨간색 버튼
          </Button>
          <Checkbox colorScheme="green"> 체크박스 </Checkbox>
          <Spinner color="red.500" />
          <div>
            {/* 차크라 drawer */}
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          {/* chakra 스켈레톤 */}
          <div className=" space-y-4">
            <SkeletonCircle size="20" />
            <Skeleton height="20px" />
          </div>
          {/* chakra 다크모드 */}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Darkmode Button" : "Lightmode Button"}
            </Button>
        </div>
      </div>
    </Layout>
  );
}
