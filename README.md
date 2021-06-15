# ⚾ 미션 - 숫자 야구 게임


## 📝 이론 정리
- 참고 1: [모듈화(javascript.info)](https://ko.javascript.info/import-export)  
  참고 2: [모듈화(MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- 참고 1: [클로저](https://hyunseob.github.io/2016/08/30/javascript-closure/)  
  참고 2: [클로저(MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
### 모듈화 할 때 유의점
- 모듈을 포함한 스크립트를 HTML 파일에 포함한 경우, 로컬(예를 들어 file://URL)에서는 JS의 모듈 보안 요구사항으로 인해 CORS 오류가 발생한다. 따라서 모듈이 있는 HTML은 서버를 통해 테스트 해야 한다.
- 그 외 일반 스크립트와 다른 점은 [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts) 참고.
### 클로저
- 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
- 클로저에서 property로 선언된 것은 외부 scope에서도 접근하고 사용할 수 있다.
- 클로저를 이용하면 [private 변수, 메소드를 사용할 수 있다.](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures#%ED%81%B4%EB%A1%9C%EC%A0%80%EB%A5%BC_%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C_%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97_%EB%A9%94%EC%86%8C%EB%93%9C_private_method_%ED%9D%89%EB%82%B4%EB%82%B4%EA%B8%B0)
### 이 과제에서
- ``function BaseballGame()``은 ``new``를 이용하여 호출하는 경우 [생성자 함수](https://ko.javascript.info/constructor-new#ref-257)로 취급되고 ``this``는 생성자 함수가 암묵적으로 생성한 빈 객체에 바인딩된다. 따라서 ``const game = new BaseballGame(); console.log(game);``을 추가해보면 생성된 BaseballGame 객체의 this 정보를 확인할 수 있다.
- new를 사용하지 않고 ``BaseballGame()`` 함수를 호출하면 ``this``는 [전역 객체에 바인딩](https://poiemaweb.com/js-this#33-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98%EC%97%90-new-%EC%97%B0%EC%82%B0%EC%9E%90%EB%A5%BC-%EB%B6%99%EC%9D%B4%EC%A7%80-%EC%95%8A%EA%B3%A0-%ED%98%B8%EC%B6%9C%ED%95%A0-%EA%B2%BD%EC%9A%B0)된다.  
  그런데 ``function BaseballGame()``의 경우 첫 글자가 영문 대문자이므로 **생성자 함수라고 해석하는 것이 옳다.** 따라서 해당 함수의 내용은 생성자 함수의 맥락에서 작성해야 하고 사용자는 이 함수를 new 없이 호출하지 않아야 한다.
- 이 과제는 함수를 어떻게 구성하였는지, 함수를 어떤 방식으로 호출하는지에 따라 정상적으로 동작할 수도 아닐 수도 있다. 모듈화, 클로저, this 바인딩에 대해 정확히 이해하고 작성해야 한다. 기능을 모두 구현한 후 자세한 내용을 찾아보았더니 고칠 부분이 여럿 보였기 때문에 앞으로는 필요한 개념을 앞서 학습하고 코드를 작성하도록 해야겠다.

<br>

## ✅ 구현할 기능 목록

- 컴퓨터 측 정답 설정
  - 1부터 9까지
  - 서로 다른 수로 이루어진
  - 세 자리 숫자
- submit 이벤트 처리
  - 유저 측 입력 받기
- 입력값 확인
    1. 유효성 검사  
      - 잘못된 입력에 대한 에러 처리
    2. 힌트 생성
- 정답 처리
  - 메시지 + button 생성
  - button 클릭 시 리셋 이벤트 실행 후 메시지 + button 삭제

<br>

## 🎯 기능 요구사항

- 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
- 같은 수가 같은 자리에 있으면 `스트라이크`, 다른 자리에 있으면 `볼`, 같은 수가 전혀 없으면 `낫싱`이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
  - 예) 상대방(컴퓨터)의 수가 425일 때
  - 123을 제시한 경우 : 1스트라이크
  - 456을 제시한 경우 : 1볼 1스트라이크
  - 789를 제시한 경우 : 낫싱
- 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
- 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
- 게임을 종료한 후 게임을 다시 시작할 수 있다.
- 게임을 종료한 후 id가 `game-restart-button`인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다. 
  - `예) <button id="game-restart-button">재시작</button>`

<br>

## 💻 프로그래밍 실행 결과

![baseball_result](https://user-images.githubusercontent.com/50367798/100166088-32473e00-2eff-11eb-9454-5d45e648b37e.jpg)

<br>

## ✅ 프로그래밍 요구사항

- `play`(컴퓨터의 랜덤 값, 유저의 입력 값) 메서드를 만들어 게임을 진행한다.
- `play`메서드는 `String`으로 결과값을 return 한다.
- `index.js`에서 아래의 function 또는 class 형태를 활용한다.

```javascript
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

// 예시
play(123, 456); // '낫싱'
play(123, 345); // '1볼'
play(123, 432); // '2볼'
play(123, 312); // '3볼'
play(123, 145); // '1스트라이크'
play(123, 134); // '1볼 1스트라이크'
play(123, 132); // '2볼 1스트라이크'
play(123, 124); // '2스트라이크'
```

- 스트라이크와 볼이 같이 있는 경우 볼을 먼저쓰고, 스트라이크를 쓴다.
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.

<br>

## 📝 미션 저장소 및 진행 요구사항

- 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.

<br>

## 🔗 참고 링크

미션 진행이 어렵다면 아래 링크를 참고한다.

- DOM
  - [MDN DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)
- alert
  - [MDN alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)
- javascript module
  - [module](https://ko.javascript.info/modules-intro)
- event
  - [이벤트](https://ko.javascript.info/introduction-browser-events)
  - [이벤트 위임](https://ko.javascript.info/event-delegation)
