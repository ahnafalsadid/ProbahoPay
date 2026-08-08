export function pay(storeLogo, storeName, sessionData, gatewaysData, getsessionKey) {
    return (`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Probaho Pay - Select Payment Method</title>
    <link rel="shortcut icon" href="https://i.postimg.cc/nLzm883Y/probahopay-1c.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
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
            --brand-primary: #09090b;
            --brand-hover: #18181b;

            --shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
            --shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
            --radius-md: 8px;
            --radius-lg: 12px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            -webkit-font-smoothing: antialiased;
        }

        body {
            background-color: var(--bg-main);
            color: var(--text-primary);
            min-height: 100vh;
            padding: 40px 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        /* Container Card */
        .verification-container {
            width: 100%;
            max-width: 440px;
            background: var(--surface-card);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Header Section */
        .company-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 24px;
            border-bottom: 1px dashed var(--border-subtle);
        }

        .company-brand {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .company-logo-placeholder {
            width: 32px;
            height: 32px;
            background: var(--brand-primary);
            color: #fff;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 13px;
        }

        .company-name {
            font-size: 15px;
            font-family: poppins;
            color: var(--text-primary);
            letter-spacing: -0.02em;
        }

        .badge-security {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: #f8f9fa;
            border: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            font-size: 11px;
            font-weight: 600;
            padding: 3px 8px;
            border-radius: 100px;
        }

        /* Store Header */
        .store-bar {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 24px;
            background: #fafafa;
            border-bottom: 1px solid var(--border-subtle);
        }

        .store-logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border-subtle);
            object-fit: cover;
            background: #fff;
        }

        .store-details {
            display: flex;
            flex-direction: column;
        }

        .store-name-text {
            font-size: 14px;
            font-weight: 700;
            color: var(--text-primary);
        }

        .store-trx-text {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 1px;
        }

        /* Navigation Tabs */
        nav.tab-nav {
            display: flex;
            border-bottom: 1px solid var(--border-subtle);
            background: #ffffff;
        }

        nav.tab-nav button {
            flex: 1;
            border: none;
            outline: none;
            padding: 12px 0;
            cursor: pointer;
            background: transparent;
            color: var(--text-muted);
            font-weight: 600;
            font-size: 13px;
            transition: all 0.15s ease;
            border-bottom: 2px solid transparent;
        }

        nav.tab-nav button:hover {
            color: var(--text-primary);
        }

        nav.tab-nav button.active {
            color: var(--brand-primary);
            border-bottom: 2px solid var(--brand-primary);
        }

        /* Gateway Selector Grid */
        main.gateway-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background: var(--border-subtle);
            padding: 1px 0;
        }

        main.gateway-grid .pg {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            padding: 16px;
            transition: all 0.2s ease;
            text-decoration: none;
            aspect-ratio: 1 / 1;
        }

        main.gateway-grid .pg:hover {
            background: #fafafa;
        }

        main.gateway-grid .pg img {
            max-width: 80%;
            max-height: 80%;
            object-fit: contain;
            filter: grayscale(100%);
            opacity: 0.75;
            transition: all 0.2s ease;
        }

        main.gateway-grid .pg:hover img {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(1.05);
        }

        /* Amount Bar */
        .amount-summary-bar {
            padding: 14px 24px;
            background: var(--brand-primary);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .amount-label {
            font-size: 13px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
        }

        .amount-value {
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            font-variant-numeric: tabular-nums;
        }

        /* Footer / Terms Bar */
        .terms-bar {
            text-align: center;
            padding: 12px 16px;
            background: #ffffff;
            border-top: 1px solid var(--border-subtle);
        }

        .terms-btn {
            background: none;
            border: none;
            color: var(--text-muted);
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            text-decoration: underline;
            transition: color 0.15s ease;
        }

        .terms-btn:hover {
            color: var(--text-primary);
        }

        /* Modal Design */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(16, 24, 40, 0.4);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease;
            z-index: 999;
            padding: 20px;
        }

        .modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .modal-card {
            background: #ffffff;
            width: 100%;
            max-width: 400px;
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-subtle);
            box-shadow: var(--shadow-sm);
            overflow: hidden;
            transform: scale(0.96);
            transition: all 0.2s ease;
        }

        .modal-overlay.active .modal-card {
            transform: scale(1);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-subtle);
        }

        .modal-header h3 {
            font-size: 15px;
            font-weight: 700;
            color: var(--text-primary);
        }

        .close-btn {
            background: #f8f9fa;
            border: 1px solid var(--border-subtle);
            width: 28px;
            height: 28px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--text-muted);
            transition: all 0.15s ease;
        }

        .close-btn:hover {
            background: var(--border-subtle);
            color: var(--text-primary);
        }

        .modal-body {
            padding: 20px;
            max-height: 280px;
            overflow-y: auto;
        }

        .terms-item {
            margin-bottom: 14px;
        }

        .terms-item:last-child {
            margin-bottom: 0;
        }

        .terms-item h4 {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 4px;
        }

        .terms-item p {
            font-size: 12px;
            color: var(--text-secondary);
            line-height: 1.5;
        }
    </style>
<body>

    <div class="verification-container">
        
        <!-- Header -->
        <div class="company-header">
            <div class="company-brand">
                <img src="https://i.postimg.cc/nLzm883Y/probahopay-1c.png" alt="Company Logo" height="32">
                <span class="company-name">Probaho Pay</span>
            </div>
            <span class="badge-security">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1L10 2.8V6C10 8.5 8.3 10.8 6 11.5C3.7 10.8 2 8.5 2 6V2.8L6 1Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Secure Gateway
            </span>
        </div>

        <!-- Store Info Bar -->
        <div class="store-bar">
            <img id="merchant_logo" class="store-logo" src="${storeLogo}" alt="Merchant Logo">
            <div class="store-details">
                <span id="merchant_name" class="store-name-text">${storeName}</span>
                <span class="store-trx-text">INV: <strong id="trxShow">${sessionData.inv_id || 'N/A'}</strong></span>
            </div>
        </div>

        <!-- Navigation Tabs -->
        <nav class="tab-nav">
            <button id="mfs" class="active">Mobile Banking (MFS)</button>
            <button id="bank">Cards & Net Banking</button>
        </nav>

        <!-- Dynamic Gateway Selector Grid -->
        <main id="main" class="gateway-grid">
        </main>

        <!-- Terms Footer Bar -->
        <div class="terms-bar">
            <button type="button" class="terms-btn" id="openTermsBtn">Terms & Conditions</button>
        </div>

        <!-- Amount Bar -->
        <div class="amount-summary-bar">
            <span class="amount-label">Total Payable</span>
            <span class="amount-value">৳ <span id="pay_amount">${sessionData.amount || 0}</span></span>
        </div>

    </div>

    <!-- Modal for Terms & Conditions -->
    <div class="modal-overlay" id="termsModal">
        <div class="modal-card">
            <div class="modal-header">
                <h3>Terms & Conditions</h3>
                <button class="close-btn" id="closeTermsBtn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="terms-item">
                    <h4>1. Services Overview</h4>
                    <p>Probaho Pay provides a number of services that enable effortless financial transactions for every sector of daily digital commerce.</p>
                </div>
                <div class="terms-item">
                    <h4>2. Reliable Ecosystem</h4>
                    <p>With a promise to enable a user-friendly, all-in-one financial ecosystem, Probaho Pay comes with a low-cost, secure, simple, and fast payment gateway solution.</p>
                </div>
                <div class="terms-item">
                    <h4>3. Merchant & Support Services</h4>
                    <p>Merchants can receive their payments securely using the Probaho Pay Gateway. Customer support is available 24/7 to serve all user queries.</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        const gateways = ${JSON.stringify(gatewaysData || [])};
        const currentSessionKey = "${getsessionKey}";

        let currentTab = 'mfs';

        const mainContainer = document.getElementById('main');
        const mfsBtn = document.getElementById('mfs');
        const bankBtn = document.getElementById('bank');

        const modal = document.getElementById('termsModal');
        const openBtn = document.getElementById('openTermsBtn');
        const closeBtn = document.getElementById('closeTermsBtn');

        openBtn.addEventListener('click', () => modal.classList.add('active'));
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });

        function renderGateways() {
            mainContainer.innerHTML = '';
            const filteredGateways = gateways.filter(gw => gw.gw_type === currentTab);

            if (filteredGateways.length === 0) {
                mainContainer.innerHTML = '<p style="grid-column: span 3; text-align: center; padding: 30px; color: var(--text-muted); font-size: 13px;">No payment gateways available for this option.</p>';
                return;
            }

            filteredGateways.forEach(gw => {
                const element = document.createElement('a');
                element.className = 'pg';
                element.href = gw.gw_url + '?session=' + encodeURIComponent(currentSessionKey);

                element.innerHTML = '<img src="' + gw.gw_logo + '" alt="' + gw.gw_name + '">';
                mainContainer.appendChild(element);
            });
        }

        function setupTabs() {
            mfsBtn.addEventListener('click', () => {
                mfsBtn.classList.add('active');
                bankBtn.classList.remove('active');
                currentTab = 'mfs';
                renderGateways();
            });

            bankBtn.addEventListener('click', () => {
                bankBtn.classList.add('active');
                mfsBtn.classList.remove('active');
                currentTab = 'bank';
                renderGateways();
            });
        }

        setupTabs();
        renderGateways();
    </script>
</body>

</html>
`)
}