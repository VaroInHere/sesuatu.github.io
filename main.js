let count = 0;
const button = document.getElementById('epep');
const outerDiv = document.getElementById('lebran');
const innerDiv = document.getElementById('head');

button.addEventListener('click', function() {
  count++;
  if (count >= 5) {
    // Pindah halaman jika tombol ditekan lima kali
    window.location.href = 'selamat.html';
  } else {
    // Tambahkan kelas shake untuk efek getar
    outerDiv.classList.add('shake');
    innerDiv.classList.add('shake');
    // Hapus kelas shake setelah 0.5 detik
    setTimeout(function() {
      outerDiv.classList.remove('shake');
      innerDiv.classList.remove('shake');
    }, 500);
  }
});
