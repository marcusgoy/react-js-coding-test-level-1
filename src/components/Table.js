import React from "react";
import classes from "./Table.module.css";

function Table(props) {
  return (
    <table className={classes.table}>
      <tbody>
        {props.stats.map((stats) => {
          return (
            <tr key={stats.stat.name}>
              <td>{stats.stat.name}</td>
              <td>{stats.base_stat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
