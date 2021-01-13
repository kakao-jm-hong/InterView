# RestTemplate
<table style="border-collapse: collapse; width: 100%;" border="1" data-ke-style="style12"><tbody><tr><td><p><span style="color: #000000;">메서드</span></p></td><td><p><span style="color: #000000;">HTTP</span></p></td><td><p><span style="color: #000000;">설명</span></p></td></tr><tr><td><p>getForObject</p></td><td><p>GET</p></td><td><p>주어진 URL 주소로 HTTP GET 메서드로 객체로 결과를 반환받는다</p></td></tr><tr><td><p>getForEntity</p></td><td><p>GET</p></td><td><p>주어진 URL 주소로 HTTP GET 메서드로 결과는 ResponseEntity로 반환받는다</p></td></tr><tr><td><p>postForLocation</p></td><td><p>POST</p></td><td><p>POST 요청을 보내고 결과로 헤더에 저장된 URI를 결과로 반환받는다</p></td></tr><tr><td><p>postForObject</p></td><td><p>POST</p></td><td><p>POST 요청을 보내고 객체로 결과를 반환받는다</p></td></tr><tr><td><p>postForEntity</p></td><td><p>POST</p></td><td><p>POST 요청을 보내고 결과로 ResponseEntity로 반환받는다</p></td></tr><tr><td><p>delete</p></td><td><p>DELETE</p></td><td><p>주어진 URL 주소로 HTTP DELETE 메서드를 실행한다</p></td></tr><tr><td><p>headForHeaders</p></td><td><p>HEADER</p></td><td><p>헤더의 모든 정보를 얻을 수 있으면 HTTP HEAD 메서드를 사용한다</p></td></tr><tr><td><p>put</p></td><td><p>PUT</p></td><td><p>주어진 URL 주소로 HTTP PUT 메서드를 실행한다</p></td></tr><tr><td><p>patchForObject</p></td><td><p>PATCH</p></td><td><p>주어진 URL 주소로 HTTP PATCH 메서드를 실행한다</p></td></tr><tr><td><p>optionsForAllow</p></td><td><p>OPTIONS</p></td><td><p>주어진 URL 주소에서 지원하는 HTTP 메서드를 조회한다</p></td></tr><tr><td><p>exchange</p></td><td><p>any</p></td><td><p>HTTP 헤더를 새로 만들 수 있고 어떤 HTTP 메서드도 사용가능하다</p></td></tr><tr><td><p>execute</p></td><td><p>any</p></td><td><p>Request/Response 콜백을 수정할 수 있다</p></td></tr></tbody></table>

<br><br>

# RestTemplate의 동작원리
![](2021-01-13-07-46-55.png)
1. 어플리케이션이 RestTemplate를 생성하고, URI, HTTP메소드 등의 헤더를 담아 요청한다.
2. RestTemplate 는 HttpMessageConverter 를 사용하여 requestEntity 를 요청메세지로 변환한다.
3. RestTemplate 는 ClientHttpRequestFactory 로 부터 ClientHttpRequest 를 가져와서 요청을 보낸다.
4. ClientHttpRequest 는 요청메시지를 만들어 HTTP 프로토콜을 통해 서버와 통신한다.
5. RestTemplate 는 ResponseErrorHandler 로 오류를 확인하고 있다면 처리로직을 태운다.
6. ResponseErrorHandler 는 오류가 있다면 ClientHttpResponse 에서 응답데이터를 가져와서 처리한다.
7. RestTemplate 는 HttpMessageConverter 를 이용해서 응답메세지를 Java object(Class responseType)로 변환한다.
8. 어플리케이션에 반환한다.

