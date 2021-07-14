let age = 10;

const o = {
    age: 10,
    // 데이터가 코드화 한다.
    ['myName']: '김',
    ['123my Name']: '김',
}
// 데이터로 만들어진식별자.
o.myName;
o['123my Name'];