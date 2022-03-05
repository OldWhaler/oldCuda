let portfolioNavItems = document.querySelectorAll('.portfolio__nav-item')
let portfolioElementsItems = document.querySelectorAll('.portfolio__elements-item')

for (let portfolioItem of portfolioNavItems) {
  portfolioItem.addEventListener('click', function () {
    portfolioNavItems.forEach(item => item.classList.remove('portfolio__nav-active'))
    portfolioItem.classList.add('portfolio__nav-active')

    let dataItemName = portfolioItem.getAttribute('data-item-name')

    portfolioElementsItems.forEach(item => item.classList.add('hidden'))

    for (portfolioElementsItem of portfolioElementsItems) {
      if (portfolioElementsItem.classList.contains(dataItemName)) {
        portfolioElementsItem.classList.remove('hidden')
      } else {
        portfolioElementsItem.classList.add('hidden')
      }
    }
  })
}

//Проверка input.value и исчезновение "placeholder"
let formItems = document.getElementsByClassName('form-item')
let contactFormPlaceholders = document.getElementsByClassName('contact-form__placeholder')

for (let i = 0; i < formItems.length; i++) {
  formItems[i].addEventListener('focus', function () {
    contactFormPlaceholders[i].style.display = 'none'
  })
  formItems[i].addEventListener('blur', function () {
    if (formItems[i].value.length == 0) {
      contactFormPlaceholders[i].style.display = 'block'
    }
  })
}


