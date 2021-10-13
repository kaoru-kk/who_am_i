import React, { useState } from 'react';
import SectionContainer from '../organisms/SectionContainer';
import NowLoading from '../organisms/NowLoading';

export default function Loading() {

  const [isNowLoad, setIsNowLoad] = useState(false);

  return (
    <>
      { isNowLoad ? (
        <SectionContainer />
      ) : (
        <NowLoading />
      )}
    </>
  )
};