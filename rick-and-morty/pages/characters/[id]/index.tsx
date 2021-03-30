import NextLink from "next/link";
import { NextPage, GetStaticProps } from "next";
import Locations from '../../../src/components/_templates/Locations';
import Episode from '../../../src/components/_templates/Episode';
import axios from "axios";
import { useRouter } from "next/router";
import styled from "styled-components";

// So this page was harder to wrangle but I decided on using `getServerSideProps` because
// I knew I'd be accessing the endpoint again to get more dynamic data

const CharactersIndexPage = ({ data, locationData, firstEpisodeData, lastEpisodeData }) => {
    // Log it out for purposes of knowing wtf is going on 
  console.log("data", data);
  console.log("location", locationData);
  console.log("episode", firstEpisodeData)

  const { name, image, gender, location, origin, species, status, type, episode } = data;
  return (
    <div>
    {/* Header could be a reusable component 100% */}
    <Header>
        <Title>Rick &amp; Morty</Title>
        <a href="/characters">Back to listing</a>
        <ProfileSnapshot>
            <ProfileImage src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <h3>Status: {status}</h3>
                <h3>Origin: {origin?.name}</h3>
            </div>
        </ProfileSnapshot>
      </Header>
      <ProfileWrapper>
        <Locations 
            name={locationData.name} 
            type={locationData.type} 
            dimension={locationData.dimension} 
            noOfResidents={locationData.residents} 
        />
        <h2>Episodes: {episode?.length}</h2>
        {/* I have split out first and last because I thought there would be a better way 
        of ordering episodes by date or something, but this was my solution */}
        <Episode
            name={firstEpisodeData.name}
            airDate={firstEpisodeData.air_date}
            noOfCharacters={firstEpisodeData.characters.length}
            episode={firstEpisodeData.episode}
            isLast={false}
        />
        <Episode
            name={lastEpisodeData.name}
            airDate={lastEpisodeData.air_date}
            noOfCharacters={lastEpisodeData.characters.length}
            episode={lastEpisodeData.episode}
            isLast={true}
        />
        </ProfileWrapper>
    </div>
  );
};

const Header = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 450px;
  padding: 80px 40px;
  background: #ccc;
  z-index: 0;
  @media (max-width: 768px) {
    min-height: 100vh;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size:42px;
  color: #000;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 30px;
`;

const ProfileWrapper = styled.div`
margin: 40px;
z-index: 1;
position:relative;
`;

const ProfileSnapshot = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 500px;
margin: 30px 0;
@media (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center
}
`;

export async function getServerSideProps({ query }) {
    // get url query [id]
  const { id } = query;

    // We are then using the id to get the data for that character back on the f/e
  const { data } = await axios.get<LickApi.ICharacterCore[]>(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (data) {
    // checks if there is data because without this there is nothing

    // Find locations url from data and use that to query the api and get that data back
    const { data: location } = await axios.get<LickApi.ILocation[]>(
        `${data.location.url}`
    );

    const locationData = location

    const firstAppearance = data.episode[0]
    // Get last item in the episode list(which is the latest episode)
    const lastAppearance = data.episode[data.episode.length-1]

    // Find first episode appearance

    const { data: first } = await axios.get<LickApi.ILocation[]>(
        `${firstAppearance}`
    );

    // Find last episode appearance

    const { data: last } = await axios.get<LickApi.ILocation[]>(
        `${lastAppearance}`
    );

    const firstEpisodeData = first
    const lastEpisodeData = last

    // return the data back to props to be available on f/e
    return { props: { data, locationData, firstEpisodeData, lastEpisodeData } };
  } else {
    res.statusCode = 404;
    return { props: {} };
  }
}

export default CharactersIndexPage;
