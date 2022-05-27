import React from "react";
import { Link } from 'react-router-dom'
import classes from './Pagination.module.css' 


function Pagination(props) {
  return (
    <div>
      {props.navigateToPreviousPage && <button className={classes.previous} onClick={props.navigateToPreviousPage}>Back</button>}
      {props.navigateToNextPage &&<button className={classes.next} onClick={props.navigateToNextPage}>Next</button>}
    </div>
  );
}
export default Pagination;
