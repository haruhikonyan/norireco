import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
// import { Tooltip } from 'reactstrap'
// import { faCopy } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CopyClipboard: React.FC<{ copyText: string }> = React.memo(({ copyText }) => {
  return (
    <CopyToClipboard text={copyText}>
      <button type='button' className='btn btn-success'>
        クリップボードにコピー
      </button>
    </CopyToClipboard>
  );
});

CopyClipboard.displayName = 'CopyClipboard';

export default CopyClipboard;
