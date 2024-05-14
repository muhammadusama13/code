import React from 'react'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/common/BreadCrumb'
import Heading from '../../components/common/Heading'
import LineChart from '../../components/dashboard/LineChart'
import DashboardDetail from '../../components/dashboard/DashboardDetail'
import EvaluationObjectives from '../../components/dashboard/EvaluationObjectives'
import PerformanceStatistics from '../../components/dashboard/PerformanceStatistics'
import DailySummary from '../../components/dashboard/DailySummary'
import TradeHistory from '../../components/dashboard/TradeHistory'

const index = () => {
  const BreadCrumbList = [
    {
      name: 'Trader',
      path: '#',
    },
    {
      name: 'Client Area',
      path: '#',
    },
    {
      name: 'Dashboard',
      path: '#',
    },
  ]
  return (
    <>
      <Layout>
        <section className='flex-between flex-wrap lg:flex-nowrap'>
          <div>
            <BreadCrumb list={BreadCrumbList} />
            <Heading
              className='text-[25px] mt-2'
              title={'Good Morning, Thomas!'} />
          </div>
          <div className='flex-center gap-x-2 flex-wrap lg:flex-nowrap'>
            <p className='font-semibold app-text-color text-[15px]'>Select Your Ride:</p>
            <p className='bg-primary text-white font-semibold text-[15px] py-1 px-3'>#1234324535 - INTERIM 1</p>
          </div>
        </section>

        <section className='lg:grid grid-cols-7 mt-10 gap-x-[30px]'>
          <section className='col-span-4 '>
            <Heading title={'Dashboard'} />
            <LineChart />
          </section>
          <section className='col-span-3 '>
            <Heading title={'Details'} />
            <DashboardDetail />
          </section>
        </section>
        <EvaluationObjectives />
        <section className='lg:grid grid-cols-2 mt-10 gap-x-[30px]'>
          <PerformanceStatistics />
          <DailySummary />
        </section>
        <TradeHistory /> 
      </Layout>
    </>
  )
}

export default index