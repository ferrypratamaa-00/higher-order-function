
---

## ✅ Built-in HOFs (bawaan JS)

### 🔁 Array Methods

- `map`
- `filter`
- `reduce`
- `forEach`
- `some`
- `every`
- `find`
- `findIndex`
- `findLast`
- `findLastIndex`
- `flatMap`
- `sort` (karena pakai compareFn)
- `toSorted`
- `toReversed`
- `toSpliced`
- `with` (immutable replace with callback)

### 🧩 Function Prototype

- `call`
- `apply`
- `bind`

### ⏳ Async/Timing

- `setTimeout`
- `setInterval`
- `queueMicrotask`
- `requestAnimationFrame`
- `requestIdleCallback`
- `cancelAnimationFrame` *(callback ref)*
- `cancelIdleCallback`

### 📦 Promise-related

- `then`
- `catch`
- `finally`

### 🧪 Others

- `Array.from` *(dengan mapping function)*
- `Array.prototype.reduceRight`
- `Object.fromEntries` *(jika mapping sebelumnya pakai fungsi)*
- `String.prototype.replace` *(dengan replacer function)*
- `String.prototype.replaceAll` *(jika pakai fungsi replacer)*
- `Intl.Collator().compare` *(jika digunakan sebagai fungsi pembanding, misal di `sort`)*

---

## 🛠️ Custom / Functional Programming HOFs (umumnya dari lodash, Ramda, atau bikin sendiri)

- `compose`
- `pipe`
- `curry`
- `partial`
- `partialRight`
- `memoize`
- `once`
- `debounce`
- `throttle`
- `after`
- `before`
- `negate`
- `identity`
- `constant`
- `flip`
- `unary`
- `binary`
- `ary`
- `spread`
- `wrap`

---

## 🧠 React-related HOFs (jika pakai React)

- `useEffect` *(terima fungsi)*
- `useMemo`
- `useCallback`
- `useReducer`
- `useRef` *(callback ref)*
- `React.memo` *(wrap komponen)*
- `React.forwardRef`
- `React.lazy`
- `HOC` (Higher-Order Component — pola)

---
