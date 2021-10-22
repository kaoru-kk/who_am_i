import React from 'react';
import SectionContainer from '../organisms/SectionContainer';
import NowLoading from '../organisms/NowLoading';

export default function Index() {

  return (
    <>
      <div class='is_sp'>
        <p>Smartphone ver is currently under construction. </p>
        <p>Please watch PC (-_-)</p>
      </div>
      <div class='is_pc'>
        <NowLoading />
        <SectionContainer />
      </div>
    </>
  )
};