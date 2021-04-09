// gsap.to("#rect", {
//   duration: 2, // 右側に2秒かけて移動するモーションを指定する
//   x: 800,
//   rotate: 360,
//   repeat: -1,
// }).timeScale(2.0);

// タイムラインを作成する
const tl = gsap.timeline({ repeat: -1 });
// 右側に2秒かけて移動するモーションを指定する
tl.add(gsap.to("#rect", 2.0, { x: 800, rotate: 360 }));
// 本来のタイムラインの0.25秒の地点まで到達したら
tl.call(
  () => {
    // 0.1倍速再生にする(スローモーションとなる)
    tl.timeScale(0.1);
  },
  null,
  0.25
);
// 本来のタイムラインの0.50秒の地点まで到達したら
tl.call(
  () => {
    // 1.0倍速再生にする(通常再生速度となる)
    tl.timeScale(1.0);
  },
  null,
  0.5
);


// gsap.to(".box1", {rotation: 27, x: 100, duration: 1});

let target = gsap.timeline();
target.to(".box1", {rotation: 27, x: 100, duration: 1}).to(".box2", {rotation: 27, y: 100, duration: 1});

let box3 = gsap.timeline();
box3.to(".box3",4,{x:100}, 2);
