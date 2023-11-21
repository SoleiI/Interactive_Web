# css

## transform

### translate : 이동

```
translate(0px, 0px)         // (x, y)로 이동
translateX(0px)             // x좌표만 이동
translateY(0px)             // y좌표만 이동
translate3d(0px, 0px, 0px)  // (x, y, z)로 이동
```

### rotate : 회전

```
rotateY(0deg) // y축을 기준으로 회전(가로 방향)
rotateX(0deg) // x축을 기준으로 회전(세로 방향)
```

### scale : 크기 변환

```
scale(0.1)  // 원래 크기의 10% 크기
scale(1)    // 원래 크기로 복구
```

### perspective : 원근법 적용

translate3d, translateZ 등을 효과적으로 적용하려면 perspective를 함께 써줘야 한다. 숫자가 커질 수록 멀리서 보는 느낌이 난다.

```
perspective: 400px;           // 거리
perspective-origin: center;   // 각도
```

### 추가 예제 코드

다음과 같이 한 번에 같이 쓸 수도 있다.

```
transform: scale(1.1) translateX(50px);
transform: perspective(400px) translateZ(100px);
```

## transition

```
// property - duration - timing function
transition: all 1.5s ease   // 모든 css 속성에 대해 1.5초 동안 ease function을 적용해서 실행
```

### customize timing function

[ceaser(https://matthewlein.com/tools/ceaser)](https://matthewlein.com/tools/ceaser)에서 설정

```
transition: all 500ms cubic-bezier(0.660, -0.375, 0.340, 1.380);
transition-timing-function: cubic-bezier(0.660, -0.375, 0.340, 1.380);
```

## position

```
position: absolute;     // 상위 요소를 기준으로 절대적인 위치에 배치
position: fixed;        // 브라우저 viewport를 기준으로 절대적인 위치에 배치
position: relative;     // 원래 위치를 기준으로 상대적으로 배치
```

## background

```
background: url(image.png) center center / cover no-repeat;
// image position / size repeat
background-color: rgba(0, 0, 0, 0.5);   // r, g, b, 투명도
background: linear-gradient(#fff, #000);  // 그라데이션
```

## box-sizing

```
box-sizing: border-box;     // border를 기준으로 크기 설정
box-sizing: content-box;    // content 영역 기준으로 크기 설정
```

예를 들어, width 값을 500px이라 하면

- content-box는 content 영역의 width가 500px, margin이나 padding은 포함하지 않는다.
- border-box는 padding과 border를 포함한 영역의 width가 500px, margin은 포함하지 않는다.

## nth-child

태그 또는 선택자에 해당하는 요소들을 각각 선택하고 싶을 때 사용한다. 인덱스는 1부터 시작.

```
.class:nth-child(2) {
  color: lime;
}

/* 임의의 그룹에서 네 번째에 위치하는 모든 요소 선택 */
.class:nth-child(4n) {
  color: lime;
}
```

## 모바일 크기 설정

```
@media only screen and (max-width: 768px) {
  /* css code */
}
```
