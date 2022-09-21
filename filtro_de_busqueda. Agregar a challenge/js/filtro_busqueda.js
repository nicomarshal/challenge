const d = document;

export default function searchFilter(input, selector) {
	d.addEventListener("keyup", e => {
		if (e.target.matches(input)) {
			
			if (e.key === "Escape") e.target.value = "";

			/*Si el contenido del input es parcialmente igual
			al contenido del elemento figure (".card"), es decir
			si es true, entonces vamos a remover la clase filter (display: none),
			pero, si no coincide, entonces agregamos la clase filter, es decir,
			desaparecerá de la pantalla esa card en particular*/
			d.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase().includes(e.target.value)
				? el.classList.remove("filter")
				: el.classList.add("filter")
			);
		}
	})
}