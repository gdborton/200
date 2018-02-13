## 100

Small repo that shows `import ReactDOM from 'react-dom';` creates webpack bundles ~100KB.

## Setup

```bash
git clone git@github.com:gdborton/100.git
cd 100
npm install
npm run webpack
# This last line should show ~100KB
ls -latrh ./dist
```
