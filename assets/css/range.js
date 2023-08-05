let tooltip;
const slider = document.querySelector('[type="range"]');
rangeSlider.create(slider, {onSlide: (val) => {
  tooltip.textContent = val;
}});
const handleEl = slider.rangeSlider.handle;

tooltip = document.createElement('div')
tooltip.classList.add('tooltip')
handleEl.appendChild(tooltip)
tooltip.textContent = slider.rangeSlider.value