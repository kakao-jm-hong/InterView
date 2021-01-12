# Java 비동기방식 처리

특정 작업을 하는 RedbinService가 있습니다.
```
public class RedbinService {
	public void method1(final String message) {
        // TODO 특정 작업
	}
}
```

스레드를 이용해서 비동기식으로 처리하는 방법입니다.
```
public class RedbinService {
	public void method1(final String message) {
		new Thread(new Runnable() {
			
			@Override
			public void run() {
				// TODO 특정작업
				
			}
		}).start();
	}
}
```
하지만 이방법은 많은 Thread를 관리할 수 없습니다.
동시에 여러개의 호출이 이루어진다면 그 수만큼 Thread가 생성되는 방식입니다.
JDK 1.5 부터 제공하는 java.util.concurrent.ExecutorService를 사용합니다.

```
public class RedbinService {	
	static ExecutorService executorService = Executors.newFixedThreadPool(10);
	
	public void method1(final String message) {
		executorService.submit(new Runnable() {
			
			@Override
			public void run() {
				// TODO 작업공간
			}
		});
	}
}
```
이방법의 문제점은 호출하는 스레드마다 같은 동작을 한다는 점 다른 동작을위한 메서드를 재정의 해야합니다.

# @Async

이러한 복잡한 기능들은 @Async annotation을 이용하면 method는 비동기방식으로 처리가됩니다.
```
@EnableAsync
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
```
```
@Async
public void method1(String message) {
    // do something
}
```

하지만 이 방법도 스레드관리는 이 방법도 이뤄지지 않습니다.

# @Async with ThreadPoolTaskExecutor
Thread Pool을 이용해서 thread를 관리하는 방식입니다.
아래의 설정클래스를 선언하여 다시 메소드를 관리합니다.
<br>
Thread Pool의 종류를 여러개 설정하고자 한다면 SpringAsyncConfig 안에 bean을 여러개 만들고 @Async를 설정시 원하는 bean의 이름으로 설정하시면 됩니다.
```
import java.util.concurrent.Executor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
@EnableAsync
public class SpringAsyncConfig {

    @Bean(name = "threadPoolTaskExecutor")
    public Executor threadPoolTaskExecutor() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(3);
        taskExecutor.setMaxPoolSize(30);
        taskExecutor.setQueueCapacity(10);
        taskExecutor.setThreadNamePrefix("Executor-");
        taskExecutor.initialize();
        return taskExecutor;
    }

}
```
```
public class GreetingService {
	
    @Async("threadPoolTaskExecutor")
    public void method1() throws Exception {
        // do something
    }

}
```

# @Async with Handler
비동기로 실행되는 메소드가 종료시 exception이 발생한다면 사용자는 알 수가 업습니다.
해당 thread만 죽고 전체 thread는 영향이 없습니다. Handler를 이용해서 exception에 대한 처리 방법이 있습니다.

핸들러를 사용한다면 WAS 종료시 threadPoolTaskExecutor가 정상적으로 종료되도록 destroyMethod을 설정합니다.

<br>

# return type
비동기 방식에서 void가 아닌 다른 return type은 Future라는 매개변수로 전달합니다.
```
	@Async("threadPoolTaskExecutor")
	public Future<String> method1(String message) throws Exception {
		// do something
		return new AsyncResult<String>("Success");
	
	}
```

# TEST

## main문에서는 동기식으로 값을  출력한다. 
```
private static final Logger logger = LoggerFactory.getLogger(RedbinService.class);
//@Async
public void method1(int i) throws Exception {
	// do something
	Thread.sleep((int)Math.random()*1000L);
	logger.info("i = " + i);
}
```
```
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9964
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9965
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9966
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9967
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9968
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9969
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9970
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9971
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9972
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9973
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9974
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9975
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9976
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9977
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.
```

## main문에서는 비동기적으로 값을 실행한다.

```
private static final Logger logger = LoggerFactory.getLogger(RedbinService.class);
@Async
public void method1(int i) throws Exception {
	// do something
	Thread.sleep((int)Math.random()*1000L);
	logger.info("i = " + i);
}
```
```
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9967
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9965
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.RedbinService   : i = 9964
2021-01-13 06:14:51.827  INFO 15581 --- [nio-8080-exec-1] com.example.demo.service.
```



