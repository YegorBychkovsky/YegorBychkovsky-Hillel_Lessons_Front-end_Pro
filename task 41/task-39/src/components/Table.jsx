import { React } from 'react';

export const Table = ({ data, headers, footer }) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th scope="col">{header.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {headers.map((header) => (
                <td>{header.render ? header.render(row) : row[header.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div>{footer()}</div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
