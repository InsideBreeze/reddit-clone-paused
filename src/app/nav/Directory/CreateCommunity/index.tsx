import { HStack, MenuItem, Icon, Text } from "@chakra-ui/react"
import { GrAdd } from 'react-icons/gr'
import { useState } from "react";
import CreateCommunityModal from "@/app/modals/createCommunity";

const CreateCommunity = () => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <CreateCommunityModal open={open} onClose={() => setOpen(false)}/>
            <MenuItem>
                <HStack onClick={() => setOpen(true)}>
                    <Icon as={GrAdd} fontSize={21} />
                    <Text>Create Community</Text>
                </HStack>
            </MenuItem>
        </>
    )
}

export default CreateCommunity
