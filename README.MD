# Rename PDF file

a little script to create an copy of pdf file and rename with custom name

## Install node

install node from https://nodejs.org/en/download/prebuilt-binaries

then execute in terminal to validate that node installed correctly
```bash
  node -v
```


## Prepare project

Paste original pdf files in original path

### Execute project

- inside project folder execute in terminal to install dependencies

```bash
  npm install
```

- and then run script

```bash
  node index.js
```

- when an file ranamed successfully, will see in terminal a message like

```bash
  File copied successfully from original/file.pdf to new/NEW NAME.pdf
```

- when an email had an error, will see in terminal some like:

```bash
  An error occurred sourcePath in file original/file.pdf
```