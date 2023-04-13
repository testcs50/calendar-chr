import React from 'react';
import { useRef, useEffect, useState } from "react";
import { Circle, Stat } from './styled';

const addRotValues = (count: number) => {
  const obj:any = {}
  let akk = 120
  const grap = 360 / count
  for (let i = 1; i <= count; i++) {
    obj[i] = {
      rot: akk,
      position: i,
    }
    akk += grap
  }
  return obj
};

interface IEclipseProps {
  currentGap: number;
  totalCount: number;
  setCurrentGap: any;
};

const Eclipse: React.FC<IEclipseProps> = ({ currentGap, totalCount, setCurrentGap }) => {
  const [values, setValues] = useState<Record<string, any>>(addRotValues(totalCount));

  const [rotatin, setRotation] = useState(0)
  const section1 = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    setRotation(values[currentGap].rot)
  }, [currentGap, totalCount]);

  const onRotate = (val: any) => {
    setCurrentGap(val.position)
    setRotation(val.rot)
  };

  return (
    <>
        <Circle
          rot={rotatin}
          className="circle"
          ref={section1}
        >
          {Object.values(values).map((k: any) => (
            <Stat
              active={currentGap === k.position}
              className={`stat`}
              onClick={() => onRotate(k)}
              i={k.position}
              key={k.position}
              total={Object.values(values).length}
            >
              {k.position}
            </Stat>
          ))}
        </Circle>
    </>
  )
};

export default Eclipse;
