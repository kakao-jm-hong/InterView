# 리팩토링

## 리팩터링: 첫 번째 예시

### 네단계의 수행 단계
- 반복문 쪼개기로 변수 값을 누적시키는 부분을 분리한다.
- 문장 슬라이드하기로 변수 초기화 문장을 변수 값 누적 코드 바로 앞에 옮긴다.
- 함수 추출하기로 적립 포인트 계산 부분을 별도 함수로 추출한다.
- 변수 인라인하기로 ** 변수를 제거한다.

### 단계 쪼개기
- 필요한 데이터 처리
- HTML로 표현