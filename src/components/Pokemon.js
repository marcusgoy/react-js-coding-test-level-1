import React from "react";
import classes from "./Pokemon.module.css";
import Table from "./Table";
import Chart from "./Chart";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Pokemon(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = [];
    function createDataList() {
      props.stats.map((stats) => {
        const name = stats.stat.name;
        const stat = stats.base_stat;
        data.push({ name: name, stat: stat });
      });
    }
    createDataList();
    setData(data)
  }, []);

  function downloadDocument() {
      console.log("downloadDocument")
      const input = document.getElementById('pokemonDetail');
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'JPEG', 0, 0);
          pdf.save("download.pdf");
        })
      ;
  }

  return (
    <div id="pokemonDetail" className={classes.container}>
      <h1 className={classes.header}>{props.name}</h1>
      <img className={classes.image} src={props.image}></img>
      <Table className={classes.table} stats={props.stats} />
      <Chart className={classes.chart} data={data} xAxis="name" yAxis="stat" />
      <button className={classes.download} onClick={downloadDocument}>Download</button>
    </div>
  );
}
export default Pokemon;
