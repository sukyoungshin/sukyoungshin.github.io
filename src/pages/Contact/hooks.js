import { useState } from 'react';
import axios from 'axios';

const useContactFormAPI = () => {

  // 입력받은 폼 데이터
  const [ userData, setUserData ] = useState({
    username: '',
    useremail: '',
    usercontact: '',
    emailtitle: '',
    emailcontent: ''
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;

    return setUserData({
    ...userData,
    [name] : value,
    })
  };

  // 폼제출여부
  const [ isSubmitted, setIsSubmitted ] = useState(false); 
  const submitHandler = (e) => {
    e.preventDefault();

    try {
      const postUserData = axios.post('https://sheet.best/api/sheets/7d47a005-f361-4999-8467-3dd29a6f813a', userData);
      setUserData(postUserData); // 제출된 정보 API로 전달
      setIsSubmitted(prev => !prev); // 제출완료
    } catch(err) {
      window.alert('전송이 실패되었습니다. 에러 : ', err);
    }
  };

  return {userData, changeHandler, isSubmitted, submitHandler};
};

export default useContactFormAPI;