<br>
<p align="center">
  <a href="#"><img src="https://i.postimg.cc/430Vw8B6/Group-24.png"/></a>
</p>
<p align="center">
  <b>Made for Bangladesh to ensure hassle free payments</b>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/version-1.0-FF0000?style=for-the-badge">
    <img src="https://img.shields.io/badge/Language-Javascript-feda22?style=for-the-badge&logo=javascript">
    <img src="https://img.shields.io/badge/Backend-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge">
</p>

# 📚 Documentation
### 01. Installing 
Import script via
```JS
import { probahopay } from "";
```
#### For initializing
```JS
probahopay.init();
```
### 02. Making a payment session
Ready with required parameters
| Name | Importance | Data Type | Value / Description |
| :--- | :--- | :--- | :--- |
| `onlineMode` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `bool` | Set to `true` or `false` for online mode |
| `store.merchantId` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `str` | Unique merchant identifier (`currentMerchantId`) |
| `store.apiKey` | <a href="#"><img src="https://img.shields.io/badge/optional-blue"></a> | `str` | Store API key for authorization |
| `store.invId` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `str` / `int` | Unique invoice reference ID (`inv_id`) |
| `customer.name` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `str` | Customer's full name (`currentName`) |
| `customer.id` | <a href="#"><img src="https://img.shields.io/badge/optional-blue"></a> | `str` | Unique customer client ID |
| `customer.email` | <a href="#"><img src="https://img.shields.io/badge/optional-blue"></a> | `str` | Customer email address |
| `customer.address` | <a href="#"><img src="https://img.shields.io/badge/optional-blue"></a> | `str` | Customer physical address |
| `customer.phone` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `str` / `int` | Customer phone number |
| `checkout.amount` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `int` / `float` | Total payment amount (`currentAmount`) |
| `checkout.description` | <a href="#"><img src="https://img.shields.io/badge/optional-blue"></a> | `str` | Payment description string |
| `checkout.successUrl` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `str` | Callback URL on successful payment |
| `checkout.cancelUrl` | <a href="#"><img src="https://img.shields.io/badge/mandatory-FF0000"></a> | `str` | Callback URL on cancelled/failed payment |
| `checkout.metadata` | <a href="#"><img src="https://img.shields.io/badge/optional-blue"></a> | `JSON` / `null` | Additional custom key-value data |

#### Make a variable with above contents
```JS
const payloadData = {
    onlineMode: false,
    store: {
        merchantId: "YOUR_MERCHANT_ID",
        apiKey: "YOUR_API_KEY",
        invId: "INV-88231",
    },
    customer: {
        name: "John Doe",
        id: "abclient",
        email: "john.doe@example.com",
        address: "123 Tech Street, Suite 400",
        phone: "+8801xxxxxxxxx",
    },
    checkout: {
        amount: 2500,
        description: "A4TECH Wireless Keyboard.",
        successUrl: "http://127.0.0.1:5500/sandbox/success.html",
        cancelUrl: "http://127.0.0.1:5500/sandbox/error.html",
        metadata: null
    }
};
```

<p align="center">
  <a href="#"><img src="https://i.postimg.cc/xdtvQwgv/footer.jpg"/></a>
</p>
