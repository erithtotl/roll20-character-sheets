/* global on:false, getSetItems:false */

export class Overlay {
  close() {
    getSetItems('Overlay.close', {
      collectionArray: ['processing'],
      callback: (v, finalSetAttrs) => {
        finalSetAttrs.processing = '';
      },
    });
  }
  setup() {
    on('change:close_overlay', () => {
      this.close();
    });
  }
}
