import { forwardRef } from 'react';
import { Lottie } from '~/modules';

const Loading = forwardRef<Lottie>(({}, ref) => {
  return (
    <Lottie
      source={require('../../assets/animations/loading.json')}
      loop
      ref={ref}
    />
  );
});

Loading.displayName = 'Loading';

export default Loading;
