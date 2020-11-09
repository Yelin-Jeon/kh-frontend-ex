# 1. HTML

- HTML:HyperText Markup Language
- HTTP:Hypertext Transfer Protocol
    - HTML 전송

URL(Uniform Resource Locator)
- http://127.0.0.1:5500/20201109/index.html
    - 127.0.0.1 -주소
    - 5500  - 포트
    - /20201109/index.html -리소스 경로

http포트 - 기본 80
https포트 - 기본 443 

# 2. 주소창에 입력했을 때 찾아가는 과정

1. 주소로 입력
2. 로컬에 등록된 DNS IP 주소로 해당 도메인을 질의(query)함
   1) 해당 DNS에 정보가 캐싱된 경우는 바로 응답받음
   2) 없는 경우 상위 DNS에게 질의
3. 응답받은 IP주소로 접속(브라우저가)
4. 해당 서버에게 리소스 요청
5. 해당 서버가 리소스 응답(html, js, image, audio,video)
6. 브라우저는 html문서 받아서 렌더링(그림 그림)
   
# 3. HTML

- 태그 - 문서 기본 요소
  - <와 >로 감싸져있음
  - 권장: 태그는 소문자로
  - 단일 태그 형태: <태그/>
  - 일반 태그
    - <태그>내용</태그>
    - 여는 태그:<태그>
    - 닫는 태그:</태그>
- 계층 구조로 되어 있다(트리)
  - 포함관계 명확하게
- 태그는 속성을 갖고 있음
    - <태그 속성 = 값 속성 =값></태그>
  
# 4. html 태그

lang 속성

- ko : 한국어
- en : 영어
- ja : 일본어
- zh : 중국어

## 4.1. head 태그

SEO : Search Engine Optimization

- title -제목
- meta
    - 문자셋
    - 브라우저 호환성 표시
    - 검색 결과 실명 지정
    - 검색 결과 표시 문구 지정
    - 봇 제어

## 4.2. body

실제로 렌더링 되는 정보들

# 1. 텍스트 -블록

## 1.1. hn(n값 1 ~6)

heading, 제목 표시

## 1.2. p 태그

paragraph, 문단

- 스페이스 아무리 많이 입력해도 공백은 하나로 표시됨.
- 줄바꿈 없이 텍스트를 쭉 입력받을 수 있음.

## 1.3. br 태그

break, 줄바꿈

- 단일 태그임에 유의

## 1.4. hr 태그 - 수평줄

horizontal rule, 수평줄

## 1.5. blockquote - 인용구

인용구 

## 1.6. pre

공백을 그대로 출력

# 2. 텍스트 - 인라인

## 2.1. strong, b -굵게(bold) 처리
  
  텍스트 굵게 처리

## 2.2. em, i -이탤릭

## 2.3. q -인라인 인용구(quote)

## 2.4. mark - 형광펜

## 2.5. span - 아무것도 안함
-- 나중에 스타일링 할 때 사용

## 2.6. ruby -한자 위에 음 올리기 
HTML5の10の<ruby>新機能<rt>신기능</rt></ruby>あなたは<ruby>知<rt>지</rt></ruby>ってますか？

# 3.  목록

- 순서 없는 목록(unordered list)
- 순서 있는 목록(ordered list)

## 3.1. 순서 없는 목록

ul, lo

'''html
<ul>
    <li><리스트></li>
    <ul>
    <li><리스트></li>
    </ul>
</ul>
...

## 3.2. 순서 있는 목록

ol

## 3.3. 설명 있는 목록

dl(description list)
dt - 제목
dd -설명