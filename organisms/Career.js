import React from 'react'
import { useTable } from 'react-table'

function Data() {
  return (
    [
      {period: '2016.04 - 2020.03', place: 'KGU SPS', detail: 'university,  Media and Information Studies'},
      {period: '2018.04 - 2020.09', place: 'infratop.inc', detail: 'mentor and engineer intern at DMM WEBCAMP'},
      {period: '2020.05 - now', place: 'PECO.inc', detail: 'system engineer (RoR, Vue, React, TypeScript)'}
    ]
  );
};

function Table({ columns, data }) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // https://github.com/tannerlinsley/react-table/discussions/2647
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...restHeaderGroupProps } =
            headerGroup.getHeaderGroupProps();
          return (
            <tr key={key} {...restHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key, ...restColumn } = column.getHeaderProps();
                return (
                  <th key={key} {...restColumn}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...restRowProps } = row.getRowProps();
          return (
            <tr key={key} {...restRowProps}>
              {row.cells.map((cell) => {
                const { key, ...restCellProps } = cell.getCellProps();
                return (
                  <td key={key} {...restCellProps}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function Carrer() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'CAREER',
        columns: [
          {
            Header: '',
            accessor: 'period',
          },
          {
            Header: '',
            accessor: 'place',
          },
          {
            Header: '',
            accessor: 'detail',
          },
        ],
      },
    ],
    []
  )

  const data = Data();

  return (
    <section id='carrer'>        
      <Table columns={columns} data={data} />
    </section>
  )
}
