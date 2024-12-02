<template>
  <div class="wrapper-loader">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #6dc5e6;
  --g: conic-gradient(#6dc5e6 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 100%,
    var(--g) 0 0,
    var(--g) 0 100%;
  animation: l5 2s linear infinite;
}
.loader:before {
  content: 'Loading';
}
@keyframes l5 {
  0%,
  100% {
    background-size:
      0 100%,
      0 100%,
      100% 0,
      100% 0;
  }
  50% {
    background-size:
      55% 100%,
      55% 100%,
      100% 0,
      100% 0;
  }
  50.01% {
    background-size:
      0 100%,
      0 100%,
      100% 55%,
      100% 55%;
  }
}
@keyframes l5 {
  0%,
  100% {
    background-size:
      0 100%,
      0 100%,
      100% 0,
      100% 0;
  }
  50% {
    background-size:
      55% 100%,
      55% 100%,
      100% 0,
      100% 0;
  }
  50.01% {
    background-size:
      0 100%,
      0 100%,
      100% 55%,
      100% 55%;
  }
}
.wrapper-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: var(--ryb-white);
  margin: auto 0;
}
</style>
