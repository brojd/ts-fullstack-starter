import React, { FC, useState, useEffect, useRef } from 'react';
import { Spinner } from '@chakra-ui/core';

interface LoadingProps {
  isLoading?: boolean;
  timeToWaitBeforeShowing?: number;
}

const Loading: FC<LoadingProps> = ({
  children,
  isLoading,
  timeToWaitBeforeShowing = 300
}) => {
  const [show, setShow] = useState(isLoading);
  const latestIsLoading = useRef(isLoading);

  useEffect(() => {
    latestIsLoading.current = isLoading;
    setTimeout(() => {
      setShow(latestIsLoading.current);
    }, timeToWaitBeforeShowing);
    if (!isLoading) {
      setShow(false);
    }
  }, [timeToWaitBeforeShowing, isLoading]);

  if (show) {
    return <Spinner m="0 auto" d="block" />;
  }
  return <>{children}</>;
};

export default Loading;
