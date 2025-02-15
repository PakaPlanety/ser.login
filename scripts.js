document.addEventListener("DOMContentLoaded", function () {
    liff.init({ liffId: "2006858965-zwJ5PVO6" })
        .then(() => {
            console.log("LIFF initialized!");
            if (!liff.isLoggedIn()) {
                liff.login();
                return;
            }

            liff.getProfile()
                .then((profile) => {
                    console.log("LIFF Profile Data:", profile);
                    
                    // ✅ ส่งข้อมูลไปยัง Google Sheets ผ่าน Google Apps Script
                    fetch("https://script.google.com/macros/s/AKfycbxviDQDYBcN5A356e5Gh7QHV_2UMghdS42RueKfZdud9SFEO5EvQU2Zc7lLEZL3HBKK/exec", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            userId: profile.userId,
                            displayName: profile.displayName
                        })
                    })
                    .then(response => response.json())
                    .then(data => console.log("Google Sheets Response:", data))
                    .catch(error => console.error("Error sending data:", error));
                })
                .catch(err => console.error("Error getting profile:", err));
        })
        .catch(err => console.error("LIFF Initialization failed", err));
});

