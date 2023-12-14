import React from 'react';

const TableComponent = ({ data }) => {
  console.log("This is items in the table comp:")
  console.log(data)
  // Check if the data array is empty
  if (data.length === 0) {
    return <p>LOADING...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.entries(data[0]).map(([key, _]) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;