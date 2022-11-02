import TempoDisplay from "./TempoDisplay";
import { useState, useEffect, useMemo } from "react";
import beatValueToNote from "../utils/beat-value-to-note/beat-value-to-note";
import calculateDelayTimes from "../utils/calculate-delay-times/calculate-delay-times";
import makeDataObject from "../utils/make-data-object/make-data-object";
import TableDisplay from "./TableDisplay";

export default function App() {
  const [tableData, setTableData] = useState([]);
  const [tempo, setTempo] = useState(87);
  const beatValues = [
    4, 3, 2, 1.5, 1, 0.66666666666, 0.75, 0.5, 0.33333333333, 0.375, 0.25,
    0.16666666666, 0.125,
  ];

  const noteValues = Array.from(beatValues, beatValueToNote);

  useEffect(() => {
    const durationTimes = calculateDelayTimes(tempo, beatValues);
    const tableData = makeDataObject(
      ["noteVals", "duration"],
      noteValues,
      durationTimes
    );
    setTableData(
      tableData
    ); /* array of objects in the following format [{ "note vals": "1 bar", duration: 1846.15 }, { "note vals": "1/2d", duration: 1384.62 }, { "note vals": "1/2", duration: 923.08 } and so on..] */
  }, [tempo]);

  return (
    <>
      <section>
        <TempoDisplay tempo={tempo} />
      </section>
      <section>
        <TableDisplay tableData={tableData} />
      </section>
    </>
  );
}
