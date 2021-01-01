# 스프링 의존성 주입 방식 3가지

## 생성자 주입
```
@Component
public class SampleController {
    private SampleRepository sampleRepository;
 
    @Autowired
    public SampleController(SampleRepository sampleRepository) {
        this.sampleRepository = sampleRepository;
    }
}
```

## 필드 주입
```
@Component
public class SampleController {
    @Autowired
    private SampleRepository sampleRepository;
}

```

## Setter 주입
```
@Component
public class SampleController {
    private SampleRepository sampleRepository;
 
    @Autowired
    public void setSampleRepository(SampleRepository sampleRepository) {
        this.sampleRepository = sampleRepository;
    }
}

```

<br><br>

Spring framework reference에서 권장하는 방법은 생성자를 통한 주입이다.

생성자를 사용하는 방법이 좋은 이유는 필수적으로 사용해야하는 의존성 없이는 인스턴스를 만들지 못하도록 강제할 수 있기 때문이다.