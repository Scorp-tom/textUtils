import React from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";

const Alert = (props) => {
    const capitalize=(word)=>{
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert &&<div className={`container alert alert-${props.alert.type} alert-dismissible fade show my-5`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
  );
};

export default Alert;
