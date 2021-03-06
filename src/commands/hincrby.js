export function hincrby(key, field, increment = 0) {
  if (!this.data.has(key)) {
    this.data.set(key, { [field]: '0' });
  }
  if (!{}.hasOwnProperty.call(this.data.get(key), field)) {
    this.data.get(key)[field] = '0';
  }
  const curVal = Number(this.data.get(key)[field]);
  const nextVal = curVal + parseInt(increment, 10);
  this.data.get(key)[field] = nextVal.toString();
  return nextVal;
}
