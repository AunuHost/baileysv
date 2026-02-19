# AunuHost Baileys

<p align="center">
  <img src="https://files.catbox.moe/369pux.jpg" alt="AunuHost Baileys Thumbnail" width="500" />
</p>

**AunuHost Baileys** is a high-performance, open-source library designed to help developers build WhatsApp automation solutions and integrations efficiently. By utilizing WebSocket technology without the need for a browser, this library supports a wide range of features including message management, chat handling, group administration, and interactive action buttons for a dynamic user experience.

This fork is actively maintained to ensure maximum stability and speed. Our main focus is optimizing the pairing process and reducing resource consumption, making it one of the most lightweight Baileys implementations available.

---

### Main Features and Advantages

- **Optimized Stability**: Fixed common pairing and disconnection issues found in previous versions.
- **High Performance**: Pruned codebase for faster response times and lower RAM usage.
- **Custom Pairing**: Support for automatic and custom pairing processes with your own codes.
- **Interactive Messages**: Full support for action buttons, dynamic menus, and poll results.
- **Latest Compatibility**: Fully compatible with the latest WhatsApp Multi-Device (MD) features.
- **Clean Architecture**: English-based codebase with zero internal guide comments for a professional look.

---

## Installation

Install the library directly from the GitHub repository to get the latest stable build:

```bash
npm install github:AunuHost/baileysv
```
### Or add it to your package.json:
```bash
"dependencies": {
  "@aunuhost/baileys": "github:AunuHost/baileysv"
}
```

---

# Getting Started

### 1. Connecting With Qr Code
```bash
const { default: makeWASocket } = require('@aunuhost/baileys');

const client = makeWASocket({
  browser: ['AunuHost', 'Chrome', '1.0.0'],
  printQRInTerminal: true
});
```

### 2. Connecting with Phone Number (Pairing Code)
```bash
const { 
  default: makeWASocket, 
  fetchLatestWAWebVersion 
} = require('@aunuhost/baileys');

async function connect() {
  const { version } = await fetchLatestWAWebVersion();
  const client = makeWASocket({
    browser: ['AunuHost', 'Chrome', '1.0.0'],
    printQRInTerminal: false,
    version
  });

  const phoneNumber = "628XXXXX";
  const code = await client.requestPairingCode(phoneNumber.trim());
  
  console.log("Your pairing code: " + code);
}
```

# Advanced Messaging Examples

### Sending Order Message
```bash
const fs = require('fs');
const imageBuffer = fs.readFileSync('./image.jpg');

await client.sendMessage(jid, {
  thumbnail: imageBuffer,
  message: "Order Information",
  orderTitle: "Premium Service",
  totalAmount1000: 50000,
  totalCurrencyCode: "IDR"
}, { quoted: m });
```

## Sending Poll Result
```bash
await client.sendMessage(jid, {
  pollResultMessage: {
    name: "System Feedback",
    options: [
      { optionName: "Stable" },
      { optionName: "Fast" }
    ],
    newsletter: {
      newsletterName: "AunuHost News",
      newsletterJid: "12036312345678@newsletter"
    }
  }
});
```

## Sending Product Message (CTA)
```bash
await client.relayMessage(jid, {
  productMessage: {
    title: "AunuHost API",
    description: "Cloud-based automation solution",
    thumbnail: { url: "[https://example.com/thumb.jpg](https://example.com/thumb.jpg)" },
    productId: "AUNU_STABLE_01",
    retailerId: "AUNU_DEV",
    url: "[https://github.com/AunuHost/baileysv](https://github.com/AunuHost/baileysv)",
    body: "Build your bot today",
    footer: "Secure & Fast",
    buttons: [
      {
        name: "cta_url",
        buttonParamsJson: "{\"display_text\":\"Visit Repo\",\"url\":\"[https://github.com/AunuHost/baileysv](https://github.com/AunuHost/baileysv)\"}"
      }
    ],
    priceAmount1000: 100000,
    currencyCode: "IDR"
  }
}, {});
```


  # Credits and Support
*This library is a refined fork aimed at providing a better developer experience.*
- **AunuHost:** Project maintainer and optimization lead.
- **WhiskeySockets:** Original source of the Baileys library.
- **Kayzennotdev:** For inspiration on pairing fixes and fork structure.
