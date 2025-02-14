document.addEventListener("DOMContentLoaded", function () {
    liff.init({ liffId: "2006858965-zwJ5PVO6" }) // เปลี่ยนเป็น LIFF ID ของคุณ
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login(); // ถ้ายังไม่ได้ล็อกอิน ให้ล็อกอินก่อน
            } else {
                liff.getProfile().then(profile => {
                    const userId = encodeURIComponent(profile.userId);
                    const displayName = encodeURIComponent(profile.displayName);

                    // 🔹 ใช้ Google Form URL และ Entry ID ที่ถูกต้อง
                    const googleFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTdYwbxDY7G5V3QcmmTtQ63jRHhDQ4i219Y7P-ATLiCv4mGw/viewform";
                    const formUrl = `${googleFormBaseUrl}?entry.891555194=${userId}&entry.24142266=${displayName}`;

                    // 🔥 Redirect ไปยัง Google Form พร้อมค่าที่เติมแล้ว
                    window.location.href = formUrl;
                }).catch(err => console.error("Error getting profile:", err));
            }
        })
        .catch(err => console.error("LIFF Initialization failed", err));
});
