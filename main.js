// string == (textos)
// Number == (número)
// Boolean  == (true | false)
window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection (section) {
  // Descobrir a Linha alvo "meio da tela"
  const targetLine = scrollY + innerHeight / 2

  //Quais dados vou precisar?
  // Valor do topo da seção
  const sectionTop = section.offsetTop
  // Valor do tamanho(Altura) da seção
  const sectionHeight = section.offsetHeight
  // Final da seção (valor inicial + o tamanho da seção)
  const sectionEndsAt = sectionTop + sectionHeight
  
  // Verificar se o topo da seção passou da linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  // Verificar se o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // Limites da Seção ------------ ! == negação do boleano
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  // Pegar o valor do atributo da classe
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  // Remove e adiciona a classe remove
  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card,#about, #about header, #about .content')


