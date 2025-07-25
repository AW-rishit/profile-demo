import React from 'react';
import styled from 'styled-components';

// Accept className and forward it
const SlideUpNum = ({ className, num }) => {
  return (
    <StyledWrapper className={className}>
      <button data-text="Awesome" className="button">
        <span className="actual-text"> {num} </span>
        <span className="hover-text" aria-hidden="true"> {num} </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color:#ff9137;
    --animation-color: #ff9137;
    --fs-size: 3em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }

  /* actual text fill before hover */
  .actual-text {
    color:#ff9137;                    
    // -webkit-text-stroke: none;     
  }

  /* hover text */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
  }
  /* hover effect */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;

export default SlideUpNum;
