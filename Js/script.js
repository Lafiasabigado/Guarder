const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    // Target the specific navigation element (assuming 'nav' is the parent)
    const navigation = navItem.closest('nav'); // Or another appropriate selector

    if (navigation) {
      navigation.classList.toggle('active');
    } else {
      console.warn("Couldn't find a parent 'nav' element for clicked item.");
    }
  });
});
