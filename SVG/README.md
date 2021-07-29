# SVG
svg는 벡터(vector) 이미지를 표현하기 위한 포맷으로 w3c에서 만든 벡터 이미지 표준입니다. SVG !== CSS 이지만 CSS를 이용해 SVG를 활용할 수 있습니다.

## Cicle
```
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"/>
</svg>
```
- width, height : svg 전체의 크기를  그려줍니다. (종이의 크기)
= cx, cy : 현재 cicle태그인 원의 중심점을 의미합니다.
- r : 반지름을 의미합니다. (이값이 설정되면 원의 크기가 정해집니다.)
- stroke : 테두리선의 색상을 의미합니다.
- stroke-width : 테두리선의 굵기를 의미합니다.
- fill : 테두리를 제외한 내부요소의 색상을 결정합니다.

## rect
```
<svg width="400" height="180">
  <rect x="20" y="20" width="150" height="150"
  style="fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9" />
</svg>
```
- x, y : svg 그림의 좌측, 상단에서 떨어진 정도를의미합니다. (cx, cy 다릅니다.)

## line
```
<svg height="210" width="500">
  <line x1="10" y1="10" x2="1000" y2="1000" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg>
```
- x(1~2), y(1~2) : 지석의 좌표지점을 의미합니다. (1: 시작 위치 좌표, 2: 종료 위치 좌표)

## polyline
```
<svg height="200" width="500">
    <polyline points="20,20 40,25 60,40 80,120 120,140 200,180" style="fill:none;stroke:black;stroke-width:3" />
</svg>
```
- points : x1,y1 x2,y2 x3,y3 ... xn,yn 점들을 순서대로 이어줍니다.

## Path
- SVG에서 사용할 수 있는 가장 자유로운 형태이다. path 요소를 사용해서 둥근 모서리, 원, 타원, 폴리라인 및 다각형을 그릴 수 있다.
- SVG에서 가장 중요한 요소라고 생각되어진다. 해당 속성을 이용해서 여러 곡선들 원하는 모양을 만들 수 있다.
```
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 H 90 V 90 H 10 L 10 10 Z"/>
</svg>
```
- d : path 모양을 정의한다.
- M(Move To) : 이동하기 명령어 m: 마지막 위체애 대한 상대좌표, M : 절대좌표
- L(Line To) : 선을 그리는 명려어 x, y 라는 두개의 파리미터를 받아서 현재 위치에서 새 위치로 선을 긋는다.
- H : 가로선을 그리는 명렁어
- V : 세로선을 그리는 명령어
- Z : path 닫기 명령어
### 곡선 
```
<path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
```
- C : 곡선을 긋는다. (제어점 1지점, 제어점 2지점, 도착지점)
- M a1 a2 C b1 b2, c1 c2, d1 d2 라고 한다면 a - b , c - d 점이 이루는 기울기에 따라 곡선의 꺽는 정도가 달라진다.
```
 <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
```
- S : S나 C 명령어 다음올 경우 이전에 사용했던 제어점을 뒤집는 것으로 간주한다. (C로 표현가능하지만 코드량을 줄일 수 있다.)
```
<path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
```
- 하나의 제어점으로 시작지점 끝지점의 곡선의 형태를 결정한다. 좌우 점이 Q 지점쪽으로 동일한 힘으로 기운다고 보면된다.

## 그외 속성들 Ellipse(타원), Polygon(다각형)

## 도형 한번에 그리기
svg 태그 안의 rect, circle 같은 태그들을 동시에 그릴수 있습니다.
```
<svg width="150" height="100">
  <rect width="100%" height="100%" fill="white" />
  <circle cx="75" cy="50" r="40" fill="#1DDB16" />
  <text x="75" y="62" font-size="30" text-anchor="middle" fill="white">NTS</text>
</svg>
```
- https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial