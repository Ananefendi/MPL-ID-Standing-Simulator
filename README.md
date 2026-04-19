# MPL-ID-Standing-Simulator
link : https://ananefendi.github.io/MPL-ID-Standing-Simulator/

Simulasi Klasemen MPL ID dan peluang lolos playoff berdasarkan hasil pertandingan yang dapat diubah secara interaktif.
Project ini menggunakan Monte Carlo simulation untuk menghitung kemungkinan setiap tim masuk ke playoff, upper bracket, lower bracket, atau tereliminasi.

Features

* Live Standings otomatis berubah saat skor diubah
* Monte Carlo Simulation untuk menghitung peluang
* Peluang Playoff (Top 6)
* Upper Bracket (Top 2)
* Lower Bracket (Rank 3-6)
* Eliminasi (Rank 7-9)
* Filter berdasarkan Week (Week 1 - Week 9)
* Reset skor ke kondisi awal (0-0)
* Responsive (Desktop & Mobile)
* Dynamic color berdasarkan persentase peluang
Probability Categories

Category        | Description               

Playoff (1-6)   | Tim masuk playoff         
Upper (1-2)     | Langsung ke upper bracket 
Lower (3-6)     | Masuk lower bracket       
Eliminasi (7-9) | Tidak lolos playoff       

Simulation Logic

Sisa pertandingan disimulasikan secara acak
Setiap simulasi menghasilkan klasemen akhir
Simulasi dilakukan ribuan kali
Persentase dihitung dari frekuensi posisi akhir tim

Contoh:
900 dari 1000 simulasi masuk Top 6 → 90%
300 dari 1000 simulasi Top 2 → 30%

How To Use

1. Pilih hasil pertandingan pada dropdown skor
2. Klasemen akan otomatis berubah
3. Peluang playoff akan dihitung ulang
4. Gunakan filter week untuk melihat jadwal tertentu
5. Klik **Reset to 0-0** untuk mengulang dari awal

Color Meaning
🟢 Hijau : peluang tinggi
🟠 Oren : peluang sedang
🔴 Merah : peluang rendah
🔵 Biru : lower bracket
🟥 Merah terang : eliminasi

Tech Stack

HTML
CSS
Vanilla JavaScript
Monte Carlo Simulation

Layout otomatis menyesuaikan:

Desktop
Tablet
Mobile

License

Free to use for educational and personal projects.

