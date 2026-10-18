/*
  ROAST MY DESIGN — ROAST LIBRARY v1.6
  =====================================
  FILE INI MEMANG DIBUAT UNTUK DIUTAK-ATIK. 😈

  CARA PALING MUDAH MENAMBAH ROAST:
  1. Cari bagian yang sesuai: METRIC / PUTUSAN / KATEGORI / PEDE.
  2. Tambahkan kalimat di dalam array, dipisahkan koma.
  3. Save -> push ke GitHub. Tidak perlu menyentuh algoritma utama.

  FORMAT TERMUDAH:
    "Kalimat hinaan baru."

  FORMAT OPSIONAL:
    {
      text: "Kalimat hinaan baru.",
      intensity: 4,             // 1 ringan ... 5 kejam
      tags: ["padat","layout"]  // dipakai untuk mengurangi pengulangan
    }

  PENTING:
  - Jangan hapus koma antar item.
  - Jangan ubah nama key seperti colorChaos, typography, bangga, dll.
  - Kalau bingung menaruh kalimat baru, simpan dulu di bagian INBOX paling bawah.
*/

window.ROAST_LIBRARY = {
  // =========================================================
  // A. REAKSI LANGSUNG: "SEBERAPA PEDE?"
  // =========================================================
  confidenceImmediate: {
 bangga:['Oh, bangga? Bagus. Bukti tambahan sudah kami catat.','Pede sekali. Kami suka terdakwa yang mempermudah penyidikan.','Kepercayaan diri diterima. Kompetensi masih diperiksa.','Bangga boleh. Nanti data yang memutuskan apakah itu keberanian atau delusi.'],
 lumayan:['“Lumayan” — bunker favorit desainer menjelang deadline.','Lumayan itu bukan pujian. Itu cara sopan untuk berhenti melihat terlalu lama.','Jawaban aman. Biasanya desainnya juga bersembunyi di zona aman.','“Lumayan lah.” Kalimat terakhir sebelum file FINAL_v7_FIX_BENERAN.ai dibuat.'],
 ragu:['Nah. Insting bertahan hidupmu ternyata masih berfungsi.','Keraguan dicatat. Akhirnya ada satu keputusan yang terasa sehat.','Bagus. Inner critic-mu belum sepenuhnya mati.','Agak ragu? Santai. Sebentar lagi kami bantu jadi sangat ragu.'],
 klien:['Alibi dicatat. Belum tentu dipercaya.','Klien yang nyuruh. Tentu. Creative Cloud mendengar alasan ini tiap hari.','Baik. Nama klien kami tulis di berkas. Namamu tetap belum dicoret.','Perintah klien bukan surat bebas dari kejahatan visual.']
},

  // =========================================================
  // B. ROAST PER METRIC
  // max = batas nilai metric. Tambahkan kalimat di `lines`.
  // =========================================================
  metrics: {
colorChaos:[
 {max:22,lines:['Paletnya terlalu sopan. Kayak desainer magang yang takut buka color picker.','Warna sedikit sekali. Printer kantor bahkan tidak merasa tertantang.','Ini color palette atau bukti kamu sudah menyerah sebelum mulai?','Monokrom boleh. Tapi ini kelihatannya lebih seperti kehabisan keputusan.','Warnanya aman sekali sampai risiko kreatif minta pindah divisi.','Palet ini begitu takut salah sampai akhirnya tidak berani punya pendapat.','Color decision-nya seperti rapat komite: semua setuju, tidak ada hasil.','Kalau warna ini punya kepribadian, statusnya masih draft.']},
 {max:45,lines:['Paletnya masih waras. Sayang personality-nya ikut cuti.','Warna-warnanya akur, mungkin karena semuanya sepakat untuk tidak menonjol.','Tidak jelek. Cuma punya energi template presentasi internal.','Color palette ini punya denyut nadi, tapi lemah.','Aman, bersih, dan hampir tidak meninggalkan kesan apa pun. Prestasi juga.','Warna-warnanya sopan sekali. Terlalu sopan. Sampai brand recall pun sungkan masuk.','Paletnya rapi, tapi auranya seperti template “minimal modern” hasil pencarian pertama.','Tidak berisik, tidak salah, tidak menarik. Triple kill.']},
 {max:70,lines:['Warnanya mulai ribut. Belum tawuran, tapi satpam sudah dipanggil.','Beberapa warna kelihatannya baru kenal lima menit lalu lalu dipaksa satu frame.','Paletnya punya chemistry. Sayangnya chemistry praktikum gagal.','Ada arah warna. Arahnya ke mana, itu perkara lain.','Warnanya cukup ramai untuk bikin brand guideline pura-pura tidak kenal.','Color harmony-nya seperti band yang baru ketemu di parkiran sebelum manggung.','Ada warna utama, warna pendukung, dan beberapa warna yang tampaknya nyasar.','Palette ini bukan eklektik. Ini grup WA tanpa admin.']},
 {max:101,lines:['Semua warna diundang. Tidak satu pun disuruh pulang.','RGB melihat ini lalu mengajukan cuti panjang.','Color palette-mu seperti grup keluarga: terlalu banyak suara dan tidak ada moderator.','Saturasinya sudah bukan tinggi. Ini keadaan darurat nasional.','Kalau tujuanmu membuat mata pengguna menyerah, selamat. Objective tercapai.','Warna-warna ini tidak harmonis. Mereka cuma kebetulan terjebak dalam file yang sama.','Ini bukan color system. Ini kerusuhan visual dengan izin edar.','Color picker-mu sepertinya punya tombol “pilih semua”.','Pantone tidak bertanggung jawab atas kejadian ini.','Setiap warna ingin jadi protagonis. Hasilnya sinetron ensemble tanpa sutradara.','Kalau pelangi lihat ini, dia akan minta namanya tidak dicatut.']}
],
contrast:[
 {max:22,lines:['Contrast-nya selembut janji revisi terakhir. Tidak ada yang benar-benar terlihat.','Heading dan background sedang LDR walau tinggal serumah.','Mata perlu surat tugas khusus untuk menemukan focal point.','Kontrasnya hilang. Terakhir terlihat sebelum kamu menurunkan opacity semuanya.','Ini desain atau tes mata terselubung?','Hierarki visualnya seperti rapat tanpa pimpinan: semua bicara, tidak ada yang didengar.','Contrast segini membuat accessibility checker ikut menghela napas.','Teksnya ada. Terbaca? Itu urusan iman.','Kalau user harus menyipitkan mata, itu bukan engagement.']},
 {max:45,lines:['Contrast ada, tapi cuma hadir secara administratif.','Lumayan terbaca. Tidak berarti layak dikenang.','Focal point muncul malu-malu seperti tidak yakin dibayar lembur.','Kontrasnya setengah hati. Sama seperti keputusan font kedua itu.','Masih bisa dibaca, kalau pengguna punya waktu dan niat baik.','Kontrasnya hadir, tapi aura “nanti aja dibenerin” masih kental.','Readable, tapi seperti keputusan yang diambil lima menit sebelum export.','Focal point-nya ada. Cuma malu mengaku.']},
 {max:72,lines:['Contrast cukup sehat. Sayang desain tidak otomatis ikut sehat.','Ada hierarki. Akhirnya seseorang mengambil tanggung jawab.','Kontrasnya bekerja. Jangan senang dulu, departemen lain masih diperiksa.','Bagian ini lolos. Kami juga kecewa tidak bisa menghina lebih banyak.','Readable. Revolutionary? Jangan halu.','Contrast-nya benar. Selamat atas keberhasilan melewati standar paling dasar.','Bagian ini bekerja. Mohon jangan jadikan itu materi keynote.','Akhirnya ada yang menjalankan jobdesk.']},
 {max:101,lines:['Contrast-nya teriak begitu keras sampai hierarchy visual ikut minggir.','Hitam-putihnya seperti sedang berantem soal warisan.','Focal point-nya tidak mengundang perhatian. Dia menyandera perhatian.','Kontras setinggi ini cocok untuk poster konser, bukan untuk semua elemen sekaligus, Ferguso.','Mata tidak diarahkan. Mata ditodong.','Ini hierarchy visual versi debt collector. Semua harus lihat sekarang juga.','Contrast-nya bukan mengarahkan mata, tapi menarik kerah baju user.','Semua elemen pakai toa. Tidak ada yang pakai otak.','Visual priority-mu seperti rebutan mic karaoke.']}
],
balance:[
 {max:18,lines:['Layout terlalu seimbang. Sampai keberaniannya ikut rata tengah.','Simetris, rapi, aman. Personality ditemukan dalam kondisi mengenaskan.','Balance sempurna. Risiko kreatif: nol koma sekian.','Semua tertata baik. Seperti brosur bank sebelum jam makan siang.','Layout-nya disiplin. Sayangnya karisma tidak termasuk SOP.','Grid-nya patuh. Imajinasi tampaknya sedang WFH.','Komposisinya begitu aman sampai asuransi pun bosan menanggungnya.','Balanced sekali. Nyaris seperti kamu takut satu pixel keluar barisan.']},
 {max:42,lines:['Balance masih aman, walau ada elemen yang mulai pura-pura sibuk.','Distribusi visual cukup masuk akal. Sebuah pencapaian dasar yang mengejutkan.','Tidak timpang, cuma agak seperti layout yang takut salah.','Kiri-kanan masih komunikasi. Belum saling blokir.','Balance-nya oke. Jangan jadikan ini alasan untuk pede berlebihan.','Visual weight-nya lumayan sehat. Sayang keputusan lain belum tentu.','Tidak berat sebelah. Cuma belum punya alasan kuat untuk diingat.','Komposisinya tidak jatuh. Itu saja dulu prestasinya.']},
 {max:68,lines:['Satu sisi mulai kerja lembur, sisi lain sibuk terlihat cantik.','Visual weight-nya seperti kerja kelompok: dua orang kerja, tiga orang titip nama.','Komposisinya mulai miring secara emosional.','Ada sisi yang jelas-jelas menjadi tulang punggung keluarga ini.','Alignment mungkin masih hidup, tapi sudah tidak mau diwawancarai.','Satu sisi mulai menanggung cicilan layout sendirian.','Visual balance-nya seperti meja berkaki tiga: berdiri, tapi bikin cemas.','Komposisi ini kelihatan sedang menunggu satu elemen datang menyelamatkan keadaan.']},
 {max:101,lines:['Sebelah layout kerja rodi. Sebelah lainnya cuma numpang nama.','Komposisi ini berat sebelah sampai butuh pengacara perceraian.','Visual weight-nya seperti membawa galon pakai satu tangan.','Alignment ditemukan pingsan di luar artboard.','Ini bukan asymmetry yang berani. Ini furnitur geser sendiri saat gempa.','Satu sisi desain sudah resign secara mental.','Kalau keseimbangan adalah tujuan, kamu menembaknya dari jarak dekat.','Layout ini berat sebelah sampai gravitasi ikut punya opini.','Sisi kosongnya healing, sisi padatnya kerja rodi.','Ini bukan dynamic composition. Ini pembagian warisan yang gagal mediasi.']}
],
complexity:[
 {max:18,lines:['Minimalis atau belum selesai? Tim forensik belum sepakat.','Elemen sedikit sekali sampai artboard terdengar bergema.','Desainnya bersih. Sangat bersih. Mencurigakan bersih.','Ini minimalism atau kamu lupa mengaktifkan tiga layer?','Visual complexity rendah. Ambisinya ikut tersangka.','Less is more. Ini sudah mendekati less is missing.','Minimalism bukan alasan untuk meninggalkan artboard sendirian di rumah.','Ruang kosongnya punya lebih banyak screen time daripada idenya.','Desain ini sangat sunyi sampai konsepnya terdengar batuk.']},
 {max:40,lines:['Cukup sederhana. Tidak bikin pusing, juga belum tentu bikin ingat.','Visualnya tenang. Mungkin terlalu tenang untuk sesuatu yang ingin dilihat orang.','Masih punya napas. Bagus. Jangan langsung merasa jadi Dieter Rams.','Kompleksitasnya terkendali. Ego desainer mohon ikut dikendalikan.','Rapi, ringan, dan sedikit beraroma template premium gratisan.','Clean, iya. Distinctive? Jangan bikin kami kerja terlalu keras mencari.','Visualnya tenang seperti waiting room klinik gigi.','Sederhana itu elegan. Ini masih antre menuju elegan.']},
 {max:68,lines:['Cukup ramai untuk bikin mata punya pekerjaan sampingan.','Ada banyak hal terjadi. Tidak semuanya perlu terjadi.','Visual hierarchy sedang berusaha mengatur lalu lintas tanpa peluit.','Desainnya sibuk. Semoga invoice-mu setara dengan penderitaan mata kami.','Banyak detail, sedikit alasan. Tradisi lama dunia desain.','Mata masih bisa pulang sendiri, tapi Google Maps mulai dibutuhkan.','Detailnya mulai berkembang biak tanpa izin.','Hierarchy sedang mencoba jadi satpam di konser gratis.','Ada banyak informasi. Sayangnya beberapa tidak punya alasan untuk hidup.']},
 {max:101,lines:['Mata masuk ke desain ini dan sampai sekarang belum ditemukan.','Ini bukan visual complexity. Ini open world game tanpa minimap.','Terlalu banyak detail sampai focal point menyerah dan buka warung.','Artboard-mu kelihatannya alergi terhadap ruang kosong.','Setiap elemen berteriak “LIHAT AKU”, hasilnya tidak ada yang kami dengar.','Desain ini punya lebih banyak subplot daripada sinetron 700 episode.','Kalau semua penting, berarti tidak ada yang penting. Selamat datang di neraka hierarchy.','Mata butuh cuti tahunan setelah tiga detik di sini.','Layer panel-mu pasti terlihat seperti silsilah kerajaan.','Desain ini tidak punya focal point. Ia punya kerumunan massa.','Zoom out tidak menyelesaikan masalah. Cuma membuat bencananya terlihat utuh.','Ini bukan detail-oriented. Ini detail-hostage situation.']}
],
whitespaceCrime:[
 {max:25,lines:['Whitespace-nya lega. Akhirnya ada bagian desain yang tahu kapan harus diam.','Ruang kosong cukup sehat. Jangan buru-buru kamu isi cuma karena merasa bersalah.','Ada napas di sini. Keajaiban kecil yang patut dilindungi dari revisi klien.','Whitespace bagus. Sayang elemen yang tersisa masih harus mempertanggungjawabkan diri.','Ruang kosongnya sehat. Jangan dirusak cuma karena kamu menemukan satu icon lagi.','Breathing room aman. Sekarang tinggal cari alasan kenapa elemen lain ada.','Whitespace bekerja lebih keras daripada beberapa objek di artboard.']},
 {max:50,lines:['Whitespace ada, tapi statusnya pekerja kontrak. Bisa hilang kapan saja.','Masih ada ruang bernapas, walau napasnya pendek-pendek.','Ruang kosongnya cukup. Jangan disentuh lagi pakai gradient random.','Belum sesak. Tapi layout sudah mulai menumpuk koper di pintu keluar.','Ruang kosong masih ada, tapi sudah mulai pasang iklan kos baru.','Masih bisa bernapas, walau layout mulai batuk kecil.','Jangan tambah badge lagi. Serius. Turunkan tanganmu dari toolbar.']},
 {max:75,lines:['Whitespace-nya mulai kabur dari tanggung jawab.','Artboard ini takut ruang kosong seperti takut invoice tidak dibayar.','Kasih napas, Mas. Ini layout, bukan angkot jam pulang kerja.','Semua elemen duduk berdekatan seperti reuni yang venue-nya salah ukuran.','Whitespace ditemukan, tapi cuma di pinggir dan kelihatan ketakutan.','Ruang kosongnya seperti intern: ada, tapi tidak diberi wewenang.','Layout ini mulai mengira semua area kosong adalah masalah yang harus diisi.','Negative space-mu sedang mengajukan surat resign.']},
 {max:101,lines:['Whitespace ditemukan meninggal di lokasi kejadian.','Artboard-mu kelihatannya punya trauma masa kecil terhadap ruang kosong.','Setiap centimeter diisi seolah biaya sewa pixel dihitung per meter.','Ini layout atau kos-kosan overcapacity? Semua masuk, tidak ada yang mau keluar.','Ruang kosong sudah mengajukan perlindungan saksi.','Kalau ada satu elemen lagi masuk, desain ini perlu IMB tambahan.','Artboard ini sudah bukan penuh. Ini overbooking.','Whitespace terakhir terlihat meninggalkan gedung sambil membawa kardus.','Semua pixel terpakai. Tidak semua layak mendapat pekerjaan.','Kalau layout bisa sesak napas, ini sudah minta tabung oksigen.']}
],
saturation:[
 {max:20,lines:['Warna-warnanya sudah menyerah sebelum presentasi dimulai.','Saturation serendah ini bikin RGB terasa seperti kerja di kantor pajak.','Paletnya bukan muted. Ini sedang berkabung.','Warna hadir secara administratif. Secara emosional sudah pulang.','Saturation-nya seperti habis dipotong anggaran.','Muted boleh, mati suri jangan.','Palet ini punya energi hari Senin jam 07.00.']},
 {max:42,lines:['Saturation kalem. Bagus. Jangan langsung merasa jadi art director Skandinavia.','Warnanya tertib dan tidak teriak. Ada yang masih bisa diselamatkan rupanya.','Cukup restrained. Ego-mu boleh menyusul.','Paletnya punya sopan santun. Jarang-jarang.','Saturation-nya tertib. Jangan kamu rusak karena takut dibilang kurang pop.','Warnanya dewasa. Semoga desainernya menyusul.','Cukup restrained tanpa terlihat ketakutan. Keajaiban kecil.']},
 {max:70,lines:['Saturation mulai pede. Untung belum mabuk perhatian.','Warna cukup hidup. Jangan kasih mereka mic satu-satu.','Energinya pas, selama kamu berhenti sebelum tombol saturation digeser lagi.','Masih vibrant, belum masuk fase festival sound system.','Energinya hidup. Jangan dorong slider itu lagi, tanganmu sudah kami awasi.','Saturation-nya pede tanpa perlu naik meja. Bagus.','Masih colorful, belum jadi kecelakaan neon.']},
 {max:101,lines:['Saturation-nya seperti habis minum tiga kaleng energy drink.','Warna-warnanya teriak bareng sampai retina minta mediasi.','RGB melihat slider ini lalu pura-pura tidak kenal kamu.','Vibrant bukan berarti semua warna harus menyalakan strobo.','Paletnya bukan pop. Ini ledakan tabung gas visual.','Retina pengguna bukan tempat uji coba kembang api.','Slider saturation-mu sepertinya macet di kanan.','Warnanya begitu keras sampai CMYK pura-pura offline.','Ini bukan vibrant. Ini visual sirene ambulans.','Mata user tidak menandatangani consent untuk eksperimen ini.']}
]
},

  // =========================================================
  // C. KALIMAT PEMBUKA PUTUSAN
  // =========================================================
  verdicts: {
 low:[
  'Sayangnya desainmu tidak cukup buruk. Coba sedikit lebih ceroboh supaya kami punya pekerjaan.',
  'Kami datang untuk menghina, tapi desain ini cuma membosankan. Itu bahkan lebih menyakitkan.',
  'Secara hukum aman. Secara kreativitas masih dalam masa percobaan.',
  'Tidak ada kejahatan besar. Hanya beberapa pelanggaran estetika ringan dan satu kasus kurang berani.',
  'Desain ini tidak buruk. Ia hanya punya karisma spreadsheet kosong.',
  'Lolos dari penjara desain. Belum tentu lolos dari ketidakpedulian audiens.','Tidak salah. Tidak berbahaya. Tidak ada alasan kuat untuk melihat dua kali.','Desain ini begitu aman sampai feedback paling jujurnya cuma “oke”.','Kami kehabisan dakwaan. Sayangnya audiens juga bisa kehabisan minat.','Bukan buruk. Cuma tidak meninggalkan bekas selain file export.'
 ],
 mid:[
  'Ada niat baik di sini. Eksekusinya sedang dimintai keterangan.',
  'Desain ini seperti presentasi jam 4 sore: technically hadir, spiritually sudah pulang.',
  'Konsepnya mungkin bagus. Sayang konsep tidak bisa memberi kesaksian untuk membela hasil akhirnya.',
  'Masih bisa diselamatkan. Dengan revisi. Banyak revisi. Dan mungkin ritual tertentu.',
  'Kami melihat potensi. Kami juga melihat banyak barang bukti.',
  'Bukan bencana. Lebih seperti alarm kebakaran yang bunyinya sudah mulai terdengar.','Ada ide di sini. Kami yakin. Kami cuma belum menemukan lokasi kejadiannya.','Desain ini masih bisa ditolong, selama revisinya bukan “coba dibikin lebih wow”.','Secara visual belum kriminal berat, tapi motifnya mencurigakan.','Ini fase ketika desainer bilang “tinggal finishing” padahal struktur dasarnya masih berunding.'
 ],
 high:[
  'Secara teknis ini masih desain. Secara moral kami tidak yakin.',
  'File ini sebaiknya diberi nama FINAL_FINAL_BENERAN_TOBAT.ai.',
  'Kami tidak bilang jelek. Kami cuma menyarankan artboard diberi kesempatan hidup baru.',
  'Design brief mungkin tidak meminta kekacauan, tapi kamu memberikannya dengan penuh keyakinan.',
  'Tidak semua eksperimen harus dipublikasikan. Beberapa cukup menjadi pelajaran hidup.',
  'Ini bukan “berani beda”. Ini berbeda karena keputusan-keputusan penting ditinggal tanpa pengawasan.',
  'Kalau desain ini punya pengacara, pengacaranya barusan mundur.',
  'Kami sudah menghubungi hierarchy, alignment, dan restraint. Tidak ada yang mau mengaku kenal kamu.','Kami mencoba mencari keputusan desain yang bisa dijadikan saksi meringankan. Tidak ada yang bersedia.','Desain ini bukan minta revisi. Ia minta identitas baru dan perlindungan saksi.','Kalau ini dikirim ke klien, pastikan invoice dibayar dulu sebelum mereka sadar.','Art director melihat ini lalu membuka LinkedIn. Bukan untuk cari referensi.','File ini punya energi “yang penting kelihatan desain”. Dan sayangnya, kelihatan.','Kami tidak yakin tombol Undo cukup panjang untuk perjalanan pulang dari sini.'
 ]
},

  // =========================================================
  // D. ROAST BERDASARKAN KATEGORI DESAIN
  // identity, marketing, social, editorial, packaging,
  // digital, illustration, typography, information,
  // presentation, environmental, other
  // =========================================================
  categories: {
 identity:['Logo harus gampang diingat. Yang ini lebih cocok dijadikan barang bukti.','Visual identity bukan tempat seluruh brand guideline dipadatkan jadi satu simbol.','Kalau identitas brand harus dijelaskan lima menit, itu bukan filosofi. Itu pembelaan.','Brand mark ini tidak membangun recognition. Ia membangun pertanyaan.'],
 marketing:['Iklan harus menghentikan orang. Yang berhenti justru hierarchy-nya.','CTA-nya kelihatan seperti figuran padahal dia yang harus bayar sewa.','Campaign visual ini berteriak keras, tapi lupa menyampaikan kenapa orang harus peduli.','Semua informasi minta jadi headline. Marketing-mu butuh mediator.'],
 social:['Feed cuma memberi sepersekian detik. Desain ini menghabiskannya untuk kebingungan.','Konten sosmed harus menghentikan scroll, bukan membuat orang mempercepatnya.','Thumbnail-nya bekerja keras. Pesannya masih cuti.','Kalau ini carousel, slide pertama sudah membuat jempol ingin resign.'],
 editorial:['Hierarchy-nya seperti organisasi tanpa struktur: semua merasa kepala divisi.','Editorial layout harus mengatur ritme baca. Yang ini mengatur tekanan darah.','Grid-nya mungkin ada. Hubungannya dengan konten masih LDR.','Pembaca datang untuk membaca, bukan ikut orientasi medan.'],
 packaging:['Produkmu mungkin premium. Kemasan ini belum diberi tahu.','Shelf impact ada. Dampaknya pada ketenangan jiwa juga ada.','Packaging ini punya banyak hal untuk dikatakan dan tidak tahu kapan berhenti.','Dari tiga meter harusnya bikin ingin ambil. Ini malah bikin ingin baca komposisi bahan lalu pulang.'],
 digital:['User datang mau klik tombol, bukan ikut escape room.','Interface bukan teka-teki silang. Kalau semua butuh dicari, UX-mu sedang buron.','Hierarchy UI-nya perlu onboarding sendiri. Ironis.','User flow tidak seharusnya terasa seperti administrasi kantor kecamatan.'],
 illustration:['Ilustrasinya punya energi. Sayang sebagian energinya dipakai untuk bertengkar dengan komposisi.','Detail boleh liar. Focal point tetap perlu punya alamat.','Visual storytelling-nya ada. Plot twist-nya: mata tidak tahu harus mulai dari mana.','Karakter kuat tidak berarti semua elemen harus bicara bersamaan.'],
 typography:['Hurufnya ekspresif. Mereka mengekspresikan kepanikan.','Type specimen ini membuktikan font punya karakter. Layout-nya juga, sayangnya.','Kerning mungkin tidak bisa kami ukur penuh, tapi kekacauannya cukup terlihat dari orbit.','Tipografi eksperimental bukan surat izin menghapus hierarchy.'],
 information:['Datanya mungkin benar. Cara menjelaskannya sedang diperiksa.','Infografik harus memperjelas informasi, bukan mengubahnya jadi scavenger hunt.','Chart-nya punya data. Kejelasannya sedang dalam masa percobaan.','Kalau legenda butuh legenda, kita punya masalah.'],
 presentation:['Slide ini punya terlalu banyak kata dan terlalu sedikit alasan untuk tetap hidup.','Pitch deck bukan novel. Investor punya jam, bukan musim.','Kalau presenternya harus bilang “sebentar, saya jelaskan slide ini”, slide-nya sudah mengaku bersalah.','Satu slide, tujuh pesan. Fokusnya kerja freelance di tempat lain.'],
 environmental:['Wayfinding yang bagus bikin orang sampai tujuan. Yang ini bikin orang mengenal lingkungan lebih lama dari rencana.','Signage bukan dekorasi dinding yang kebetulan punya teks.','Environmental graphic harus bekerja dari jarak nyata, bukan cuma cantik di mockup.','Kalau orang harus mendekat dua meter untuk paham, signage-nya sedang cosplay jadi brosur.'],
 other:['Kategori “Entahlah” ternyata akurat. Bahkan desainnya ikut tidak yakin dirinya apa.','Kami juga tidak tahu ini apa. Tapi masalah visual tidak membutuhkan KTP.','Identitas proyeknya misterius. Kejahatannya cukup terbaca.']
},

  // =========================================================
  // E. ROAST BERDASARKAN KEPEDEAN
  // =========================================================
  confidenceFinal: {
 bangga:['Oh, kamu bangga? Kepercayaan diri memang gratis. Syukurlah.','Pede sekali. Data forensik menyukai tantangan.','Bangga itu hak semua warga negara, bahkan dalam kondisi seperti ini.'],
 lumayan:['“Lumayan” adalah kata yang bekerja sangat keras menutupi banyak keputusan.','Lumayan. Standar favorit saat deadline tinggal 20 menit.'],
 ragu:['Instingmu bekerja. Pertahankan rasa curiga itu.','Keraguanmu valid. Untuk sekali ini, inner critic-mu tidak ngaco.'],
 klien:['Untuk kepentingan hukum, kami menerima klaim bahwa klien yang menyuruh. Untuk sementara.','Baik. Semua kesalahan akan kami masukkan ke folder “CLIENT REQUEST”.','Klien yang nyuruh? Alibi paling tua dalam sejarah Creative Cloud.']
},

  // =========================================================
  // F. ROAST YANG MENYEBUT NAMA DESAINER
  // {name} otomatis diganti dengan nama user.
  // =========================================================
  nameJabs: [
    {text:"{name}, kami sudah lihat semuanya. Sayangnya mata kami tidak punya tombol undo.", intensity:3, tags:["nama"]},
    {text:"{name}, nama sudah tercatat. Reputasi menyusul setelah revisi.", intensity:4, tags:["nama"]},
    {text:"{name}, ini bukan serangan personal. Datanya kebetulan ikut tidak setuju.", intensity:3, tags:["nama"]},
    {text:"{name}, kalau ini memang sengaja, kami justru makin khawatir.", intensity:4, tags:["nama"]},
    {text:"{name}, file-nya boleh ditutup. Barang bukti sudah cukup.", intensity:4, tags:["nama"]}
  ],

  // =========================================================
  // G. INBOX PRIBADI
  // Tempel kalimat baru di sini kalau belum tahu kategorinya.
  // Bagian ini tidak dipakai engine sampai dipindahkan.
  // =========================================================
  inbox: [
    // "Tulis roast baru di sini dulu."
  ]
};
