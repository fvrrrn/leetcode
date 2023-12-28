FROM alpine:latest

RUN apk add binutils-gold curl gcc g++ gmp-dev libc-dev libffi-dev make musl-dev ncurses-dev perl tar xz

RUN curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | BOOTSTRAP_HASKELL_MINIMAL=1 BOOTSTRAP_HASKELL_NONINTERACTIVE=1 sh

# Add ghcup to PATH
ENV PATH=${PATH}:/root/.local/bin
ENV PATH=${PATH}:/root/.ghcup/bin

RUN source ~/.ghcup/env

RUN ghcup config set platform-override '{ "arch": "A_64", "platform": { "contents": "Alpine", "tag": "Linux" }, "version": "3.17" }'

# Install package manager
RUN ghcup install cabal --set latest
# Install compiler
RUN ghcup install ghc --set latest
# Install Haskell language server
RUN ghcup install hls --set latest

RUN cabal update
RUN cabal install ormolu
RUN cabal install hlint
RUN cabal install ghci-dap haskell-debug-adapter