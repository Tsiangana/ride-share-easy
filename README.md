# Vamus - Plataforma Moderna

A Vamus é uma landing page de alta fidelidade para uma aplicação moderna de transporte partilhado. Construída com foco na rapidez e profissionalismo, proporciona uma experiência de utilizador perfeita tanto para passageiros como para motoristas.

## 🚀 Funcionalidades

- **UI/UX Moderna**: Design premium com efeitos de glassmorphism e layouts responsivos.
- **Código QR Dinâmico**: Código QR digitalizável na página inicial que liga diretamente ao site de produção.
- **Descarregamento Direto**: Acesso fácil à aplicação móvel Vamus (APK) diretamente a partir do cabeçalho.
- **Navegação Unificada**: Componente de cabeçalho partilhado entre múltiplas rotas (Início, Motorista, Carreira) para uma experiência consistente.
- **Desempenho Otimizado**: Construído usando **Vite** e **TanStack Router** para transições de página extremamente rápidas.

## 🛠️ Tecnologias Utilizadas

- **Framework**: [React](https://reactjs.org/)
- **Ferramenta de Build**: [Vite](https://vitejs.dev/)
- **Roteamento**: [TanStack Router](https://tanstack.com/router)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Implementação**: [GitHub Actions](https://github.com/features/actions) para o GitHub Pages

## 📦 Como Começar

### Pré-requisitos

- Node.js (v22 ou superior)
- npm

### Instalação

1. Clonar o repositório:
   ```bash
   git clone https://github.com/pzau/ride-share-easy.git
   ```

2. Instalar as dependências:
   ```bash
   npm install
   ```

3. Executar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### Construir para Produção

Para criar uma build de produção otimizada:
```bash
npm run build
```
O resultado estará localizado no diretório `dist/`.

## 🚢 Implementação / Deploy

Este projeto está configurado para implementação automática no **GitHub Pages**. Qualquer envio (push) para o branch `main` irá acionar o fluxo de trabalho de deploy definido em `.github/workflows/deploy.yml`.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

Construído com ❤️ por [Tsiangana](https://github.com/pzau)
