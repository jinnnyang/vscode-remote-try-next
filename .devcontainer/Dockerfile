FROM mcr.microsoft.com/devcontainers/javascript-node:1-18-bullseye

# >>> SPEEDUP APT zh-CN
RUN test -f /etc/apt/sources.list && \
    TARGET="/etc/apt/sources.list" || \
    TARGET="/etc/apt/sources.list.d/debian.sources" ; \
    sed -i "s@\(security.debian.org\)\|\(deb.debian.org\)@mirrors.tuna.tsinghua.edu.cn@g" $TARGET;
# <<< SPEEDUP APT zh-CN

# Download and install nvm
RUN curl -sSo- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
ENV NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node NVM_IOJS_ORG_MIRROR=https://npm.taobao.org/mirrors/iojs

# >>> SPEEDUP NPM
# Setup npm mirrors
RUN npm config set registry=https://registry.npmmirror.com
# <<< SPEEDUP NPM

# Install pnpm
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

# Install Next.JS
RUN npm install -g create-next-app