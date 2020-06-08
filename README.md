# Vue JS

## I. 핵심

### 1. SPA

Single Page Application

- 페이지 전환 없이 (새로운 요청 응답없이) UI 변화
- 왜?
  1. 사용자 편의
  2. 서버 리소스

### 2. MVVM

Model-ViewModel-View

- MVC (Model-View-Control)와의 비교

### 3. Declarative Programming

선언적 프로그래밍 <-> 명령형 프로그래밍 (Imperative Programming)

- 명령형(절차적): 변화를 단계적으로 명령
  - Vanilla JavaScript DOM 조작
- 선언형: 변화를 선언 (그림그리기)
  - (프레임워크를 통한 조작)

## II. Vue JS의 요소

### 1. Directive (지시자)

- `v-for`: 배열과 같은 데이터를 순회
- `v-if`: 조건부 랜더링
- `v-else`: 조건부 랜더링
- `v-on`: 이벤트 바인딩
- `v-model`: 양방향 데이터 바인딩
