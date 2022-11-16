import React from "react";
import { formatDateTime } from "./util";
import { showDialog } from "../utility";
import WarningIcon from "@material-ui/icons/Warning";
import ImageIcon from "@material-ui/icons/Image";


export const StatusCrpFormatter = (cellContent, row) => {
  let label = "";
  if (cellContent == "Y" && row.nra === true) {
    label = "Non Returnable";
  } else if (cellContent == "Y") {
    label = "Within CRP";
  } else if (cellContent == "N") {
    label = "Non CRP";
  } else if (cellContent == "N/A") {
    label = "N/A";
  }

  return <span>{label}</span>;
};
export const CrprgpStatus = (cellContent) => {
  if (cellContent === 1) {
    return "With CRP";
  } else if (cellContent === 0) {
    return "Non CRP";
  } else {
    return "";
  }
};

export const StatusFormatter = (cellContent, row) => {
  let label = "";
  if (cellContent == true) {
    label = "Yes";
  } else if (cellContent == false) {
    label = "No";
  }
  return <span>{label}</span>;
};

export const PrintFormatter = (cellContent, row) => {
  let label = "";
  if (cellContent === "Y") {
    label = "Printed";
  } else if (cellContent === "N") {
    label = "Not Printed";
  } else if (cellContent === "NR") {
    label = "Not Printed Reupload";
  }

  return <span>{label}</span>;
};

export const activeFormatter = (cellContent, row) => {
  let label = "";
  if (cellContent === "Y") {
    label = "Active";
  } else if (cellContent === "N") {
    label = "Not Active";
  }

  let style = "";
  if (cellContent === "Y") {
    style = "success";
  } else if (cellContent === "N") {
    style = "danger";
  }

  return (
    <span
      className={`label label-lg label-light-${style} label-inline label-width-pending-status`}
    >
      {label}
    </span>
  );
};

export const formatCurrency = (cellContent) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(cellContent);
};

export const attachFormatter = (cell, row) => {
  return row.attachmentId === "" ? (
    <WarningIcon
      onClick={(e) => {
        showDialog("No image attached!", "No Image", "error");
      }}
      style={{ color: "#648DAE", margin: "5px" }}
    />
  ) : (
    <ImageIcon
      onClick={() => {
        const url = `${process.env.REACT_APP_API_URL}/return/attachment/${row.attachmentId}`;
        window.open(url, "_blank").focus();
      }}
      style={{ color: "#648DAE", margin: "5px" }}
    />
  );
};

const dateTimeFormatter = (cell) => {
  if (cell === "0001-01-01T00:00:00Z") {
    return <span> </span>;
  } else {
    return <span>{formatDateTime(cell)}</span>;
  }
};

const openFpreFormatter = (retNumber) => {
  const url = `${process.env.REACT_APP_API_URL}/return/${retNumber}/fpre`;

  return (
    <span
      className={`label label-lg label-light-success label-inline cursor-pointer`}
      onClick={() => {
        window.open(url, "_blank").focus();
      }}
    >
      {retNumber}
    </span>
  );
};

export const formatStatusSo = (cell, row) => {
  let label = "";
  if (row.soStatus === "SUCCESS") {
    label = "Success";
  } else if (row.soStatus === "FAILED") {
    label = "Failed";
  } else {
    label = "-";
  }

  let style = "";
  if (row.soStatus === "SUCCESS") {
    style = "success";
  } else if (row.soStatus === "FAILED") {
    style = "danger";
  }
  return (
    <span
      className={`label label-lg label-light-${style} label-inline label-width-pending`}
    >
      {label}
    </span>
  );
};
