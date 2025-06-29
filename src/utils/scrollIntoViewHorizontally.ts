export const scrollIntoViewHorizontally = (
  container: HTMLElement,
  child: HTMLElement,
) => {
  if (!container.contains(child)) {
    return;
  }
  const child_offsetRight = child.offsetLeft + child.offsetWidth;
  const container_scrollRight = container.scrollLeft + container.offsetWidth;

  if (container.scrollLeft > child.offsetLeft) {
    // the child element crossed the left edge of the container element, returning it back into view
    container.scrollLeft = child.offsetLeft;
    return;
  }

  if (container_scrollRight < child_offsetRight) {
    // the child element crossed the right edge of the container element, returning it back into view
    container.scrollLeft += child_offsetRight - container_scrollRight;
  }
};
