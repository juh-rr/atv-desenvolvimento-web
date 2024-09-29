const form = document.querySelector('#meuFormulario');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const json = {};

    for (const [key, value] of formData.entries()) {
        json[key] = value;
    }

    console.log(json);
    // Aqui você pode enviar o objeto JSON para um servidor ou salva-lo em um bd

    form.reset();
});