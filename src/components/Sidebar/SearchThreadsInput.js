import { InputGroup, Input } from "@chakra-ui/react";

const SearchThreadsInput = ({ searchValue, setSearchValue }) => {
  return (
    <InputGroup>
      <Input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder={"Search"}
        marginLeft={"1px"}
        paddingRight={"0.5rem"}
        width={"100%"}
        maxWidth={"calc(100% - 5px)"}
        height={"40px"}
        marginTop={5}
        marginBottom={2}
        backgroundColor={"white"}
        border={`1px solid #D0D5DD`}
        boxShadow={"0px 1px 2px rgba(16, 24, 40, 0.05)"}
        borderRadius={"8px"}
      />
    </InputGroup>
  );
};

export default SearchThreadsInput;
