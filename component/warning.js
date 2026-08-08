export const warn = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Error - Probaho Pay</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

    <style>
        :root {--bg-main: #fcfcfd;
            --surface-card: #ffffff;
            --border-subtle: #eaecf0;
            --border-active: #d0d5dd;
            --text-primary: #101828;
            --text-secondary: #475467;
            --text-muted: #667085;
            --brand-primary: #09090b;
            --brand-hover: #18181b;

            /* Alert Palette */
            --error-bg: #fef3f2;
            --error-border: #fecdca;
            --error-text: #b42318;

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
            max-width: 480px;
            background: var(--surface-card);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: 32px;
        }

        /* Company Logo Header Section */
        .company-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 24px;
            border-bottom: 1px dashed var(--border-subtle);
            margin-bottom: 28px;
        }

        .company-brand {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .company-logo-placeholder {
            width: 36px;
            height: 36px;
            background: var(--brand-primary);
            color: #fff;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
        }

        .company-name {
            font-family: poppins;
            font-size: 16px;
            color: var(--text-primary);
            letter-spacing: -0.02em;
        }

        .badge-error {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: var(--error-bg);
            border: 1px solid var(--error-border);
            color: var(--error-text);
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 100px;
        }

        /* Status Block */
        .status-block {
            text-align: center;
            margin-bottom: 28px;
        }

        .status-icon-wrapper {
            width: 52px;
            height: 52px;
            background: var(--error-bg);
            border: 1px solid var(--error-border);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
        }

        .status-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 6px;
        }

        .status-subtitle {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
        }

        .error-detail-box {
            background: #fafafa;
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
            padding: 12px 16px;
            font-size: 12px;
            color: var(--text-muted);
            text-align: center;
            margin-bottom: 28px;
            word-break: break-word;
        }

        /* Action Group */
        .action-group {
            display: flex;
            gap: 12px;
        }

        .btn-primary {
            width: 100%;
            height: 42px;
            background: var(--brand-primary);
            border: none;
            border-radius: var(--radius-md);
            color: #ffffff;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: var(--shadow-sm);
            transition: background 0.15s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
        }

        .btn-primary:hover {
            background: var(--brand-hover);
        }

        /* Footer */
        .verification-footer {
            margin-top: 24px;
            text-align: center;
            font-size: 12px;
            color: var(--text-muted);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }
    </style>
</head>

<body>

    <div class="verification-container">
        
        <!-- Header with Company Logo -->
        <div class="company-header">
            <div class="company-brand">
                <img src="https://i.postimg.cc/nLzm883Y/probahopay-1c.png" alt="Company Logo" height="32">
                <span class="company-name">Probaho Pay</span>
            </div>
            <span class="badge-error">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3.5V6.5M6 8.5H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Error
            </span>
        </div>

        <!-- Status Icon & Title -->
        <div class="status-block">
            <div class="status-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#B42318" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h1 class="status-title">Request Failed</h1>
            <p class="status-subtitle">The request could not be completed.</p>
        </div>

        <!-- Technical Detail Box -->
        <div class="error-detail-box">
            Reason: Unknown error or invalid session key.
        </div>

        <!-- Action Button -->
        <div class="action-group">
            <button class="btn-primary" onclick="window.history.back()">
                Go Back
            </button>
        </div>

        <!-- Footer -->
        <div class="verification-footer">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5H9.33333V3.66667C9.33333 1.82572 7.84095 0.333336 6 0.333336C4.15905 0.333336 2.66667 1.82572 2.66667 3.66667V5H2C1.26362 5 0.666664 5.59695 0.666664 6.33334V11.6667C0.666664 12.403 1.26362 13 2 13H10C10.7364 13 11.3333 12.403 11.3333 11.6667V6.33334C11.3333 5.59695 10.7364 5 10 5ZM6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9C7 9.55228 6.55228 10 6 10ZM8 5H4V3.66667C4 2.5621 4.89543 1.66667 6 1.66667C7.10457 1.66667 8 2.5621 8 3.66667V5Z" fill="#667085"/>
            </svg>
            Automated system by Probaho Pay
        </div>

    </div>

</body>

</html>`;