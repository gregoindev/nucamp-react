import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsitesList from "./CampsitesList";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};
