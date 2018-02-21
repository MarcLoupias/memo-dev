# JavaScript Math

## float and money

JavaScript Numbers are IEEE 754 64-bit floating point. The result is that we can't safely add money because the decimal will get skewered by floating point rounding errors.

```javascript
.2 + .1 === .3; // false
```

### the money problem

[Floating Point Numbers & Currency Rounding Errors - Patrick Bacon - 20140814](https://spin.atomicobject.com/2014/08/14/currency-rounding-errors/)

>
> **Don’t use floating point numbers for money**
>
> Ways it Can Go Wrong :
> - During Calculations
> - During Storage
> - During Retrieval
> - Before Display
> 

[stackoverflow comment explaining the problem](https://stackoverflow.com/questions/3730019/why-not-use-double-or-float-to-represent-currency/3730040#3730040)

### quicks solutions

#### toFixed()

[using `Number.prototype.toFixed()` - stackoverflow.com](https://stackoverflow.com/a/12511102) /  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

Warning `toFixed` returns a string. This to prepare display in UI not to do maths.

#### do calculation on cents

[What is the best way to handle floating point problems with financial calculations in JavaScript? - quora.com - 2015](https://www.quora.com/What-is-the-best-way-to-handle-floating-point-problems-with-financial-calculations-in-JavaScript)

> just represent all monetary values using an integer number of the smallest relevant units of the currency

### libs

[ericelliott/moneysafe : github.com](https://github.com/ericelliott/moneysafe)
