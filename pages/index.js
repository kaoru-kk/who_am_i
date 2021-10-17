import React from 'react';
import SectionContainer from '../organisms/SectionContainer';
import NowLoading from '../organisms/NowLoading';

export default function Loading() {

  return (
    <div data-scroll-section>
      <NowLoading />
      <SectionContainer />
    </div>
  )
};