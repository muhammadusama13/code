import React from 'react'
import Heading from '../../common/Heading'
import LabelValue from './LabelValue'
import CircularProgress from '../../common/CircularProgress'

const Index = () => {
  return (
    <>
      <section>
        <Heading title={'Performance Statistics'} />
        <section className='header-shadow bg-white rounded-xl p-[18px] mt-4'>
          <section className='grid gap-3 grid-cols-3'>
            <LabelValue
              label={'Average Profit:'}
              value={'$234.67'}
            />
            <LabelValue
              label={'Average Loss:'}
              value={'-$334.67'}
            />
            <LabelValue
              label={'Average RR:'}
              value={'0.70'}
            />
            <LabelValue
              label={'Largest Profit:'}
              value={'$1254.67'}
            />
            <LabelValue
              label={'Largest Loss:'}
              value={'-$846.6'}
            />
            <LabelValue
              label={'Expectancy:'}
              value={'-$846.6'}
            />
            <div className='col-span-3 my-2'>
              <h6 className='text-center font-bold text-primary text-[13px]'>Win Rate</h6>
              <div className='flex-center gap-x-8'>
                {['Long', 'Overall', 'Short'].map((item, index) => <div key={index} className='mt-5  h-[75px] w-[75px]'>
                  <CircularProgress strokeWidth={12}>
                    <h2 className='text-[13px] font-bold'>{item}</h2>
                    <p className='app-text-color text-[10px]'>29%</p>
                  </CircularProgress>
                </div>
                )}
              </div>
            </div>
            <div className='col-span-3 grid grid-cols-4 gap-2.5'>
              <LabelValue
                label={'Trades:'}
                value={'-$846.6'}
              />
              <LabelValue
                label={'Lots:'}
                value={'-$846.6'}
              />
              <LabelValue
                label={'Notional Volume:'}
                value={'-$846.6'}
              />
              <LabelValue
                label={'Profit Factor:'}
                value={'-$846.6'}
              />

            </div>
          </section>
        </section>

      </section>
    </>
  )
}

export default Index