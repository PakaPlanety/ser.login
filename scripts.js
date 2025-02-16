document.addEventListener("DOMContentLoaded", function () {
    liff.init({ liffId: "2006858965-zwJ5PVO6" }) // 🔹 เปลี่ยนเป็น LIFF ID ของคุณ
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login(); // ถ้ายังไม่ได้ล็อกอิน ให้ล็อกอินก่อน
            } else {
                liff.getProfile().then(profile => {
                    const userId = encodeURIComponent(profile.userId);

                    // ✅ ใช้ Google Form URL ที่ถูกต้อง
                    const googleFormBaseUrl = "https://docs.google.com/forms/d/1EpYWURCtAhPYh1arJnC2dpABaSma_4i-N0NkZQ0272U/prefill";
                    const formUrl = `${googleFormBaseUrl}?entry.1085755425=${userId}`;

                    console.log("Redirecting to:", formUrl); // ตรวจสอบ URL ที่ถูกส่งไป

                    // 🔥 Redirect ไปยัง Google Form พร้อมค่าที่เติมแล้ว
                    window.location.href = formUrl;
                }).catch(err => console.error("Error getting profile:", err));
            }
        })
        .catch(err => console.error("LIFF Initialization failed", err));
});
