# 🚀 DevHolvanus – Portfolio & Web3 NFT Skill Badge DApp

Portfolio personnel de développeur intégrant une **DApp Web3 complète** permettant de créer, uploader et minter des **NFT Skill Badges personnalisés** sur Ethereum Sepolia.

---

## ✨ Fonctionnalités

### 🌐 Portfolio
- Présentation personnelle
- Projets
- Design futuriste / néon
- Next.js App Router
- Déployé sur Vercel

### 🧩 DApp NFT Skill Badge
- Connexion wallet (MetaMask, WalletConnect, etc.)
- Création visuelle du badge (éditeur canvas)
- Styles au choix
- Génération automatique du PNG + metadata
- Upload IPFS via Pinata
- Mint NFT sur Ethereum Sepolia
- Lien Etherscan
- Accès facile à un faucet testnet

---

## 🛠️ Stack Technique

### Frontend
- **Next.js 14+ (App Router)**
- **React 19**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**

### Web3
- **Wagmi v2**
- **RainbowKit**
- **Viem**
- **Ethers.js**
- **Ethereum Sepolia**

### Infra
- **IPFS / Pinata**
- **Vercel**
- **Google Cloud Web3 Faucet**

---

## 📁 Structure du projet

```txt
app/
├─ page.tsx
├─ web3/
│  ├─ page.tsx
│  ├─ Web3Client.tsx
│  ├─ components/
│  ├─ lib/
│  └─ api/
