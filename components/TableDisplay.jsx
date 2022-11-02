import { useTable } from "react-table";

export default function TableDisplay({ tableData }) {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Note Value </th>
          <th>Duration</th>
        </tr>
        {tableData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.noteVals}</td>
              <td>{val.duration}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

// export default function TableDisplay({ tableData }) {
//   console.log(tableData);
//   return (
//     <div className="App">
//       <table>
//         <tr>
//           <th>Note Value </th>
//           <th>Duration</th>
//         </tr>
//         {tableData.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td>{val.noteValues}</td>
//               <td>{val.durationTimes}</td>
//             </tr>
//           );
//         })}
//       </table>
//     </div>
//   );
// }

// const Table = (props) => {
//   let data = null; // CLEAR FIRST

//   // LOOP OVER DATA AND ASSIGN PER COLUMN
//   data = props.tableData.map((el) => {
//     // SHOULD RETURN AN OBJECT
//     return {
//       col0: el.properties.noteValues,
//       col1: el.properties.durationTimes,
//     };
//   });

//   // DEFINE COLUMNS
//   const columns = React.useMemo(
//     () =>
//       props.col_labels.map((el, idx) => {
//         return {
//           Header: el,
//           accessor: "col" + idx,
//         };
//       }),
//     []
//   );

//   const tableInstance = useTable({ columns, data });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableInstance;

//   return (
//     // apply the table props
//     <table {...getTableProps()}>
//       <thead>
//         {
//           // Loop over the header rows
//           headerGroups.map((headerGroup) => (
//             // Apply the header row props
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {
//                 // Loop over the headers in each row
//                 headerGroup.headers.map((column) => (
//                   // Apply the header cell props
//                   <th {...column.getHeaderProps()}>
//                     {
//                       // Render the header
//                       column.render("Header")
//                     }
//                   </th>
//                 ))
//               }
//             </tr>
//           ))
//         }
//       </thead>
//       // Apply the table body props
//       <tbody {...getTableBodyProps()}>
//         {
//           // Loop over the table rows
//           rows.map((row) => {
//             // Prepare the row for display
//             prepareRow(row);
//             return (
//               // Apply the row props
//               <tr {...row.getRowProps()}>
//                 {
//                   // Loop over the rows cells
//                   row.cells.map((cell) => {
//                     // Apply the cell props
//                     return (
//                       <td {...cell.getCellProps()}>
//                         {
//                           // Render the cell contents
//                           cell.render("Cell")
//                         }
//                       </td>
//                     );
//                   })
//                 }
//               </tr>
//             );
//           })
//         }
//       </tbody>
//     </table>
//   );
// };
