let hasKey = false;

// Panolens 이미지 설정
const panorama = new PANOLENS.ImagePanorama('img/room.png');
const viewer = new PANOLENS.Viewer({
  container: document.querySelector("#container"),
  autoRotate: true,
  autoRotateSpeed: 0.3
});
viewer.add(panorama);

// 문 인터랙션
function tryDoor() {
  if (hasKey) {
    alert("문이 열렸습니다! 🎉");
  } else {
    alert("문이 잠겨 있습니다. 열쇠를 찾아야 해요.");
  }
}
