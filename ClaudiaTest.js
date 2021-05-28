const faker = require('faker');


context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadopago.com.co/developers/es/support').wait(3000)
  });
  tests();
});


var motivos = [
  "Quiero comenzar",
  "Estoy",
  "Quiero integrar"
];

var opcion = [
  "Js",
  "PHP",
  "Java",
  "NET",
  "NodeJS",
  "Ruby",
  "Python",
  "Android",
  "iOS"
];

var documentacion = [
  "Introducción",
  "Requisitos",
  "Integrar",
  "Pruebas",
  "Manejo",
  "Integración",
  "Otras",
  "Requisitos",
  "Ninguna"
];

var ayuda = [
  "Medios",
  "Envíos",
  "Envío",
  "Flujo",
  "Generación",
  "Instalación",
  "Navegación",
  "Otros"
];

function tests() {


  it('Desarrolladores', () => {

    cy.get('.login-button-container')
    .contains('Ingresar')
    .scrollIntoView()
    .click({ force: true })
    .wait(3000);

    cy.get('h3')
      .contains('Desarrolladores')
      .scrollIntoView()
      .click('center')
      .wait(3000);

    cy.get('#contactReason').get('div[class="andes-dropdown dropdown andes-dropdown--form andes-form-control andes-dropdown--default"]').get('button')
      .contains('Elige el motivo de tu consulta')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('li')
      .contains(randomListas(motivos))
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('#integrationL1').get('div[class="andes-dropdown dropdown andes-dropdown--form andes-form-control andes-dropdown--default"]').get('button')
      .contains('Selecciona la categoría')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('li')
      .contains("Cobros online")
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('#integrationL2').get('div[class="andes-dropdown dropdown andes-dropdown--form andes-form-control andes-dropdown--default"]').get('button')
      .contains('Elige una subcategoría')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('li')
      .contains("Checkout API")
      .scrollIntoView()
      .click({ force: true })
      .wait(4000);

    cy.get('#integrationL3').get('div[class="andes-dropdown dropdown andes-dropdown--form andes-form-control andes-dropdown--default"]').get('button')
      .contains('Elige una ')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('li')
      .contains(randomListas(opcion))
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('#documentation').get('div[class="andes-dropdown dropdown andes-dropdown--form andes-form-control andes-dropdown--default"]').get('button')
      .contains('¿Qué documentación')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('li')
      .contains(randomListas(documentacion))
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('input[name="isUsingSDK"]').get('input[value="no"]')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('#subjectL1').get('div[class="andes-dropdown dropdown andes-dropdown--form andes-form-control andes-dropdown--default"]').get('button')
      .contains('Resume tu consulta en una frase')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('li')
      .contains("Errores al integrar")
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('#subjectL2').get('div[class="andes-dropdown dropdown andes-dropdown--form andes-form-control andes-dropdown--default"]').get('button')
      .contains('Con qué necesitas ayuda')
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('li')
      .contains(randomListas(ayuda))
      .scrollIntoView()
      .click({ force: true })
      .wait(3000);

    cy.get('#detail').get('label[class="andes-form-control andes-form-control--textfield andes-form-control--multiline andes-form-control--textbox text-field-description"]')
      .get('textarea[class="andes-form-control__field"]')      
      .scrollIntoView()
      .type(faker.lorem.paragraph(50),{force: true} )      
      .wait(3000);
/*
    cy.get('button[class="andes-button button andes-button--large andes-button--loud"]')
      .click({ force: true })
      .wait(3000);

*/

  });
}


function randomListas(lista) {
  var seleccion = lista[Math.floor(Math.random() * lista.length)];
  console.log('*********', seleccion)
  return seleccion;
}


