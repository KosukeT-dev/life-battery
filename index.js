function calculate() {
  const age = document.getElementById('age').value;
  let percentage = 0;
  let imageName = 'images/0.png';
  if (age >= 0) {
    if (age >= 100) {
      percentage = 100;
      imageName = 'images/6.png';
    } else {
      percentage = age;
      if (age <= 1) {
        imageName = 'images/0.png';
      } else if (age <= 16) {
        imageName = 'images/1.png';
      } else if (age <= 32) {
        imageName = 'images/2.png';
      } else if (age <= 48) {
        imageName = 'images/3.png';
      } else if (age <= 64) {
        imageName = 'images/4.png';
      } else if (age <= 90) {
        imageName = 'images/5.png';
      } else {
        imageName = 'images/6.png';
      }
    }
  }
  document.getElementById('result').textContent = `${percentage}%`;
  document.getElementById('image').src = imageName;
  document.getElementById('image').style.display = 'block';
  document.getElementById('image-container').innerHTML = '<p>picture of battery(<a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>)</p>';
}
