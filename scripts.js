document.addEventListener("DOMContentLoaded", function () {
    console.log("Initializing LIFF...");

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

                    const userId = encodeURIComponent(profile.userId);
                    const displayName = encodeURIComponent(profile.displayName);
                    
                    // ✅ ตรวจสอบ URL ก่อน Redirect
                    const formUrl = `https://docs.google.com/spreadsheets/d/1Xq2hYQrWe7x_GBxFDb8rz83VPaPdX8OPljtWKtlGVbg`;
                    console.log("Generated Form URL:", formUrl);

                    // ✅ เช็คว่า LIFF พยายาม Redirect หรือไม่
                    setTimeout(() => {
                        console.log("Redirecting now...");
                        window.location.href = formUrl;
                    }, 2000);  // ✅ หน่วงเวลา 2 วินาที เพื่อดู Log ก่อน Redirect
                })
                .catch(err => console.error("Error getting profile:", err));
        })
        .catch(err => console.error("LIFF Initialization failed", err));
});
