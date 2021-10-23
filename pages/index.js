import React from 'react';
import Header from '../templates/Header';
import SectionContainer from '../templates/SectionContainer';
import NowLoading from '../templates/NowLoading';

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