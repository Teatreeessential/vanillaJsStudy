### 자바스크립트란?

- 인터렉티브한 웹페이지를 제작하기 위한 언어 

- 많은 브라우저는 자바스크립트를 처리하기위한 인터프리터가 내장되어있음(ex.구글의 v8 엔진)

- 최근에는 Node.js 와같은 플랫폼을 통해 back-end에서도 사용가능하며 데스크탑 애플리케이션도 제작이 가능한 언어



### es5 , es6, Ecmascript?

- javascript의 명세 스펙

- ECMAScript는 자바 스크립트를 이루는 코어(Core) 스크립트 언어로, 웹 환경에서만 호스트 되는 언어가 아니다. 

- 우리가 흔히 아는 javascript는 기존의 Ecmascript에서  + dom + bom을 확장한 개념

  ​	dom : 웹페이지의 html,xml 선택자를 조작하기 위한 인터페이스 (문서객체모델)

  ​	bom: 브라우저를 조작할 수 있는 인터페이스 (브라우저객체모델) 

  ​	자바스크립트의 전역 변수는 window의 속성으로 전역 함수는 window객체의 함수가 된다. 



### vanilla script?

- 자바스크립트의 역사

  과거 자바스크립트는 구현의 어려움, 언어의 모호성, cross browsing의 한계로 인하여 다루기 힘든 언어였다.

  이를 해결한 것이 각종 자바스크립트 라이브러리 였고 그 중 jquery라이브러리가 표준 처럼 사용되었다.

- 순수 자바스크립트

  시간이 흐르면서 자바스크립트는 브라우저의 호환성 문제와 버전업을 통하여 과거의 단점을 극복하게되었고

  브라우저의 호환성 및 가벼움과 같은 장점을 살리기 위해

  기존의 라이브러리 및 프레임워크를 사용하지 않은 오직 `순수 자바스크립트`를 바닐라 스크립트라 부르기 시작하였다. 

http://vanilla-js.com/ <-- 순수 자바스크립트와 다른 라이브러리의 속도 비교



### 강의 내용

- 자바스크립트 파일은 body의 가장 아래에 위치해야한다

- let const var

  const는 상수로서 runtime이후 변하지 않는 변수를 뜻함 let 과 var는 변수 

- javascript data type

  boolean, Number ,String

- Array

  ex) const arr = [1,2,3,"hi",5,true] 자바스크립트의 배열은 컬렉션의 리스트처럼 추가 삭제가 용이하고 다양한 타입의 데이터를 모두 담을 수 있다.

- `${}` 템플릿 문자열 

- `<div class="js-clock"></div>` html 내 class 네임은 js에서 이용할 것인지 css에서 이용할 것인지에 따라 접두사에 js등을 붙여준다.

- `setInterval(getTime(),1000);` 1초마다 특정함수를 실행하는 함수

- 선택자

  - document.querySelector - 해당되는 선택자 하나를 객체로 리턴

  - document.querySelectorAll - 해당되는 선택자 여러개를 배열로 리턴

  - document.getElementById - 해당되는 id 선택자를 하나 리턴

  - document.getElementBytagName -  해당되는 태그 네임을 통한 선택자 리턴

- localStorage 객체를 이용하여 일시적으로 데이터 값을 브라우저에 저장할 수 있다. ex)localStorage.setItem

- `form.addEventListener("submit",handleSubmit);`특정 문서객체에 이벤트를 거는 방법 

- `document.createElement("li");` 문서객체 생성하는 방법.


### 결론

바닐라 스크립트를 잘 아는것이 중요 

왜냐? 모든 라이브러리,프레임워크 역시 바닐라스크립트로 이루어져있기 때문 그리고 빠르고 가볍다.