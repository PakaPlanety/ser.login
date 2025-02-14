document.addEventListener("DOMContentLoaded", function () {
    liff.init({ liffId: "2006858965-zwJ5PVO6" }) // เปลี่ยนเป็น LIFF ID ของคุณ
        .then(() => {
            if (!liff.isLoggedIn()) {
                liff.login(); // บังคับล็อกอินถ้ายังไม่ได้ล็อกอิน
            } else {
                liff.getProfile().then(profile => {
                    console.log("LIFF Profile Data:", profile); // ✅ ตรวจสอบค่า profile ที่แท้จริง

                    if (!profile || !profile.userId || !profile.displayName) {
                        console.error("Error: LIFF profile is missing data");
                        return;
                    }

                    const userId = encodeURIComponent(profile.userId);
                    const displayName = encodeURIComponent(profile.displayName);

                    // ✅ ใช้ Google Form URL ที่ถูกต้อง
                    const googleFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeTdYwbxDY7G5V3QcmmTtQ63jRHhDQ4i219Y7P-ATLiCv4mGw/viewform";
                    const formUrl = `${googleFormBaseUrl}?entry.891555194=${userId}&entry.24142266=${displayName}`;

                    console.log("Redirecting to:", formUrl); // ✅ ตรวจสอบลิงก์
                    window.location.href = formUrl;
                }).catch(err => console.error("Error getting profile:", err));
            }
        })
        .catch(err => console.error("LIFF Initialization failed", err));
});
