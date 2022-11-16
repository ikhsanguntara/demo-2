import { useState } from "react";
import moment from "moment";

export const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "20",
    value: 20,
  },
  {
    text: "30",
    value: 30,
  },
  {
    text: "40",
    value: 40,
  },
  {
    text: "50",
    value: 50,
  },
];

export const formatDate = (stringDate) => {
  if (stringDate === "1900-01-01T00:00:00Z") {
    return "";
  } else if (stringDate === "0001-01-01T00:00:00Z") {
    return "";
  } else if (stringDate === "0001-01-01") {
    return "";
  } else if (stringDate === null) {
    return "";
  } else {
    return moment(stringDate).format("DD/MM/YYYY");
  }
};

export const formatDateTime = (stringDate) => {
  if (stringDate === "1900-01-01T00:00:00Z") {
    return "";
  } else if (stringDate === "0001-01-01T00:00:00Z") {
    return "";
  } else if (stringDate === "0001-01-01") {
    return "";
  } else if (stringDate === null) {
    return "";
  } else {
    return moment(stringDate).format("DD/MM/YYYY - HH:mm");
  }
};

export const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
};
