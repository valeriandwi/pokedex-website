"use client";
import Title from "@/app/components/Title";
import { TYPE_COLOR } from "@/app/constants/constants";
import { PokemonTypeResult } from "@/app/type/pokemon-type.type";
import { getPokemonType } from "@/app/utils/type.api";
import { Link } from "@/i18n/routing";
import emotionStyled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import React from "react";

interface NavigationProps {
  selectedType: string;
}

const MenuWrapper = emotionStyled("ul")`
  padding-left : 20px;
  gap : 8px;
  display : flex;
  flex-direction: column;
`;

const Menu = emotionStyled("li")<{
  selected?: boolean;
  selectedColor?: string;
}>`
  color : ${(props) => (props.selected ? props.selectedColor : "#7B8082")};
  font-weight : ${(props) => (props.selected ? "700" : "500")};
  font-size : 14px;
  line-height : 21px;
  text-transform : capitalize;
  cursor : pointer;
  "&:hover : {
    color : #42494d
  }
`;

const Navigation: React.FC<NavigationProps> = ({ selectedType }) => {
  const [pokemonType, setPokemonType] = React.useState<PokemonTypeResult[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonType();
      setPokemonType(response?.data.results || []);
    };
    fetchData();
  }, []);

  return (
    <Box display="flex" flexDirection="row" gap="57px">
      <Box display="flex" flexDirection="column" gap="8px">
        <Title width="180px">Pokemon Type</Title>
        <MenuWrapper>
          {pokemonType?.map((type, index) => {
            const currentType: string = type.url.split("/").at(-2) || "1";
            return (
              <Menu
                selectedColor={TYPE_COLOR?.[Number(currentType) - 1]}
                key={index}
                selected={selectedType === currentType}
              >
                <Link href={`/type/${currentType}`}>
                  Pokemon Type {type.name}
                </Link>
              </Menu>
            );
          })}
        </MenuWrapper>
      </Box>
      <Divider
        orientation="vertical"
        color="#ECEDED"
        variant="middle"
        sx={{ height: "800px" }}
        flexItem
      />
    </Box>
  );
};

export default Navigation;
