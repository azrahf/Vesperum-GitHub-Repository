

/* =========================================
   VESPERUM — ARCHIVO DE LA ETERNIDAD
   JAVASCRIPT PRINCIPAL
========================================= */


/* =========================================
   MENÚ DE NAVEGACIÓN
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("#nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });

    });

}


/* =========================================
   INFORMACIÓN DE LOS PERSONAJES
========================================= */

const characters = {

    seonghwa: {

        name: "Park Seonghwa",
        title: "Soberano de Vesperum",
        caste: "Vampiro de sangre pura.",
        age: "324",
        player: "Owner",

        image: "assets/personajes/hwa.jpeg",

        story: "Heredero legítimo, Seonghwa gobierna a los vampiros bajo una monarquía que equilibra el poder de la corona y la aristocracia. Junto a su esposo y su único hijo, el príncipe heredero, preserva el legado de su dinastía. Sin embargo, oculta conocimientos sobre los impuros que podrían cambiar el destino de todo el reino.",

        personality: "Reservador y calculador, orgulloso de su linaje y protector con su familia. Leal, aunque le cuesta exprsar algunas emociones",

        relations: "Guardián de los Siete Linajes y esposo de Wooyoung. Hijo único: Jake."

    },


    wooyoung: {

        name: "Jung Wooyoung.",
        title: "Rey consorte y esposo de Seonghwa.",
        caste: "Vampiro de sangre pura..",
        age: "323",
        player: "Administrador",

        image: "assets/personajes/woo.jpeg",

        story: "Jung Wooyoung, un vampiro de 323 años, es un aristócrata de elegancia afilada y autoridad inquebrantable que exige respeto como el hombre que es. Tras los portones de su mansión oculta un secreto letal: su sangre, con aroma a rosas, es un dulce veneno capaz de embriagar a otros vampiros y matarlos si consumen demasiado. Condenado al aislamiento para proteger su linaje, vive como un príncipe intocable, guardando celosamente el peligro que corre por sus venas.",

        personality: "Soberbio, protector, seductor, formal e impotente.",

        relations: "Esposo del rey y padre de Jake, hijo único de ambos."

    },


    jake: {

        name: "Sim Jake.",
        title: "Príncipe heredero de Vesperum.",
        caste: "Vampiro puro.",
        age: "200",
        player: "Administrador",

        image: "assets/personajes/jake.jpeg",

        story: "Sim Jaeyun es un vampiro de linaje real, hijo de dos soberanos y heredero de una de las dinastías más antiguas de la aristocracia vampírica. Criado en un majestuoso palacio, fue educado en las tradiciones de la corona, la diplomacia y el arte de gobernar. Su elegancia y presencia imponente reflejan su sangre noble, mientras carga con la responsabilidad de preservar el legado de su familia. Destinado al trono, aguarda el día en que deje de ser príncipe para convertirse en rey.",

        personality: "Aquí describiremos su personalidad.",

        relations: "Hijo único de Seonghwa y Wooyoung. Heredero del reino."

    }

};


/* =========================================
   ELEMENTOS DE LA VENTANA
========================================= */

const modal = document.getElementById("character-modal");

const modalClose = document.getElementById("modal-close");

const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");

const modalCaste = document.getElementById("modal-caste");
const modalAge = document.getElementById("modal-age");
const modalPlayer = document.getElementById("modal-player");

const modalStory = document.getElementById("modal-story");
const modalPersonality = document.getElementById("modal-personality");
const modalRelations = document.getElementById("modal-relations");

let previousFocus = null;


/* =========================================
   ABRIR EXPEDIENTE
========================================= */

if (modal && modalClose) {

    document.querySelectorAll("[data-character]").forEach(card => {

        card.addEventListener("click", () => {

            const character = characters[card.dataset.character];

            if (!character) return;

            previousFocus = card;

            // IMAGEN

            modalImage.src = character.image;
            modalImage.alt = "Retrato de " + character.name;

            // INFORMACIÓN PRINCIPAL

            modalName.textContent = character.name;
            modalTitle.textContent = character.title;

            modalCategory.textContent = "EXPEDIENTE CONFIDENCIAL";

            // INFORMACIÓN SECUNDARIA

            modalCaste.textContent = character.caste;
            modalAge.textContent = character.age;
            modalPlayer.textContent = character.player;

            // HISTORIA Y RELACIONES

            modalStory.textContent = character.story;
            modalPersonality.textContent = character.personality;
            modalRelations.textContent = character.relations;

            // MOSTRAR VENTANA

            modal.hidden = false;

            modal.setAttribute("aria-hidden", "false");

            document.body.classList.add("modal-open");

            modalClose.focus();

        });

    });


    /* =========================================
       CERRAR EXPEDIENTE
    ========================================= */

    function closeModal() {

        if (modal.hidden) return;

        modal.hidden = true;

        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

        if (previousFocus) {
            previousFocus.focus();
        }

    }


    // CERRAR CON EL BOTÓN X

    modalClose.addEventListener("click", closeModal);


    // CERRAR AL PULSAR FUERA DEL EXPEDIENTE

    modal.querySelectorAll("[data-close-modal]").forEach(element => {

        element.addEventListener("click", closeModal);

    });


    // CERRAR CON LA TECLA ESCAPE

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });

}