# scroll event

### 예제 코드

```
window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;   // scroll 좌표
  documentHeight = document.body.scrollHeight - window.innerHeight;           // 전체 높이
  // document.body.scrollHeight는 body 높이, window.innerHeight는 브라우저 상단바 높이

  per = (scrollNum / documentHeight) * 100;
  // 전체 화면에서 스크롤한 위치 %
});
```

### Progress Bar 예제 코드

스크롤이 얼마나 남았는지 표시

```
window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;   // scroll 좌표
  documentHeight = document.body.scrollHeight - window.innerHeight;           // 전체 높이
  // document.body.scrollHeight는 body 높이, window.innerHeight는 브라우저 상단바 높이

  per = (scrollNum / documentHeight) * 100;
  // 전체 화면에서 스크롤한 위치 퍼센트
  progressBar.style.width = per + '%';  // 퍼센트에 맞게 progress bar를 채움
});
```
