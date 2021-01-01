# 데이터베이스 Isolation Level (고립수준)

## 데이터베이스의 읽기 이상 현상 (Read Phenomena)
<br>

|유형|내용|해결방안|
|------|-----|---------|
|Dirty Read|트랜잭션 T1 에서 A = 5 로 Update 하고 아직 commit 를 않았는데 다른 트랜잭션  T2가 이 A 값을 읽을 수 있도록 허용하는 경우 Dirty Read가 발생 할수 있다. 즉.   T1이 Update를 수행한 후 아직 commit 도 안했는데 다른 트랜잭션 T2가 A 를 select 했을 때 5 가 나올 경우 , T1 트랜잭션이 rollback을 했을 경우 결국 A 값은 5가 아님에도 T2 는 5로 잘못 읽는 (Dirty Read) 현상이 발생한다|공유 Lock 을 걸어서 T1이 A 에 접근하고 있는 동안 다른 트랜잭션이 접근하지 못하게 함.|
|Non Repeatable Read|T1 트랜잭션이 같은 쿼리를 두번 실행했는데 그 결과값이 다른 경우, 즉 T1 이  select 를 두번 하는 사이에 T2 트랜잭션이 update 나 delete 를 한 경우|트랜잭션 완료 시까지 수정/삭제 제한|
|Phantom Read|T1 트랜잭션이 같은 쿼리를 두번 수행 시 첫번째 실행시에 없던 레코드가 두번째 실행시에 튀어 나오는 경우 |T1 트랜잭션이 읽은 데이터는 T2 트랜잭션에서 갱신, 삭제하지 못할 뿐 아니라 중간에 새로운 레코드 삽입(Insert)까지 불허|

Dirty Read -> Non Repeatable Read -> Phantom Read 에 따라서 일기, 수정삭제, 삽입 권한이 달라진다.

## 데이터베이스의 Isolation Level (고립수준) 유형
<br>

|유형|내용|읽기 이상 현상|
|------|---|---|
|Read Uncommitted |트랜잭션  T1이 아직 commit 하지 않은 데이터를 다른 트랜잭션 T2가 Read 하는 것을 허용|Dirty Read <br> 오라클은 미지원|
|Read Committed|트랜잭션  T1이 commit 을 한 데이터만 다른 트랜잭션 T2가 Read 하는 것을 허용|Dirty Read는 막을 수 있지만 Non Repeatable Read와 Phantom Read 는 막을 수없음 (대부분의 DBMS가 채택)|
|Repeatable Read|선택 트랜잭션 T1이 읽은 데이터는 T1이 종료될 때 까지는 다른 트랜잭션이 수정/삭제 (Update/Delete) 를 허용하지 않음 단 삽입(Insert) 은 허용 함.|Dirty Read와 Non Repeatable Read까지는 발생을 막을수 있으나 Phantom Read 는 막을 수없음|
|Serializable|	선행 트랜잭션 T1이 읽은 데이터는 T이 종료될 때 까지 다른 트랜잭션이 수정/삭제는 물론 삽입 까지 허용하지 않음|Dirty Read와 Non Repeatable Read와 Phantom Read 까지 모두 막을 수 있음 (완벽하지만 실제 현실적으로는 불가능에 가깝다)|

<br>

## Isolation Level 과 읽기 이상 현상의 관계
<br>

|Isolation Level|Dirty Read|Non Repeatable Read|Phantom Read|
|------|---|---|---|
|Read Uncommitted |가능|가능|가능|
|Read Committed|불가능|가능|가능|
|Repeatable Read|불가능|불가능|가능|
|Serializable|불가능|불가능|불가능|