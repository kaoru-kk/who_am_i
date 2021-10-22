import React from 'react';
import Header from '../components/Header';
import SectionContainer from '../organisms/SectionContainer';
import NowLoading from '../organisms/NowLoading';

export default function Index() {

  return (
    <>
      <Header />
      <div className='is_sp'>
        <p>Smartphone ver is currently under construction. </p>
        <p>Please watch PC (-_-)</p>
      </div>
      <div className='is_pc'>
        <NowLoading />
        <SectionContainer />
      </div>
    </>
  )
};