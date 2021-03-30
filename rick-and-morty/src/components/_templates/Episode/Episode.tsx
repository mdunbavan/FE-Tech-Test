import { React, FunctionComponent } from "react";
import styled from "styled-components";

const Episode: React.FC<LickApi.IEpisode> = ({
  id,
  name,
  airDate,
  noOfCharacters,
  episode,
  isLast
}) => {
  return (
    <>
      {isLast ? (
        <ul>
          <li>
            <strong>Last Appearance:</strong> {name} {episode}
          </li>
          <li>
            <strong>Last Appearance air date:</strong> {airDate}
          </li>
          <li>
            <strong>Last Appearance character count:</strong> {noOfCharacters}
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <strong>First Appearance:</strong> {name} {episode}
          </li>
          <li>
            <strong>First Appearance air date:</strong> {airDate}
          </li>
          <li>
            <strong>First Appearance character count:</strong>
            {noOfCharacters}
          </li>
        </ul>
      )}
    </>
  );
};

export default Episode;
