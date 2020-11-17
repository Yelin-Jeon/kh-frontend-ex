# 1. 재귀함수

factorial(5)
5! = 5 * 4 * 3 * 2 * 1

장점
- 코드 표현이 간결해진다.

단점
- 성능 이슈 존재 가능
- 콜 스택이 많이 쌓이면 터질 수 있음

## 1.1. 재귀함수 작성 시 유의사항

- 탈출조건 명시 필요

```java
private static int factorial(int n) {
		int ret =1;
		if(n==1) {
			return 1;
		}
		return n*factorial(n-1);
	}
```

꼬리 재귀 최적화(tail recursion optimization)

## 1.2. 피보나치 문제

1 1 2 3 5 ....

- n번째 항(n>3, n은 3이상)은 n-1번째 항과 n-2번째 항의 합
An=A(n-1)+A(n-2)

A1=1
A2=1
A3=A(n-1)+A(n-2)

# 2. quickSort

- 추가적인 메모리 필요 없음
- 소팅 속도 빠름

## 2.1. 알고리즘

1. pivot 고르고
2. 왼쪽에는 pivot보다 작은 값의 배열(리스트)
3. 오른쪽에는 pivot보다 큰 값의 배열(리스트)

list =[19,22,23,28,10,19,4,9,16,1]

pivot:19
less(작은거) : [10,4,9,16,1]
g(큰거) : [22,23,28]
pivot과 같다: [19,19]

less=sort(less) //[1,4,9,10,16]
greater=sort(greater) //[22,23,28]
return less+pivot+greater

-------------------------
2번째 호출 sort(l), [10,4,9,16,1]
pivot:10
l-pivot보다 작다 : [4,9,1]
g-pivot보다 크다 : [16]
pivot과 같다 : [10]

less=sort(less) //[1,4,9]
greater=sort(greater) //[16]

---------------------
3번째 호출 sort(l), [4,9,1]
pivot:4
l-pivot보다 작다 : [1]
g-pivot보다 크다 : [9]
pivot과 같다 : [4]

less=sort(less)
greater=sort(greater)


