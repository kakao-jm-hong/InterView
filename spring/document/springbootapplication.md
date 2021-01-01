# @SpringBootApplication 이란

@SpringBootAplication 어노테이션은 auto-configuration을 담당합니다.
다시 이야기 하자면 @SpringBootAplication 어노테이션으로 인해 스프링 부트의 자동 설정, 스프링 Bean 읽기와 생성이 모두 자동으로 설정됩니다.

@SpringBootAplication 어노테이션이 있는 위치부터 설정을 읽어가기 때문에 이 어노테이션을 포함한 클래스는 항상 프로젝트의 최상단에 위치해야만 합니다.

 

@SpringBootApplication을 이용하면 위 코드를 보면 알 수 있듯이 세가지의 어노테이션을 포함하고 있습니다.

- @EnableAutoConfiguration

- @ComponentScan

- @SpringBootConfiguration

<br>
<br>

# @EnableAutoConfiguration – 설정 자동 등록하기
@EnableAutoConfiguration은 Spring boot의 핵심으로써, 미리 정의되어 있는 Bean들을 가져와서 등록해줍니다.

미리 정의되어 있는 Bean들은 spring-boot-autoconfigure > META-INF > spring.factories에 위치하여 있습니다.

스프링에서 관리하는 POJO를 ‘빈(Bean)’이라고 합니다.

<br>
@ComponentScan은 현재 패키지 이하에서 아래와 같은 어노테이션이 붙어 있는 클래스들을 찾아서 빈으로 등록하는 역할을 합니다.
<br>

* @Component
* @Configuration
* @Repository
* @Service
* @Controller
* @RestController

<br>

# @SpringBootConfiguration - @Configuration의 용도
 

@Configuration은 spring 에 빈 팩토리를 위한 오브젝트를 설정을 담당하는 클래스라고 인식 할 수 있도록 알려주는 어노테이션입니다.

@SpringBootConfiguration은 @Configuration의 대안이라고 할 수 있습니다.

@Configuration와 거의 같은 일을 하지만 가장 큰 차이점이라고 하면 @SpringBootConfiguration을 사용하면 구성을 자동으로 찾을 수 있다는 것 입니다. 이것은 단위 또는 통합 테스트에 특히 유용 할 수 있습니다.