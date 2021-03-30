import NextLink from "next/link";
import { NextPage, GetStaticProps } from "next";
import CharacterCard from "../../src/components/_templates/CharacterCard";
import styled from "styled-components";
import axios from "axios";

const CharactersIndexPage = ({ characters }) => {
  return (
    <div>
      <Header>
        <Title>Rick &amp; Morty</Title>
      </Header>
      <List>
        {characters.results.map(character => {
          // spread the character prop and get the available items within it
          const { id, name, image, gender, species } = character;
          return (
            // Simple card component to render the basic info
            // I know that I have split it the component props like
            // below but it gives me visibility on what I am actually using

            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              image={character.image}
            />
          );
        })}
      </List>
    </div>
  );
};

export async function getStaticProps() {
  // Call endpoint that we created
  // set Data: to characters
  const { data: characters } = await axios.get(
    "http://localhost:3000/api/characters"
  );

  if (characters) {
    // If there is data pass as props on the page
    return { props: { characters } };
  } else {
    // If not throw a 404 page error
    res.statusCode = 404;
    return { props: {} };
  }
}

// In an ideal world I'd setup this site with something like Tailwind but styled components do the job.
const Header = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #ccc;
  z-index: 0;
`;

const Title = styled.h1`
  font-size: 34px;
  color: #000;
`;

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

const ListItem = styled.li`
  width: 200px;
`;

export default CharactersIndexPage;
