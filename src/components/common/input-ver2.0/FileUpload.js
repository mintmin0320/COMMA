import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import _axios from 'axios';

const FileUpload = (props) => {
  const kind = props.kind;
  const fileType = props.fileType;
  const savePath = props.savePath;
  const setFileInfo = props.setFileInfo;
  const setRemove = props.setRemove;
  const protocol = window.location.protocol;
  const uploadTitle = props.uploadTitle;
  const removeText = props.removeText;
  const index = props.index === undefined ? '' : props.index;
  const [state, setState] = useState({
    uploadPercentage: 0, // loading
    // 파일 이름
    fileName: '',
  });
  const _handleChangeFile = async (event) => {
    const formData = new FormData();
    formData.append('fileType', fileType);
    formData.append('savePath', savePath);
    formData.append('files', event.target.files[0]);
    // loading
    const options = {
      onUploadProgress: (progressEvent) => {
        // console.log(progressEvent)
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        // console.log(percent);

        if (percent < 100) {
          setState({
            ...state,
            uploadPercentage: percent, // loading 진행중
          });
        }
      },
    };

    await _axios
      .post(`${protocol}//spiderplatform.co.kr/utils/fileUpload.php`, formData, options, {
        headers: {
          'Content-Type': `multipart/form-data; `,
        },
      })
      .then((response) => {
        if (response.data) {
          setFileInfo(response.data);

          setState({
            ...state,
            fileName: response.data.saveName, // 파일 이름
            uploadPercentage: 100, // loading 100%
          });

          setTimeout(() => {
            setState({
              ...state,
              fileName: response.data.saveName,
              uploadPercentage: 0, // loading 초기화
            });
          }, 1000);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const { fileName, uploadPercentage } = state;

  return (
    <div className={kind ? kind : 'fileUp-01'}>
      {fileType === 'file' && !removeText && (
        <div className="fileUpload-input-wrap">
          <input type="text" value={fileName} placeholder={'파일 업로드 제한 10MB'} />

          {uploadPercentage > 0 && (
            <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} />
          )}
        </div>
      )}

      <label htmlFor={`file${index}`}>{uploadTitle ? uploadTitle : '찾아보기'}</label>
      <input
        style={{ display: 'none' }}
        type="file"
        id={`file${index}`}
        onChange={_handleChangeFile}
        multiple="multiple"
      />
    </div>
  );
};

export default FileUpload;
