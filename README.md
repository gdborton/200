## 200

Small repo that shows `import ReactDOM from 'react-dom';` creates webpack bundles > 200KB.

## Setup

```bash
git clone git@github.com:gdborton/200.git
cd 200
npm install
npm run webpack
# This last line should show ~270KB
ls -latrh ./dist
```
