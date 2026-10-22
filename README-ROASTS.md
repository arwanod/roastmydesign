# Roast My Design — v1.8

Pengadilan desain berbasis browser. Semua diproses lokal; tidak ada server, akun, atau AI API.

## File yang dipublikasikan

Hanya ini (dan README kalau mau):

- `index.html` — app / Judgment Engine
- `roast-library.js` — semua teks roasting
- `editor.html` — editor visual untuk Roast Library (internal, sudah `noindex`)
- `fonts.css` dan folder `fonts/` — font yang dihosting sendiri (5 file `.woff2` + 3 file lisensi OFL; lisensi harus ikut dipublikasikan)

Folder `samples/`, file `*.bak`, dan `.claude/` hanya untuk lokal. `.gitignore` sudah mengecualikannya.
`samples/` berisi karya desainer lain (jangan dipublikasikan); `samples/synthetic/` buatan sendiri dan aman.

## Deploy (Netlify)

1. Jalankan `powershell -ExecutionPolicy Bypass -File .uild-deploy.ps1`. Skrip ini membuat folder `deploy/` yang hanya berisi file yang boleh dipublikasikan (tanpa `samples/`, `*.bak`, atau konfigurasi lokal).
2. Buka https://app.netlify.com/drop dan seret folder `deploy/` ke sana. Untuk memperbarui situs yang sudah ada: buka site-nya di Netlify → **Deploys** → seret folder `deploy/` lagi.
3. Atau lewat CLI: `netlify deploy --dir=deploy --prod` (setelah `netlify login`).
4. File `_headers` otomatis dipakai Netlify: HTML dan `roast-library.js` selalu divalidasi ulang, font di-cache lama, dan ada header keamanan dasar.
5. Setiap kali `roast-library.js` berubah, naikkan `?v=` di `index.html` dan `editor.html`, jalankan ulang `build-deploy.ps1`, lalu deploy ulang.

## Deploy (GitHub Pages)

1. Taruh `index.html`, `editor.html`, `roast-library.js`, `fonts.css`, folder `fonts/`, dan `README-ROASTS.md` di repository (root).
2. Di GitHub: **Settings → Pages → Build and deployment → Deploy from a branch** → pilih branch dan folder `/ (root)`.
3. Setelah beberapa menit, app tersedia di `https://<username>.github.io/<nama-repo>/`.
4. Cek di ponsel: unggah gambar, hakimi, lalu coba **Download share card** dan **Download story**.

Semua path memakai `./` (relatif), jadi bisa dipasang di subfolder tanpa perubahan.

## Cara menambah roasting

1. Buka `editor.html` dari site yang sama dengan `roast-library.js`.
2. Pilih **Bagian** dan **Sub-bagian**. Keterangan di atas kolom tulis menjelaskan kapan kalimat itu dipakai.
3. Klik **+ Roast baru**. Tempel satu kalimat per baris untuk menambah banyak sekaligus.
4. Perhatikan pesan di bawah kolom tulis (duplikat, kepanjangan, `{name}`, tanda baca).
5. Perubahan tersimpan otomatis sebagai draft di browser.
6. Klik **Export roast-library.js**, ganti file di repo, push.
7. **Naikkan versi cache** (lihat di bawah) di `index.html` dan `editor.html`.

## Intensitas

- 1 nyeletuk, 2 pedas, 3 brutal: muncul di semua skor.
- 4 kejam: hanya untuk skor 31 ke atas.
- 5 putus pertemanan: hanya untuk skor 56 ke atas.

Dikosongkan = muncul di semua skor.

## Tag

Dua kalimat bertag sama tidak dipakai dalam satu laporan, jadi roast tidak terasa berulang. Pilih 1–2 tag, contoh: `hukum`, `deadline`, `klien`.

## Bagian library

- `metrics`, `verdicts`, `categories`, `confidenceImmediate`, `confidenceFinal`, `nameJabs` — roast umum.
- Kunci dengan akhiran `_low`, `_high`, `_lowbusy` adalah varian per band skor (lihat header `roast-library.js`).
- `combos` — roast untuk kombinasi metrik. Nama grup = nama kondisi di `index.html`; **jangan diganti**.
- `contextual` — kasus khusus (ilustrasi, tipografi, hitam-putih, palet netral).
- `profiles` — deskripsi di bawah nama Design Profile (nama profil ada di `index.html`).
- `mitigations` — kalimat faktor yang meringankan.
- `blank` — gambar nyaris polos.
- `inbox` — tempat parkir ide; tidak dipakai engine.

Semua teks roast ada di library; `index.html` hanya berisi kondisi dan logika.

## Cache

`index.html` dan `editor.html` memuat `roast-library.js?v=1.8.3`. Setiap kali `roast-library.js` diganti di repo, naikkan angka `v=` di **kedua** file (contoh `1.8.3` → `1.8.4`) supaya browser tidak memakai versi lama.

## Debug / QA mode

Buka `index.html?debug=1`. Panel internal menampilkan metrik mentah, risiko kontekstual, ranking dakwaan, profile + DNA, mitigating factor, tag terpakai, dan kalimat mana yang terpilih beserta intensitas dan tag-nya. Berguna ketika hasil terasa salah.

## Catatan

- Font (Anton, Inter variable, IBM Plex Mono 500/600/700) dihosting sendiri di `fonts/` (subset Latin, SIL OFL 1.1). App tidak membuat permintaan ke domain luar. Simbol di luar Latin (misalnya `≥ → ↑`) tampil dengan font sistem. Untuk mengganti font, ubah `fonts.css` dan file di `fonts/`; share card ikut berubah karena memakai nama font yang sama.
- Skor dihitung dari piksel: kontras, warna, keseimbangan, kepadatan, ruang kosong, saturation. Ia tidak menilai tipografi, orisinalitas, atau ide.
