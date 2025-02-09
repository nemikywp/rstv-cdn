    <script>
        // Set the target date and time for the countdown
        const targetDate = new Date("June 1, 2025 23:59:59").getTime();

        // Update the countdown timer every second
        const updateTimer = () => {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the difference between the target date and the current date
            const distance = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="timer"
            document.querySelector('.days span').textContent = days;
            document.querySelector('.hours span').textContent = hours;
            document.querySelector('.minutes span').textContent = minutes;
            document.querySelector('.seconds span').textContent = seconds;

            // If the countdown is finished, display a message
            if (distance < 0) {
                clearInterval(interval);
                document.getElementById("timer").innerHTML = "SEDANG BERLANGSUNG";
            }
        };

        // Update the timer every second
        const interval = setInterval(updateTimer, 1000);
    </script>
<script>
    // Fungsi untuk mengambil parameter dari URL
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Ambil nilai parameter 'kepada' dari URL
    let kepada = getParameterByName('kepada');

    // Jika parameter 'kepada' ada, sesuaikan konten
    if (kepada) {
        document.getElementById('nama-penerima').innerText = kepada;
    } else {
        document.getElementById('nama-penerima').innerText = "Tamu Undangan";
    }
</script>
<script>
        let slideosIndex = 0;
    
    function showDetails() {
      const contentos = document.getElementById('contentos');
      const details = document.getElementById('details');
    
      // Hide the contentos and show the details
      if (contentos.style.display === 'none') {
        contentos.style.display = 'block';
        details.style.display = 'none';
      } else {
        contentos.style.display = 'none';
        details.style.display = 'block';
      }
    }
    
    function changeslideos(n) {
      const slideoss = document.querySelectorAll('.slideos');
      const carouselos = document.querySelector('.carouselos');
    
      // Remove active class from all slideoss
      slideoss.forEach(slideos => slideos.classList.remove('active'));
    
      // Update slideosIndex
      slideosIndex = (slideosIndex + n + slideoss.length) % slideoss.length;
    
      // Add active class to the current slideos
      slideoss[slideosIndex].classList.add('active');
    
      // Calculate the new transform value for the carouselos
      const slideosWidth = slideoss[0].offsetWidth;
      const transformValue = -slideosIndex * slideosWidth;
    
      // Apply the new transform value to the carouselos
      carouselos.style.transform = `translateX(${transformValue}px)`;
    }
  </script>
<script>
function simpanKeKalender() {
    // Data event yang akan disimpan ke kalender
    const namaEvent = "Pernikahan Mario dan Risna";
    const lokasiEvent = "Lokasi Belum ditentukan";
    const deskripsiEvent = "Jangan Lupa datang ya :)";
    const tanggalMulai = "20250601T00000";
    const tanggalSelesai = "20250602T000000";

    // Membuat URL untuk menambahkan event ke kalender
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(namaEvent)}&dates=${encodeURIComponent(tanggalMulai)}/${encodeURIComponent(tanggalSelesai)}&details=${encodeURIComponent(deskripsiEvent)}&location=${encodeURIComponent(lokasiEvent)}`;

    // Membuka URL di tab baru
    window.open(url, '_blank');
}
</script>
