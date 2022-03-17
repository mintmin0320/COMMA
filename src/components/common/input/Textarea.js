import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import _isMobile from '../../../utils/isMobile';

const Textarea = ({ state, kind, handleTextarea, minRows, maxRows, height}) => {
  const isMobile = _isMobile();

  return (
    <div className={kind ? kind : 'textarea-autosize-01'}>
      <TextareaAutosize
        name="descript"
        value={state.descript || ''}
        onChange={handleTextarea}
        minRows={`${minRows} ? ${minRows} : 2`}
        maxRows={`${maxRows} ? ${maxRows} : 2`}
        style={{
          boxSizing: 'border-box',
          width: isMobile ? '100%' : '360px',
          height: `${height}`,
        }}
      />
    </div>
  );
};

export default Textarea;
