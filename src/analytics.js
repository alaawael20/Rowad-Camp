import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-32S7DVRBMP");
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
