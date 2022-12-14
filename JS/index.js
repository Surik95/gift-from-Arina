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
      let mistakeIndex = document.querySelector('.mistake_index_wraper');
      let indicator = document.createElement('div');
      indicator.classList.add('mistake_indicator');
      indicator.dataset.indicator = i;
      mistakeIndex.append(indicator);
    }
    [...document.querySelectorAll('.mistake_indicator')][0].classList.add(
      'mistake_indicator_active'
    );
    let start = 0;
    let finish = 0;

    this.wraper.addEventListener('touchstart', (e) => {
      start = e.changedTouches[0].clientX;
    });

    this.wraper.addEventListener('touchend', (e) => {
      finish = e.changedTouches[0].clientX;
      if (start > finish) {
        if (
          this.slides.length - 1 ===
          Math.round(this.wraper.scrollLeft / this.wraper.clientWidth)
        ) {
          this.wraper.scrollLeft = 0;
        } else {
          this.wraper.scrollLeft =
            Math.round(this.wraper.scrollLeft / this.wraper.clientWidth) *
              this.wraper.clientWidth +
            this.wraper.clientWidth;
        }
      } else if (start < finish) {
        if (this.wraper.scrollLeft === 0) {
          this.wraper.scrollLeft = this.wraper.scrollWidth;
        } else {
          this.wraper.scrollLeft =
            Math.round(this.wraper.scrollLeft / this.wraper.clientWidth) *
              this.wraper.clientWidth -
            this.wraper.clientWidth;
        }
      } else {
        if (finish > this.wraper.clientWidth / 2) {
          if (
            this.slides.length - 1 ===
            Math.round(this.wraper.scrollLeft / this.wraper.clientWidth)
          ) {
            this.wraper.scrollLeft = 0;
          } else {
            this.wraper.scrollLeft =
              Math.round(this.wraper.scrollLeft / this.wraper.clientWidth) *
                this.wraper.clientWidth +
              this.wraper.clientWidth;
          }
        } else if (finish < this.wraper.clientWidth / 2) {
          if (this.wraper.scrollLeft === 0) {
            this.wraper.scrollLeft = this.wraper.scrollWidth;
          } else {
            this.wraper.scrollLeft =
              Math.round(this.wraper.scrollLeft / this.wraper.clientWidth) *
                this.wraper.clientWidth -
              this.wraper.clientWidth;
          }
        }
      }
      document
        .querySelectorAll('.mistake_indicator')
        .forEach((elem) => elem.classList.remove('mistake_indicator_active'));
      let arr = [...document.querySelectorAll('.mistake_indicator')];
      arr[
        Math.round(this.wraper.scrollLeft / this.wraper.clientWidth)
      ].classList.add('mistake_indicator_active');
    });
  }

  sizeScroll() {
    return this.wraper.scrollWidth;
  }
}

new ScrolSlider(element);
