let element = document.querySelector('.mistake_index');

class ScrolSlider {
  constructor(element) {
    this.element = element;
    this.slides = document.querySelectorAll('.mistake');
    this.wraper = document.querySelector('.mistatakes-wraper');
    this.currentScroll = 0;

    this.registerEvents();
  }

  registerEvents() {
    for (let i = 0; i < this.slides.length; i++) {
      let indicator = document.createElement('div');
      indicator.classList.add('mistake_indicator');
      indicator.dataset.indicator = i;
      this.element.append(indicator);
    }
    let start = 0;
    let finish = 0;

    this.wraper.addEventListener('touchstart', (e) => {
      start = e.changedTouches[0].clientX;
    });

    this.wraper.addEventListener('touchend', (e) => {
      finish = e.changedTouches[0].clientX;
      if (start > finish) {
        this.wraper.scrollLeft =
          Math.floor(this.wraper.scrollLeft / this.wraper.clientWidth) *
            this.wraper.clientWidth +
          this.wraper.clientWidth;
      } else if (start < finish) {
        this.wraper.scrollLeft =
          Math.floor(this.wraper.scrollLeft / this.wraper.clientWidth) *
            this.wraper.clientWidth -
          this.wraper.clientWidth;
      } else {
        if (finish > this.wraper.clientWidth / 2) {
          this.wraper.scrollLeft =
            Math.floor(this.wraper.scrollLeft / this.wraper.clientWidth) *
              this.wraper.clientWidth +
            this.wraper.clientWidth;
        } else if (finish < this.wraper.clientWidth / 2) {
          this.wraper.scrollLeft =
            Math.floor(this.wraper.scrollLeft / this.wraper.clientWidth) *
              this.wraper.clientWidth -
            this.wraper.clientWidth;
        }
      }
    });
  }

  sizeScroll() {
    return this.wraper.scrollWidth;
  }
}

new ScrolSlider(element);
