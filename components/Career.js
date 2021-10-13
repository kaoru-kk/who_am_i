import React from 'react'
import { useTable } from 'react-table'

function Data() {
  return (
    [
      {period: '2016.04 - 2020.03', place: 'university: KGU SPS', detail: 'Media and Information Studies'},
      {period: '2018.04 - 2020.01', place: 'infratop', detail: 'DMM WEBCAMP: mentor and engineer intern'},
      {period: '2020.05 - now', place: 'PECO', detail: 'pet company. i love dog!'}
      // {period: '', place: '', detail: ''}
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

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function Carrer() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'CAREER',
        columns: [
          {
            Header: 'period',
            accessor: 'period',
          },
          {
            Header: 'place',
            accessor: 'place',
          },
          {
            Header: 'detail',
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
