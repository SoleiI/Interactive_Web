# mouse events

## mousemove

### 예제 코드

```
window.addEventListener('mousemove', (event) => {
  // 마우스 좌표값 구하기
  x = event.pageX;
  y = event.pageY;
});
```

### 마우스 좌표를 나타내는 다양한 속성

- screenX, screenY: 모니터를 기준으로
- pageX, pageY: 문서를 기준으로
- clientX, clientY: 현재 보여지고 있는 영역을 기준으로
- offsetX, offsetY: 해당 DOM 객체를 기준으로

### mousemove를 이용한 DOM 객체 좌표 변경

```
const div = document.querySelector('div');

window.addEventListener('mousemove', (event) => {
  x = event.pageX;
  y = event.pageY;

  // 방법 1
  div.style.left = x + 'px';
  div.style.top = y + 'px';

  // 방법 2
  div.style.transform = `translate(${x}px, ${y}px)`;
});
```

### 부드러운 효과

마우스 포인터와 객체의 좌표 이동에 속도 차이를 주는 방식 -> window.requestAnimationFrame()을 이용한다.

```
const loop = () => {
  targetX += (x - targetX) * speed  // speed는 보통 1.0 이하의 소수로 정의
  targetY += (y - targetY) * speed

  div.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
}
```

## mouseenter, mouseleave

### 예제 코드

```
div.addEventListener('mouseenter', () => {
  console.log('roll over 상태일 때 실행됩니다.');
})

div.addEventListener('mouseleave', () => {
  console.log('roll out 상태일 때 실행됩니다.');
})
```
