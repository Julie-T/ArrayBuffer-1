export default class Magician {
  constructor() {
    this.dataView = new DataView(new ArrayBuffer(1));
  }


  attack(cell) {
    this.dataView.setUint8(0, 100, true);
    const hit = this.dataView.getUint8(0) - (cell - 1) * 0.1 * this.dataView.getUint8(0);
    this.dataView.setUint8(0, hit, true);
    return this.dataView.getUint8(0);
  }

  stoned(cell) {
    this.dataView.setUint8(0, 100, true);
    const hit = this.dataView.getUint8(0)
     - (cell - 1) * 0.1 * this.dataView.getUint8(0) - Math.log2(cell) * 5;
    this.dataView.setUint8(0, hit, true);
    return this.dataView.getUint8(0);
  }
}

export class Daemon extends Magician {}
