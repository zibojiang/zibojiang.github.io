(function () {
  "use strict";

  const navigation = document.querySelector(".journal-navigation");
  if (!navigation) return;

  const compactLayout = window.matchMedia("(max-width: 900px)");
  const updateNavigation = function () {
    navigation.open = !compactLayout.matches;
  };

  updateNavigation();
  if (compactLayout.addEventListener) {
    compactLayout.addEventListener("change", updateNavigation);
  } else if (compactLayout.addListener) {
    compactLayout.addListener(updateNavigation);
  }
})();
