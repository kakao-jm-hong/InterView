# junit

기본 사용법으로 시작해서 junit 기술들을 하나하나 사용해보겠습니다.


# 기본 사용방법

## dependency
```
		<!-- Test -->
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<scope>test</scope>
		</dependency>
		<!-- Spring Test -->
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-test</artifactId>
		</dependency>
```


## testVO
```ß
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter@Setter@AllArgsConstructor@NoArgsConstructor@Builder
public class testVO {
	long id;
	String name;
	int age;
}

```

## MainApi
```
@RestController
public class MainApi {
	
	@GetMapping("test/{id}")
	public String getTestVO(@PathVariable long id) {
		return testVO.builder().id(id)
				.age(23)
				.name("testName")
				.toString();
	}

}
```

## MainApiTest
```
@RunWith(SpringRunner.class)
@WebMvcTest(MainApi.class)
class MainApiTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Before
	public void setUp() {
		System.out.println("Before");
	}
	
	@Test
	void test1() {
		assertTrue(true);
		
	}
	
	
	@Test
	void test() throws Exception {
		
		RequestBuilder reqBuilder = MockMvcRequestBuilders.get("/test/14").contentType(org.springframework.http.MediaType.APPLICATION_JSON);
		mockMvc.perform(reqBuilder).andExpect(status().isOk()).andDo(print());
				
	}

}
```