import React from 'react'
import DataTable from 'react-data-table-component';
import Heading from '../../common/Heading';

const Index = () => {
  const columns = [
    {
      name: 'Ticket',
      selector: row => row.ticket,
      sortable: true,
    },
    {
      name: 'Open',
      selector: row => row.open,
      sortable: true,
    },
    {
      name: 'Close',
      selector: row => row.close,
      sortable: true,
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
    },
    {
      name: 'Open Price',
      selector: row => row.open_price,
      sortable: true,
    },
    {
      name: 'Close Price',
      selector: row => row.close_price,
      sortable: true,
    },
    {
      name: 'SL',
      selector: row => row.sl,
      sortable: true,
    },
  ];

  const data = [
    {
      id: Math.floor(Math.random(10) * 1000),
      ticket: Math.floor(Math.random(10) * 1000),
      open: '12 Mar 2024',
      close: '13 Mar 2024',
      action: '14 Mar 2024',
      open_price: '1.0674',
      close_price: '1.0674',
      sl: '1.0674',
    },
    {
      id: Math.floor(Math.random(10) * 1000),
      ticket: Math.floor(Math.random(10) * 1000),
      open: '15 Mar 2024',
      close: '16 Mar 2024',
      action: '17 Mar 2024',
      open_price: '1.0674',
      close_price: '1.0674',
      sl: '1.0674',
    },
    {
      id: Math.floor(Math.random(10) * 1000),
      ticket: Math.floor(Math.random(10) * 1000),
      open: '18 Mar 2024',
      close: '19 Mar 2024',
      action: '20 Mar 2024',
      open_price: '1.0674',
      close_price: '1.0674',
      sl: '1.0674',
    },
    {
      id: Math.floor(Math.random(10) * 1000),
      ticket: Math.floor(Math.random(10) * 1000),
      open: '21 Mar 2024',
      close: '22 Mar 2024',
      action: '23 Mar 2024',
      open_price: '1.0674',
      close_price: '1.0674',
      sl: '1.0674',
    },
  ]
  return (
    <>
      <section className='mt-10'>
        <Heading title={'Trade History'} />
        <section className='rounded-xl mt-4'>
          <DataTable
            columns={columns}
            data={data}
          />
        </section>
      </section>
    </>
  )
}

export default Index