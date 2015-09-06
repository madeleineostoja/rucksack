---
title: "All The Easings"
anchor: "easings"
weight: 10
---
Rucksack comes with a whole library of modern easing functions for you to instantly use in CSS transitions and animations. The new easings are translated to `cubic-bezier()` functions on output that CSS can natively understand.

## Input
```css
.foo {
  transition: all 250ms ease-in-cubic;
}
```
## Output
```css
.foo {
  transition: all 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
```

<div>
  {{< easing ease-in-sine >}}
  {{< easing ease-out-sine >}}
  {{< easing ease-in-out-sine >}}
  {{< easing ease-in-quad >}}
  {{< easing ease-out-quad >}}
  {{< easing ease-in-out-quad >}}
  {{< easing ease-in-cubic >}}
  {{< easing ease-out-cubic >}}
  {{< easing ease-in-out-cubic >}}
  {{< easing ease-in-quart >}}
  {{< easing ease-out-quart >}}
  {{< easing ease-in-out-quart >}}
  {{< easing ease-in-quint >}}
  {{< easing ease-out-quint >}}
  {{< easing ease-in-out-quint >}}
  {{< easing ease-in-expo >}}
  {{< easing ease-out-expo >}}
  {{< easing ease-in-out-expo >}}
  {{< easing ease-in-circ >}}
  {{< easing ease-out-circ >}}
  {{< easing ease-in-out-circ >}}
  {{< easing ease-in-back >}}
  {{< easing ease-out-back >}}
  {{< easing ease-in-out-back >}}
</div>
