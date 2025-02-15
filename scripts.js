document.addEventListener("DOMContentLoaded", function () {
    const GAS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxviDQDYBcN5A356e5Gh7QHV_2UMghdS42RueKfZdud9SFEO5EvQU2Zc7lLEZL3HBKK/exec"; // เปลี่ยนเป็น Webhook URL ของ Google Apps Script
    const FORM_URL = "https://forms.gle/wqYv9qzvwsSWHBnUA"; // เปลี่ยนเป็น URL ของ Google Form

    liff.init({ liffId: "2006858965-zwJ5PVO6" })
        .then(() => {
            console.log("LIFF initialized!");

            if (!liff.isLoggedIn()) {
                console.log("User not logged in, redirecting to login...");
                liff.login();
                return;
            }

            console.log("User is logged in, fetching profile...");
            liff.getProfile()
                .then((profile) => {
                    console.log("LIFF Profile Data:", profile);

                    // ✅ ส่งข้อมูลไปบันทึกใน Google Sheets
                    fetch(GAS_WEBHOOK_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            userId: profile.userId,
                            displayName: profile.displayName
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Google Sheets Response:", data);
                        if (data.status === "success") {
                            console.log("Data saved successfully! Redirecting to Google Form...");
                            window.location.href = FORM_URL; // ✅ Redirect ไปที่ Google Form
                        } else {
                            console.error("Error saving data:", data.message);
                        }
                    })
                    .catch(error => console.error("Error sending data:", error));
                })
                .catch(err => console.error("Error getting profile:", err));
        })
        .catch(err => console.error("LIFF Initialization failed", err));
});
