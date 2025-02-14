document.addEventListener("DOMContentLoaded", function () {
    liff.init({ liffId: "2006858965-zwJ5PVO6" }) // เปลี่ยนเป็น LIFF ID ของคุณ
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login(); // ถ้ายังไม่ได้ล็อกอิน ให้ล็อกอินก่อน
            } else {
                liff.getProfile().then(profile => {
                    const userId = profile.userId;
                    const displayName = profile.displayName;

                    // 🔹 เปลี่ยนเป็น Google Form URL ของคุณ
                    const googleFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTdYwbxDY7G5V3QcmmTtQ63jRHhDQ4i219Y7P-ATLiCv4mGw/viewform";
                    const formUrl = `${googleFormBaseUrl}?entry.891555194=${userId}&entry.24142266=${displayName}`;

                    // 🔥 Redirect ไปยัง Google Form พร้อมค่าที่เติมแล้ว
                    window.location.href = formUrl;
                }).catch(err => console.error(err));
            }
        })
        .catch(err => console.error("LIFF Initialization failed", err));
});
