function validateForm(event){
    event.preventDefault(); // ⛔ stop submit dulu
    let valid = true;
    let nama = document.getElementById("nama").value;
    let nip = document.getElementById("nip").value;
    let jabatan = document.getElementById("jabatan").value;
    let tmt = document.getElementById("tmt").value;
    let skInput = document.getElementById("sk");
    let sk = skInput.files.length > 0 ? skInput.files[0] : null;

    document.getElementById("errorNama").innerText = "";
    document.getElementById("errorNip").innerText = "";
    document.getElementById("errorJabatan").innerText = "";
    document.getElementById("errorTmt").innerText = "";
    document.getElementById("errorSk").innerText = "";

    let regexNama = /^[A-Za-z\s]{4,}$/;
    if (!regexNama.test(nama)){
        document.getElementById("errorNama").innerText =
        "Nama minimal 4 huruf dan tidak boleh angka.";
        valid = false;
    }
    let regexNip = /^[0-9]{18}$/;
    if (!regexNip.test(nip)){
        document.getElementById("errorNip").innerText =
        "NIP harus 18 digit angka.";
        valid = false;
    }
    if (jabatan === ""){
        document.getElementById("errorJabatan").innerText =
        " Data tidak boleh kosong.";
        valid = false;
    }
    if (tmt === ""){
        document.getElementById("errorTmt").innerText =
        "TMT harus diisi.";
        valid = false;
    }
    if (!sk){
        document.getElementById("errorSk").innerText =
        "File wajib diupload.";
        valid = false;
    } else {
        if (sk.type !== "application/pdf"){
            document.getElementById("errorSk").innerText =
            "File harus PDF.";
            valid = false;
        }
        if (sk.size > 2 * 1024 * 1024){
            document.getElementById("errorSk").innerText =
            "Ukuran maksimal 2MB.";
            valid = false;
        }
    }
     if (valid) {
    Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data jabatan fungsional berhasil disimpan.',
        confirmButtonText: 'OK',
        allowOutsideClick: false
    }).then(() => {
        document.forms['createForm'].submit(); // submit setelah klik OK
    });
}
// ===============================
// ACTIVE MENU (AUTO DETECT PAGE)
// ===============================
const navItems = document.querySelectorAll(".nav-item");

// ambil nama file sekarang
const currentPage = window.location.pathname.split("/").pop();

navItems.forEach((item) => {
  const href = item.getAttribute("href");

  if (href === currentPage) {
    item.classList.add("active");
  }
});

// ===============================
// SIDEBAR MOBILE
// ===============================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const hamburger = document.getElementById("hamburgerBtn");

function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("open");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
}

hamburger.addEventListener("click", () => {
  sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
});

overlay.addEventListener("click", closeSidebar);
}
