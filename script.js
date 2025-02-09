<script>
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Stop observing after the first animation
      }
    });
  }, {
    threshold: 0.1
  });

  const sections = document.querySelectorAll('.sectionikah');
  sections.forEach(section => {
    observer.observe(section);
  });

  const floatingItems = document.querySelectorAll('.floating-item, .faces .face, .wedding-title1, .wedding-title, .invitation-text, .invitation-textkpd, .invpenerima, .play-button, .invitation-text2, .coming-soon, .date, .invitation-textsec, .buttonsnikah, .video-quote, .quote, .couple-info, .bride-groom, .person');
  floatingItems.forEach(item => {
    observer.observe(item);
  });
});
  </script>
    <script>
        // JavaScript to dynamically set the fullscreenikah image source
        let scrollTop = 0;

        document.querySelectorAll('.gallerynikah-item').forEach(item => {
            item.addEventListener('click', event => {
                const imgSrc = item.querySelector('img').src;
                document.getElementById('fullscreenikah-img').src = imgSrc;
                document.getElementById('fullscreenikah').style.display = 'flex';
        });

        // Close fullscreenikah when clicking outside the image
        document.getElementById('fullscreenikah').addEventListener('click', event => {
            if (event.target === document.getElementById('fullscreenikah')) {
                document.getElementById('fullscreenikah').style.display = 'none';
            }
        });
    </script>
    <script>
const containeropen = document.querySelector(".containeropen");
const containeropencarrossel3d = containeropen.querySelector(".containeropen-carrossel3d");
const carrossel3d = containeropen.querySelector(".carrossel3d");
const carrossel3dItems = carrossel3d.querySelectorAll(".carrossel3d-item");

// Iniciamos variables que cambiaran su estado.
let isMouseDown = false;
let currentMousePos = 0;
let lastMousePos = 0;
let lastMoveTo = 0;
let moveTo = 0;

const createcarrossel3d = () => {
  const carrossel3dProps = onResize();
  const length = carrossel3dItems.length; // Longitud del array
  const degress = 360 / length; // Grados por cada item
  const gap = 20; // Espacio entre cada item
  const tz = distanceZ(carrossel3dProps.w, length, gap);

  const fov = calculateFov(carrossel3dProps);
  const height = calculateHeight(tz);

  containeropen.style.width = tz * 2 + gap * length + "px";
  containeropen.style.height = height + "px";

  carrossel3dItems.forEach((item, i) => {
    const degressByItem = degress * i + "deg";
    item.style.setProperty("--rotatey", degressByItem);
    item.style.setProperty("--tz", tz + "px");
  });
};

// Funcion que da suavidad a la animacion
const lerp = (a, b, n) => {
  return n * (a - b) + b;
};

// https://3dtransforms.desandro.com/carousel
const distanceZ = (widthElement, length, gap) => {
  return widthElement / 2 / Math.tan(Math.PI / length) + gap; // Distancia Z de los items
};

// Calcula el alto del contenedor usando el campo de vision y la distancia de la perspectiva
const calculateHeight = (z) => {
  const t = Math.atan((90 * Math.PI) / 180 / 2);
  const height = t * 2 * z;

  return height;
};

// Calcula el campo de vision del carrossel3d
const calculateFov = (carrossel3dProps) => {
  const perspective = window
    .getComputedStyle(containeropencarrossel3d)
    .perspective.split("px")[0];

  const length =
    Math.sqrt(carrossel3dProps.w * carrossel3dProps.w) +
    Math.sqrt(carrossel3dProps.h * carrossel3dProps.h);
  const fov = 2 * Math.atan(length / (2 * perspective)) * (180 / Math.PI);
  return fov;
};

// Obtiene la posicion X y evalua si la posicion es derecha o izquierda
const getPosX = (x) => {
  currentMousePos = x;

  moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;

  lastMousePos = currentMousePos;
};

const update = () => {
  lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
  carrossel3d.style.setProperty("--rotatey", lastMoveTo + "deg");

  requestAnimationFrame(update);
};

const onResize = () => {
  // Obtiene la propiedades del tamaño de carrossel3d
  const boundingcarrossel3d = containeropencarrossel3d.getBoundingClientRect();

  const carrossel3dProps = {
    w: boundingcarrossel3d.width,
    h: boundingcarrossel3d.height,
  };

  return carrossel3dProps;
};

const initEvents = () => {
  // Eventos del mouse
  carrossel3d.addEventListener("mousedown", () => {
    isMouseDown = true;
    carrossel3d.style.cursor = "grabbing";
  });
  carrossel3d.addEventListener("mouseup", () => {
    isMouseDown = false;
    carrossel3d.style.cursor = "grab";
  });
  containeropen.addEventListener("mouseleave", () => (isMouseDown = false));

  carrossel3d.addEventListener(
    "mousemove",
    (e) => isMouseDown && getPosX(e.clientX)
  );

  // Eventos del touch
  carrossel3d.addEventListener("touchstart", () => {
    isMouseDown = true;
    carrossel3d.style.cursor = "grabbing";
  });
  carrossel3d.addEventListener("touchend", () => {
    isMouseDown = false;
    carrossel3d.style.cursor = "grab";
  });
  containeropen.addEventListener(
    "touchmove",
    (e) => isMouseDown && getPosX(e.touches[0].clientX)
  );

  window.addEventListener("resize", createcarrossel3d);

  update();
  createcarrossel3d();
};

initEvents();
</script>
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