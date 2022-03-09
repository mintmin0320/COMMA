import React, { useState, forwardRef, useEffect } from 'react';
import theme from '../../../styles/theme';
import _axios from '../../../utils/axios';
import Button from '../Button';
import Input from './Input';

const AutoComplete = forwardRef(
  (
    {
      loadData, // 사용할 페이지 data
      setValueInfo, // 사용할 페이지 함수
      checkedValueInfo, // 사용할 페이지에 check된 함수 값 넘김
      filterValue1, // 검색 value1
      filterValue2, // 검색 value2
      onClickInput1,
      onClickButton1,
      isCheck, // checkbox
      button1,
      button2,

      settingValue1,
      settingValue2,

      kind,
      required,
      readOnly,
      inputWidth,
      inputHeight,
      inputMargin,
      inputWidth2,
      inputHeight2,
      boxMargin,
      inputMargin2,
      placeholder,
    },
    ref,
  ) => {
    const { ref1 } = ref || '';
    const [state, setState] = useState({
      value: settingValue1 ? settingValue1 : '', // first input value
      value2: settingValue2 ? settingValue2 : '', // second input value
      result: [],
    });

    // autoComplete
    const _onChangeHandler = (text) => {
      let matches = [];

      if (text.length > 0) {
        matches = loadData?.filter((element) => {
          const regex = new RegExp(`${text}`, 'gi');
          const _element1 = element[`${filterValue1}`];
          const _element2 = element[`${filterValue2}`];

          // filterValue1 또는 filterValue2 검색
          return _element1.match(regex) || _element2.match(regex);
        });
      }

      setState({
        ...state,
        value2: text,
        result: matches,
      });
    };

    // 결과 값 선택
    const _onResultHandler = (filterValue1, filterValue2) => {
      setTimeout(() => {
        setState({
          ...state,
          value: filterValue1,
          result: [],
          value2: '',
        });
      }, 100);

      // 사용할 페이지의 함수에 변수 저장.
      setValueInfo && setValueInfo(filterValue1, filterValue2);
    };

    // 결과 값 닫기
    const _onResultClose = () => {
      setTimeout(() => {
        setState({
          ...state,
          result: [],
        });
      }, 100);
    };

    // filterValue 입력 값 color 변경
    const _resultData = (data1, data2) => {
      let writeData = [];
      let originData1 = [];
      let originData2 = [];

      for (let i = 0; i < result.length; i++) {
        // filterValue result 시작점 > 첫 번째 자리
        if (data1.indexOf(value2) == 0) {
          writeData.push(data1.substr(data1.indexOf(value2), value2.length));
          originData2.push(data1.substr(value2.length));

          return (
            <>
              <strong style={{ color: `${theme.colors.red}` }}>{writeData}</strong>
              {originData2} / {data2}
            </>
          );

          // filterValue result 시작점 > 두 번째 자리 이상
        } else if (data1.indexOf(value2) >= 1) {
          originData1.push(data1.substr(0, data1.indexOf(value2)));
          writeData.push(data1.substr(data1.indexOf(value2), value2.length));
          originData2.push(data1.substr(data1.indexOf(value2), data1.length));

          // 중복 방지
          if (writeData[0].length >= 1) originData2 = originData2[0].substr(writeData[0].length);

          return (
            <>
              {originData1}
              <strong style={{ color: `${theme.colors.red}` }}>{writeData}</strong>
              {originData2} / {data2}
            </>
          );
        }
      }
    };

    // Checkbox toggle
    const _handleCheckbox = (e, i) => {
      state.result[i][e.target.name] = e.target.value;

      checkedValueInfo(state.result, i);
    };

    const _onClickButton1 = () => {
      onClickButton1();

      setState({
        ...state,
        value2: '',
        result: [],
      });
    };

    const { value, value2, result } = state;

    return (
      <div className={kind ? kind : 'autoComplete-01'}>
        <div
          style={{ margin: boxMargin }}
          className="autoComplete-first-input-wrap"
          onClick={onClickInput1}
        >
          <Input
            className="autoComplete-first-input"
            type="text"
            value={value}
            width={inputWidth ? inputWidth : '120px'}
            height={inputHeight ? inputHeight : '30px'}
            margin={inputMargin ? inputMargin : '0 0 0 20px'}
            required={required === false ? false : true}
            readOnly={readOnly}
          />

          {button1 && (
            <Button type="button" with="60px" height="28px" kind="btn_23 autoComplete-button1">
              {button1}
            </Button>
          )}
        </div>

        <div className="autoComplete-second-input" ref={ref1}>
          <Input
            type="text"
            value={value2}
            onChange={(e) => _onChangeHandler(e.target.value)}
            onBlur={_onResultClose}
            placeholder={placeholder ? placeholder : '회원ID, 회원명 입력'}
            width={inputWidth2 ? inputWidth2 : '150px'}
            height={inputHeight2 ? inputHeight2 : '30px'}
            margin={inputMargin2 ? inputMargin2 : '0 0 0 10px'}
          />

          {result.length > 0 && (
            <div className="autoComplete-result-data">
              {result.map((item, i) => (
                <div className="autoComplete-checked-row" key={i}>
                  {isCheck && (
                    <>
                      <input name={i} type="checkbox" onChange={(e) => _handleCheckbox(e, i)} />
                    </>
                  )}

                  <p
                    onClick={() =>
                      _onResultHandler(item[`${filterValue1}`], item[`${filterValue2}`])
                    }
                  >
                    {item[`${filterValue1}`].includes(value2) ? (
                      <>{_resultData(item[`${filterValue1}`], item[`${filterValue2}`])}</>
                    ) : (
                      <>{_resultData(item[`${filterValue2}`], item[`${filterValue1}`])}</>
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}

          {button2 && (
            <div className="autoComplete-button2-wrap">
              <Button
                type="button"
                with="60px"
                height="28px"
                kind="btn_16 autoComplete-button2"
                onClickHandler={_onClickButton1}
              >
                {button2}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default AutoComplete;
