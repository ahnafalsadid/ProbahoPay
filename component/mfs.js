export function mfs(storeLogo, storeName, invId, method, number, amount, cancelRedirectUrl) {
    return (`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment - Probaho Pay</title>
    <link rel="shortcut icon" href="https://i.postimg.cc/nLzm883Y/probahopay-1c.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet">
</head>
<style>
    :root {
        --bg-main: #fcfcfd;
        --surface-card: #ffffff;
        --border-subtle: #eaecf0;
        --border-active: #d0d5dd;
        --text-primary: #101828;
        --text-secondary: #475467;
        --text-muted: #667085;
        
        --checkout-primary: #000000;
        --checkout-hover: #313131;
        --checkout-bg-subtle: #ececec;
        --checkout-border-subtle: #c9c9c9;

        --danger-bg: #fef2f2;
        --danger-border: #fee2e2;
        --danger-text: #b91c1c;
        --shadow-xs: 0px 1px 2px rgba(16, 24, 40, .05);
        --shadow-sm: 0px 1px 3px rgba(16, 24, 40, .1), 0px 1px 2px rgba(16, 24, 40, .06);
        --shadow-modal: 0px 12px 16px -4px rgba(16, 24, 40, .08), 0px 4px 6px -2px rgba(16, 24, 40, .03);
        --radius-md: 8px;
        --radius-lg: 12px
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased
    }

    body {
        background-color: var(--bg-main);
        color: var(--text-primary);
        min-height: 100vh;
        padding: 40px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .verification-container {
        width: 100%;
        max-width: 440px;
        background: var(--surface-card);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        overflow: hidden;
        animation: fadeIn .3s ease-in-out
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(8px)
        }

        to {
            opacity: 1;
            transform: translateY(0)
        }
    }

    .company-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 24px;
        border-bottom: 1px dashed var(--border-subtle)
    }

    .company-brand {
        display: flex;
        align-items: center;
        gap: 10px
    }

    .company-logo-placeholder {
        width: 32px;
        height: 32px;
        background: #09090b;
        color: #fff;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 13px
    }

    .company-name {
        font-size: 15px;
        font-family: poppins;
        color: var(--text-primary);
        letter-spacing: -.02em
    }

    .badge-checkout {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: var(--checkout-bg-subtle);
        border: 1px solid var(--checkout-border-subtle);
        color: var(--checkout-primary);
        font-size: 11px;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 100px
    }

    .store-bar {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 24px;
        background: #fafafa;
        border-bottom: 1px solid var(--border-subtle)
    }

    .store-logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--border-subtle);
        object-fit: cover;
        background: #fff
    }

    .store-details {
        display: flex;
        flex-direction: column
    }

    .store-name-text {
        font-size: 14px;
        font-weight: 700;
        color: var(--text-primary)
    }

    .store-trx-text {
        font-size: 12px;
        color: var(--text-muted);
        margin-top: 1px
    }

    main.content-body {
        padding: 24px
    }

    .input-wrapper {
        margin-bottom: 24px
    }

    .input-label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: .03em
    }

    main input[type="text"] {
        width: 100%;
        padding: 14px;
        border: 1.5px solid var(--border-subtle);
        border-radius: var(--radius-md);
        font-size: 16px;
        outline: none;
        transition: all .15s ease-in-out;
        color: var(--text-primary);
        text-transform: uppercase;
        font-weight: 700;
        text-align: center;
        letter-spacing: 2px;
        box-shadow: var(--shadow-xs)
    }

    main input[type="text"]:focus {
        border-color: var(--checkout-primary);
        box-shadow: 0 0 0 4px rgba(213, 213, 213, 0.616)
    }

    main input[type="text"]::placeholder {
        color: #d0d5dd;
        font-weight: 500;
        letter-spacing: 0;
        font-size: 14px;
        text-transform: none
    }

    .instructions-card {
        background: #fff;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-md);
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px
    }

    .info-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px
    }

    .info-label {
        color: var(--text-muted);
        font-weight: 500
    }

    .info-value-group {
        display: flex;
        align-items: center;
        gap: 8px
    }

    .info-value {
        color: var(--text-primary);
        font-weight: 700;
        font-variant-numeric: tabular-nums
    }

    .copy-btn {
        background: var(--checkout-bg-subtle);
        color: var(--checkout-primary);
        border: 1px solid var(--checkout-border-subtle);
        border-radius: 6px;
        padding: 3px 8px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        transition: all .15s ease;
        user-select: none
    }

    .copy-btn:hover {
        background: var(--checkout-primary);
        color: #fff;
        border-color: var(--checkout-primary)
    }

    .copy-btn:active {
        transform: scale(.96)
    }

    .divider {
        height: 1px;
        background: var(--border-subtle)
    }

    .tutorial-link-box {
        margin-top: 16px;
        text-align: center
    }

    .tutorial-link-box a {
        color: var(--checkout-primary);
        text-decoration: none;
        font-size: 13px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: opacity .15s ease
    }

    .tutorial-link-box a:hover {
        text-decoration: underline;
        opacity: .9
    }

    .action-footer {
        padding: 16px 24px;
        background: #fff;
        border-top: 1px solid var(--border-subtle);
        display: flex;
        flex-direction: column;
        gap: 10px
    }

    .btn-verify {
        cursor: pointer;
        color: #fff;
        border: none;
        outline: none;
        background: var(--checkout-primary);
        padding: 12px 0;
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        border-radius: var(--radius-md);
        transition: background .15s ease;
        box-shadow: var(--shadow-sm)
    }

    .btn-verify:hover {
        background: var(--checkout-hover)
    }

    .btn-cancel-trigger {
        background: none;
        border: none;
        color: var(--text-muted);
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        padding: 6px;
        border-radius: var(--radius-md);
        transition: all .15s ease
    }

    .btn-cancel-trigger:hover {
        color: var(--danger-text);
        background: var(--danger-bg)
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(16, 24, 40, .4);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all .2s ease;
        z-index: 999;
        padding: 20px
    }

    .modal-overlay.active {
        opacity: 1;
        visibility: visible
    }

    .cancel-modal-card {
        background: #fff;
        width: 100%;
        max-width: 380px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border-subtle);
        box-shadow: var(--shadow-modal);
        padding: 24px;
        text-align: center;
        transform: scale(.95);
        transition: all .2s ease
    }

    .modal-overlay.active .cancel-modal-card {
        transform: scale(1)
    }

    .cancel-icon-wrapper {
        width: 48px;
        height: 48px;
        background: var(--danger-bg);
        border: 1px solid var(--danger-border);
        color: var(--danger-text);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px auto
    }

    .cancel-modal-title {
        font-size: 16px;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 8px
    }

    .cancel-modal-desc {
        font-size: 13px;
        color: var(--text-secondary);
        line-height: 1.5;
        margin-bottom: 20px
    }

    .modal-btn-group {
        display: flex;
        gap: 12px
    }

    .btn-modal-back {
        flex: 1;
        background: #fff;
        border: 1px solid var(--border-active);
        color: var(--text-primary);
        font-size: 13px;
        font-weight: 600;
        padding: 10px;
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: all .15s ease
    }

    .btn-modal-back:hover {
        background: #f8f9fa
    }

    .btn-modal-confirm {
        flex: 1;
        background: #dc2626;
        border: 1px solid #dc2626;
        color: #fff;
        font-size: 13px;
        font-weight: 600;
        padding: 10px;
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: all .15s ease
    }

    .btn-modal-confirm:hover {
        background: #b91c1c
    }

    .toast-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        pointer-events: none
    }

    .toast {
        background: var(--text-primary);
        color: #fff;
        padding: 12px 18px;
        border-radius: var(--radius-md);
        font-size: 13px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: var(--shadow-sm);
        opacity: 0;
        visibility: hidden;
        transition: all .25s ease
    }

    .toast.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0)
    }

    .toast.hide {
        opacity: 0;
        transform: translateY(-10px)
    }
</style>

<body>
    <div class="toast-container">
        <div id="toast_msg" class="toast">
            <span id="toast_text">Copied to Clipboard!</span>
        </div>
    </div>

    <div class="verification-container">
        <div class="company-header">
            <div class="company-brand">
                <img src="./assets/probahopay-1c.png" alt="Company Logo" height="32">
                <span class="company-name">Probaho Pay</span>
            </div><img src="../assets/bkash.png" height="50">
        </div>

        <div class="store-bar">
            <img id="merchant_logo" class="store-logo" src="${storeLogo}" alt="Merchant Logo">
            <div class="store-details">
                <span id="merchant_name" class="store-name-text">${storeName}</span>
                <span class="store-trx-text">INV: <strong id="trxShow">${invId}</strong></span>
            </div>
        </div>

        <main class="content-body">
            <div class="input-wrapper">
                <label for="trx_id" class="input-label">Enter Transaction ID</label>
                <input type="text" name="trx_id" id="trx_id" placeholder="e.g. 9N76AX12K" autocomplete="off">
            </div>

            <div class="instructions-card">
                <div class="info-row">
                    <span class="info-label">Payment Method</span>
                    <span id="method" class="info-value">${method}</span>
                </div>

                <div class="divider"></div>

                <div class="info-row">
                    <span class="info-label">Receiver Number</span>
                    <div class="info-value-group">
                        <span id="num" class="info-value">${number}</span>
                        <button type="button" class="copy-btn" onclick="copyText('num', 'Number copied successfully!')">
                            Copy
                        </button>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="info-row">
                    <span class="info-label">Amount Payable</span>
                    <span class="info-value">৳ <span id="amnt">${amount}</span></span>
                </div>

                <div class="divider"></div>

                <div class="info-row">
                    <span class="info-label">Reference Code</span>
                    <div class="info-value-group">
                        <span id="ref_num" class="info-value">${invId}</span>
                        <button type="button" class="copy-btn" onclick="copyText('ref_num', 'Reference code copied!')">
                            Copy
                        </button>
                    </div>
                </div>
            </div>

            <div class="tutorial-link-box">
                <a href="#" target="_blank">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                    How to pay (Tutorial)
                </a>
            </div>
        </main>

        <div class="action-footer">
            <button id="pay_amount" class="btn-verify" onclick="verifyPayment()">Verify Payment</button>
            <button type="button" class="btn-cancel-trigger" id="openCancelModalBtn">Cancel Payment</button>
        </div>
    </div>

    <div class="modal-overlay" id="cancelModal">
        <div class="cancel-modal-card">
            <div class="cancel-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                    </path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            </div>
            <h3 class="cancel-modal-title">Cancel Transaction?</h3>
            <p class="cancel-modal-desc">Are you sure you want to cancel this payment? You will be redirected back to
                the merchant store.</p>

            <div class="modal-btn-group">
                <button type="button" class="btn-modal-back" id="closeCancelModalBtn">No, Go Back</button>
                <button type="button" class="btn-modal-confirm" id="confirmCancelBtn">Yes, Cancel</button>
            </div>
        </div>
    </div>



    <script>
        let toastTimeout;

        function showToast(message) {
            const toast = document.getElementById("toast_msg");
            const toastText = document.getElementById("toast_text");

            clearTimeout(toastTimeout);
            toastText.innerText = message;
            toast.classList.remove("hide");
            toast.classList.add("show");

            toastTimeout = setTimeout(() => {
                toast.classList.remove("show");
                toast.classList.add("hide");
            }, 2200);
        }

        function copyText(elementId, successMessage) {
            const el = document.getElementById(elementId);
            if (!el) return;
            const textToCopy = el.innerText.trim();
            navigator.clipboard.writeText(textToCopy);
            showToast(successMessage);
        }

        async function verifyPayment() {
            const trxInput = document.getElementById("trx_id").value.trim();
            if (trxInput === "") {
                showToast("⚠️ Please enter a Transaction ID!");
                return;
            }

            showToast("⏳ Verifying transaction code...");

            try {
                const response = await fetch('/api/verify-payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ session: session, trx_id: trxInput })
                });

                const result = await response.json();

                if (!response.ok || !result.success) {
                    showToast(result.message || "TRXID not found");
                } else {
                    showToast("✅ Payment Verified!");
                    if (result.redirectUrl) {
                        setTimeout(() => {
                            window.location.href = result.redirectUrl;
                        }, 1000);
                    }
                }
            } catch (err) {
                showToast("Server error during verification");
            }
        }

        const cancelModal = document.getElementById("cancelModal");
        const openModalBtn = document.getElementById("openCancelModalBtn");
        const closeModalBtn = document.getElementById("closeCancelModalBtn");
        const confirmCancelBtn = document.getElementById("confirmCancelBtn");

        openModalBtn.addEventListener("click", () => cancelModal.classList.add("active"));
        closeModalBtn.addEventListener("click", () => cancelModal.classList.remove("active"));

        cancelModal.addEventListener("click", (e) => {
            if (e.target === cancelModal) cancelModal.classList.remove("active");
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && cancelModal.classList.contains("active")) {
                cancelModal.classList.remove("active");
            }
        });

        confirmCancelBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('/api/cancel-payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ session: session })
                });

                const result = await response.json();

                if (!response.ok || !result.success) {
                    showToast("Database Error");
                } else {
                    showToast("🚫 Payment cancelled!");
                    setTimeout(() => {
                        window.location.href = ${cancelRedirectUrl} + "?session=" + encodeURIComponent(session);
                    }, 800);
                }
            } catch (err) {
                showToast("Connection Error");
            }
        });
    </script>
</body>

</html>`)
}