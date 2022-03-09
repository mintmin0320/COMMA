// 입력값이 변할 때
export const handleInputChange = (e, state, setState) => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};

// 휴대폰 번호 입력 함수
export const handlePhone = (e, ref, state, setState) => {
  const value = ref.current.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result;
  result = "";  

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 3:
        result += "-";
        break;
      case 7:
        result += "-";
        break;

      default:
        break;
    }

    result += value[i];
  }

  ref.current.value = result;

  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};

// 주민등록번호 입력 함수
export const handleResidentNumber = (e, ref, state, setState) => {
  const value = ref.current.value.replace(/\D+/g, "");
  const numberLength = 7;

  let result;
  result = "";  

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 6:
        result += "-";
        break;
      default:
        break;
    }

    result += value[i];
  }

  ref.current.value = result;

  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};

// 생년월일 입력 함수
export const handleBirthday = (e, ref, state, setState) => {
  const value = ref.current.value.replace(/\D+/g, "");
  const numberLength = 8;

  let result;
  result = "";  

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 4:
        result += "-";
        break;
      case 6:
        result += "-";
        break;
      default:
        break;
    }

    result += value[i];
  }

  ref.current.value = result;

  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};

// 카드유효기간 입력 함수 
export const handleCardValid = (e, ref, state, setState) => {
  const value = ref.current.value.replace(/\D+/g, "");
  const numberLength = 4;

  let result;
  result = "";  

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 2:
        result += "/";
        break;
      default:
        break;
    }

    result += value[i];
  }

  ref.current.value = result;

  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};