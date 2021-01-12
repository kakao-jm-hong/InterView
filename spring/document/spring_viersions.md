# Spring 버전별 특징

Spring 3버전부터 5버전까지 사용해 보았지만 항상 최신버전을 사용해 왔었고 내가 하는 프로젝트내에서는 그차이를 느끼지 못했다. 이번에 그차이점을 알고 그에 관련된 기능들을 사용해 보려고 한다. 알고 있는 내용에 대해서는 예제를 안만들 것이고 <strong>사용해보지 않은 기능들을 다룰려고 합니다.</strong>

<br>

## Spring 3.2
- Java 5의 기능 (제너릭, 가변 매개변수 등)을 사용하여 개정되었습니다.
  - 이로 인해서 BeanFactory 등 핵심 API가 업데이트 되었습니다.
- [@Async](./Async.md) 주석을 통해 비동기 메서드 호출을 지원하기 시작했습니다.
- 하나의 Spring.jar로 제공하던 것을 여러 Spring 모듈의 jar 파일로 나누어 제공하기 시작했습니다.
    - (Spring Core, Spring-web 등)
- SPEL(Spring Expression Language)가 도입되어 XML 및 Annotation 기반 Bean 정의에서 사용할 수 있게 되었습니다.
    - 환경설정 파일에서 값을 가져올 수 있게 되었습니다.
- @configuration , @Bean 등을 이용해 [메타 데이터](https://ko.wikipedia.org/wiki/메타데이터)를 설정 할 수 있습니다.
- Bean을 XML 형태로 관리할 수 있습니다. OXM(Object Xml Mapping)
- REST API 
  - Annotation 기반 확장 기술
  - [RestTemplate]() 지원 합니다.
- H2 지원
- 2016년 12월 31일 개발 및 지원 중단됩니다.

## Spring 4.3
- Java 8 기능을 완전히 지원하기 시작했습니다.
  - Java 6, Java 7 의 고유 기능 지원합니다.
- [Starter Pack]()의 등장으로 초기 설정이 수월해졌습니다.
- [Groovy]()를 통한 Bean 설정이 가능하다.
- [Core Container]() 들의 기능 지원이 확대되었다.
  - [커스텀 어노테이션](), [메타 어노테이션 지원]()
  - [@Oreder]() 어노테이션을 통해 배열과 리스트 형태의 Bean 을 정렬 할 수 있습니다.
  - [@Lazy]() 어노테이션을 통해 Lazy Injection이 가능하다.
- @RestController 지원
- WebSocekt STOMP 등의 프로토콜을 지원
- Framework 레벨에서 테스트 유틸리티를 지원합니다.
- 2020년 12월 31일 개발 및 지원 종료

## Spring 5.x
- 제너릭 , 람다 가독성 향상되었습니다.
- JDK 9 와도 호환이 가능합니다.
- [Jackson]()2.9 , [Protobuf]()3 , [Reactor]()3.1 과의 호환 추가
- Spring WebFlux 추가, 비동기와 넌-블로킹 이벤트 루프 모델 사용 가능
- <strong>Kotlin</strong> 지원
- [Junit 5]지원

## Spring 5.1
- 2021년 말까지 지원

## Spring 5.2
- 2021년 말까지 지원
- 
<br><br>

# Spring Boot
## Spring Boot 1.1 (Release 2014.05)
* Java 1.6 이상
* Spring Framework 4.0.5
* Tomcat 7.0.54, Hibernate 4.3.1

## Spring Boot 1.5 (Release 2017.01)
* Java 8 이상
* Spring Framework 4.3
* Tomcat 8.5, Hibernate 5.0
* ConfigurationProperties 에 JSR303 지원

## Spring Boot 2.0.0 (Release 2018.03)
* Java 8 , Java 9 tested
* Spring Framework 5.0
* Tomcat 8.5, Hibernate 5.2

## Spring Boot 2.1.0(Release 2018.10)
* Java 11 Support (Java 8 ~ 11)
* Spring Framework 5.1
* Tomcat 9, Hibernate 5.3

(ง •̀_•́)ง 린크 내용은 예제를 만들어 추가 할 내용입니다.