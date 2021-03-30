import { React, FunctionComponent } from "react";
import styled from "styled-components";

const Location: React.FC<LickApi.ILocation> = ({
  id,
  name,
  type,
  noOfResidents,
  dimension
}) => {
  return (
    <>
    <h2>Location Details</h2>
      <ul>
          <li>Name: {name}</li>
          <li>Type: {type}</li>
          <li>No. of Residents: {noOfResidents?.length}</li>
          <li>Dimension: {dimension}</li>
      </ul>
    </>
  );
};

export default Location;
