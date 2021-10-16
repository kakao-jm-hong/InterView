# TypeScript

## 01

### 설정
```
tsc --init
```

### noImplicitAny
- 명시적으로 any또는 더 분명한 타입의 설정 여부
- 되도록이면 설정하는것이 개발에 용이하다.

### strictNullChecks
- null과 undefined가 모든 타입에서 허용되는지 확인하는 설정입니다.

### 요약
- 타입스크립트 컴파일러는 언어의 핵심 요소에 영향을 미치는 몇 가지 설정을 포함하고 있습니다.
- 타입스크립트 설정은 커맨드 라인을 이용하기보다는 tsconfig.json을 이용하는게 좋습니다.
- 자바스크립트 프로젝트를 타입스크리트로 전환하는 게 아니라면 noImplictAny를 설정합니다.
- undefined는 객체가 아닙니다. 방지를 위해 strictNullChecks를 설정
- 타입스크립트에서 엄격한 체크를 하고 싶다면 strict 설정을 고려해야 합니다.

