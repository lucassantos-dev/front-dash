import { RefObject, useEffect, useRef } from "react";

const useDimensions = (ref: RefObject<HTMLElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current?.offsetWidth || 0;
    dimensions.current.height = ref.current?.offsetHeight || 0;
  }, []);

  return dimensions.current;
};

export default useDimensions;
