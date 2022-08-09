import React from 'react';
import classnames from 'classnames';

type Props = {
  partList: any;
};

const PartList: React.FC<Props> = React.memo(({ partList }) => {
  return (
    <>
      {Object.entries(partList).map(([title, parts]) => {
        return (
          <>
            <p className='mt-3'>{title}</p>
            <div className='d-flex gap-2'>
              {Object.entries(parts as any).map(([part, bool]) => {
                return (
                  <span
                    key={part}
                    className={classnames({ 'text-muted': !bool }, { 'fw-bold': bool })}
                  >
                    {part}
                  </span>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
});
PartList.displayName = 'PartList';

export default PartList;
