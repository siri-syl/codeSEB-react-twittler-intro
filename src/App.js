import React, { useState } from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
import { dummyNotice } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = (props) => {

  const {handleClick} = props;

  return (
    <section className="sidebar">
      {/* TODO : 메세지 아이콘을 작성합니다. */}
      <i className="far fa-comment-dots" onClick={handleClick}></i>
      <i className="far fa-bell" onClick={handleClick}></i>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total: {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer> 
    <div>Copyright @ 2021 Code States</div>
  </footer>
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const isParkHacker = (tweet.username === 'parkhacker') ?
        'tweet__username tweet__username--purple' : 'tweet__username';


        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src={tweet.picture}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                {/* TODO : 유져 이름이 있어야 합니다. */}
                <span className={isParkHacker}>{tweet.username}</span>
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const NoticeCounter = () => {
  return (
    <div className="notificationBar__message">
        <span><i className="fas fa-calendar-check"></i>알림을 확인하세요</span>
    </div>
  );
};

const Notices = () => {
  return (
    <ul className="notifications">
      {dummyNotice.map((notice) => {

        return (
          <li className="notification" key={notice.id}>
            <i className="fas fa-caret-right"></i>
            <div className="notification__message">{notice.content}
              <div className='notification__content'></div>
            </div>
          </li>
        );
        }
        )
      }
    </ul>
  );
};

const Features = () => {

  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const NoticeFeatures = () => {

  return (
    <section className="features">
      <div className="notificationBar__container">
        <div className="notificationBar__wrapper">
          <div className="notificationBar__icon"></div>
          <NoticeCounter />
        </div>
      </div>
      <Notices />
      <Footer />
    </section>
  );
};

const App = () => {

  const [page, setPage] = useState("tweet");
  
  const handleonClick = (event) => {
    if(event.target.classList.contains("fa-comment-dots")){
      // 트윗 페이지
      setPage("tweet");
    }else{
      // 노티스 페이지
      setPage("notification");
    };
  };

  return (
    <div className="App">
      <main>
        <Sidebar handleClick={handleonClick} />
        {(page === "tweet") ?
        <Features /> :
        <NoticeFeatures />
        }
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
