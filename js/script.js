function hitung() {
  // Ambil nilai panjang sisi dari input
  var sisi = parseFloat(document.getElementById('sisi').value);

  // Validasi apakah input adalah angka positif
  if (isNaN(sisi) || sisi <= 0) {
    alert('Masukkan angka positif untuk panjang sisi.');
    return;
  }

  // Hitung luas dan keliling persegi
  var luas = sisi * sisi;
  var keliling = 4 * sisi;

  // Tampilkan hasil di HTML
  document.getElementById('luas').innerText = luas;
  document.getElementById('keliling').innerText = keliling;
}

// function reset
function resetForm() {
  document.getElementById('kalkulatorForm').reset();
  document.getElementById('luas').innerText = '...';
  document.getElementById('keliling').innerText = '...';
}
