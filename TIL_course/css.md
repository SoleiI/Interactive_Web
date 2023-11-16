# css

## transform

### translate : 이동

```
translate(0px, 0px) // (x, y)로 이동
translateX(0px)     // x좌표만 이동
translateY(0px)     // y좌표만 이동
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
