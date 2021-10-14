import React from 'react';
import { Main } from '../Styled';
import { SiNotion } from 'react-icons/si';
import './Contact.css';

function Contact() {
  return (
    <Main>
      <h2>Contact</h2>
      <section className="description">
        <p>이력서와 자기소개서는 <a href="#"><span className="bold"><SiNotion /> notion</span></a>에서 확인 가능합니다. <br />
        그 외의 문의사항은 언제든 아래 폼으로 연락주시길 바랍니다.</p>
      </section>
      <section className="contact-info">
        <form action="">
          <table>
            <tbody>
            <tr>
              <th>성함</th>
              <td><input type="text" placeholder="홍길동" autoFocus required /></td>
            </tr>
            <tr>
              <th>이메일</th>
              <td><input type="email" placeholder="admin@naver.com" required /></td>
            </tr>
            <tr>
              <th>연락처</th>
              <td><input type="text" placeholder="010 0000 0000" required /></td>
            </tr>
            <tr>
              <th>제목</th>
              <td><input type="text" placeholder="제목" /></td>
            </tr>
            <tr className="content">
              <th>내용</th>
              <td>
                <textarea name="" id=""  placeholder="내용을 입력해주세요." required></textarea>
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