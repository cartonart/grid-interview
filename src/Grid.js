import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map(col => <th key={col.title}>{col.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map((item, i) => {
        // creating the key from a combination of the row data and 
        // the index because we don't know which field is unique
        const key = config.map(col => item[col.field]).join("_");
        return <tr key={`${i}_${key}`}>
          {config.map(col => <td key={col.title}>{
            col.component ? <col.component data={item[col.field]} />
              : item[col.field]
          }</td>)}
        </tr>
      })}
    </tbody>
  </table>
);

export default Grid;