import React from 'react';
import { BeatLoader } from 'react-spinners';

const LoadingDots = (state) => {
  return (
    <div className="react-spinner-container">
      <BeatLoader
        className="beat-loader"
        sizeUnit={"px"}
        size={20}
        color={'#008489'}
        loading={state.loading}
      />
    </div>
  )
};

export default LoadingDots;
