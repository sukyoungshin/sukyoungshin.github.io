import React, { useState } from 'react';
import axios from 'axios';
import { SiNotion } from 'react-icons/si';
import { Main } from '../Styled';
import './Contact.css';

function Contact() {

  const [ userData, setUserData ] = useState({
    username: '',
    useremail: '',
    usercontact: '',
    emailtitle: '',
    emailcontent: ''
  });
  const { username, useremail, usercontact, emailtitle, emailcontent } = userData;

  const changeHandler = (e) => {
    const { value, name } = e.target;

    return setUserData({
    ...userData,
    [name] : value,
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      const postUserData = axios.post('https://sheet.best/api/sheets/7d47a005-f361-4999-8467-3dd29a6f813a', userData);
      setUserData(postUserData);
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Main>
      <h2>Contact</h2>
      <section className="description">
        <p>
          이력서와 자기소개서는&nbsp;
          <a href="https://www.notion.so/Front-End-_-8e50ff3d1f934c378982a264f27e307e" target="_blank" rel="noreferrer" title="노션 바로가기">
            <span className="bold"><SiNotion /> notion</span>
          </a> 
          에서 확인 가능합니다. <br />
        그 외의 문의사항은 언제든 아래 폼으로 연락주시길 바랍니다.</p>
      </section>
      
      <section className="contact-info">
        <form action="" onSubmit={submitHandler}>
          <table>
            <tbody>
            <tr>
              <th>
                <label htmlFor="username">성함</label>
              </th>
              <td>
                <input type="text" id="username" name="username" value={username} onChange={changeHandler} placeholder="홍길동" autoFocus required />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="useremail">이메일</label>
              </th>
              <td>
                <input type="email" id="useremail" name="useremail" value={useremail} onChange={changeHandler} placeholder="admin@naver.com" required />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="usercontact">연락처</label>
              </th>
              <td>
                <input type="text" id="usercontact" name="usercontact" value={usercontact} onChange={changeHandler} placeholder="010 0000 0000" required />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="emailtitle">제목</label>
              </th>
              <td>
                <input type="text" id="emailtitle" name="emailtitle" value={emailtitle} onChange={changeHandler} placeholder="제목" />
              </td>
            </tr>
            <tr className="content">
              <th>
                <label htmlFor="emailcontent">내용</label>
              </th>
              <td>
                <textarea id="emailcontent" name="emailcontent" value={emailcontent} onChange={changeHandler} placeholder="내용을 입력해주세요." required></textarea>
              </td>
            </tr>
            </tbody>
          </table> 

          <button type="submit">제출</button>

        </form>
      </section>

      <footer>
        &copy; 2021, SU-KYOUNG SHIN. ALL RIGHTS ARE RESERVED
      </footer>
    </Main>
  );
};

export default Contact;