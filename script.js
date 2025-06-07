const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
  navDialog.classList.toggle('hidden');
}

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener('scroll', scrollHandler);
    } else {
      document.removeEventListener('scroll', scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    element.style.transform = `translateX(${isLTR ? '' : '-'}${translateX}px)`;  
// isLTR is a boolean value (likely meaning "is Left-To-Right").
// isLTR ? '' : '-' is a ternary (conditional) operator:
// If isLTR is true, return an empty string ''.
// If isLTR is false, return '-'.
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
