document.addEventListener("DOMContentLoaded", function() {
    const segitigaButton = document.querySelector('button.bisque-color');
    const jajarGenjangButton = document.querySelector('button.aqua-color');

    // fungsi buat menampilkan hanya konten Segitiga
    function showSegitigaContent() {
        document.getElementById('segitiga-content').style.display = 'flex';
        document.getElementById('jajar-genjang-content').style.display = 'none';
    }

    // fungsi buat menampilkan hanya konten Jajar Genjang
    function showJajarGenjangContent() {
        document.getElementById('segitiga-content').style.display = 'none';
        document.getElementById('jajar-genjang-content').style.display = 'flex';
    }

    // fungsi buat menampilkan semua konten
    function showAllContent() {
        document.getElementById('segitiga-content').style.display = 'flex';
        document.getElementById('jajar-genjang-content').style.display = 'flex';
    }

    segitigaButton.addEventListener('click', function() {
        showSegitigaContent();
    });

    jajarGenjangButton.addEventListener('click', function() {
        showJajarGenjangContent();
    });

    // status awal atau pertama saat membuka tampilan page: menampilkan semua konten
    showAllContent();
});

// fungsi buay memvalidasi input numerik
function validateNumber(value) {
    const number = parseFloat(value);
    return !isNaN(number) && number >= 0;
}

// fungsi buat menghitung luas segitiga
function luas() {
    const alas = document.getElementById('panjang-alas').value;
    const tinggi = document.getElementById('tinggi').value;

    if (!validateNumber(alas) || !validateNumber(tinggi)) {
        alert('Harap masukkan angka yang valid untuk alas dan tinggi.');
        return;
    }

    const hasilLuas = 0.5 * alas * tinggi;
    document.getElementById('result-luas').innerText = `Hasil Perhitungan: ${hasilLuas}`;
}

// fungsi buat mereset formulir luas segitiga
function resetFormLuas() {
    document.getElementById('panjang-alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result-luas').innerText = 'Hasil Perhitungan:';
}

// fungsi buatt menghitung keliling segitiga
function keliling() {
    const sisiA = document.getElementById('sisi-a').value;
    const sisiB = document.getElementById('sisi-b').value;
    const sisiC = document.getElementById('sisi-c').value;

    if (!validateNumber(sisiA) || !validateNumber(sisiB) || !validateNumber(sisiC)) {
        alert('Harap masukkan angka yang valid untuk sisi-sisi segitiga.');
        return;
    }

    const hasilKeliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
    document.getElementById('result-keliling').innerText = `Hasil Perhitungan: ${hasilKeliling}`;
}

// fungsi buat mereset formulir keliling segitiga
function resetFormKeliling() {
    document.getElementById('sisi-a').value = '';
    document.getElementById('sisi-b').value = '';
    document.getElementById('sisi-c').value = '';
    document.getElementById('result-keliling').innerText = 'Hasil Perhitungan:';
}

// fungsi buat menghitung luas jajar genjang
function luasJajarGenjang() {
    const alas = document.getElementById('panjang-alas-jg').value;
    const tinggi = document.getElementById('tinggi-jg').value;

    if (!validateNumber(alas) || !validateNumber(tinggi)) {
        alert('Harap masukkan angka yang valid untuk alas dan tinggi jajar genjang.');
        return;
    }

    const hasilLuas = alas * tinggi;
    document.getElementById('result-luas-jg').innerText = `Hasil Perhitungan: ${hasilLuas}`;
}

// fungsi buat mereset formulir luas jajar genjang
function resetFormLuasJajarGenjang() {
    document.getElementById('panjang-alas-jg').value = '';
    document.getElementById('tinggi-jg').value = '';
    document.getElementById('result-luas-jg').innerText = 'Hasil Perhitungan:';
}

// fungsi buat menghitung keliling jajar genjang
function kelilingJajarGenjang() {
    const alas = document.getElementById('panjang-alas-kjg').value;
    const sisiMiring = document.getElementById('sisi-miring').value;

    if (!validateNumber(alas) || !validateNumber(sisiMiring)) {
        alert('Harap masukkan angka yang valid untuk alas dan sisi miring jajar genjang.');
        return;
    }

    const hasilKeliling = 2 * (parseFloat(alas) + parseFloat(sisiMiring));
    document.getElementById('result-keliling-jg').innerText = `Hasil Perhitungan: ${hasilKeliling}`;
}

// fungsi buat mereset formulir keliling jajar genjang
function resetFormKelilingJajarGenjang() {
    document.getElementById('panjang-alas-kjg').value = '';
    document.getElementById('sisi-miring').value = '';
    document.getElementById('result-keliling-jg').innerText = 'Hasil Perhitungan:';
}
