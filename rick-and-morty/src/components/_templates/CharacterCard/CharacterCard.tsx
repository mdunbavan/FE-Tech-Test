import { React, FunctionComponent } from "react";
import styled from "styled-components";
import Link from "next/link";

interface Character extends LickApi.ICharacterCore {
  image: string;
}

const CharacterCard: React.FC<Character> = ({
  id,
  name,
  status,
  species,
  gender,
  image
}) => {
  return (
    <ListItem key={id}>
      <Image src={image} alt={`${name} Thumbnail`} />
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
      <Link href="/characters/[id]" as={`/characters/${id}`}>
        <CTA>View profile</CTA>
      </Link>
    </ListItem>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  margin: -50px 0 0;
  list-style: none;
  z-index: 1;
  position: relative;
`;

const CTA = styled.a`
  background-color: bisque;
  width: 100%;
  margin: 20px 0;
  padding: 10px 12px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 200px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export default CharacterCard;
