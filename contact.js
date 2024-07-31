document.addEventListener('DOMContentLoaded', () => {
    // Validação e feedback do formulário
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validar campos (exemplo básico)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            feedback.style.color = 'red';
            return;
        }

        // Simulação de envio de formulário
        setTimeout(() => {
            feedback.textContent = 'Sua mensagem foi enviada com sucesso!';
            feedback.style.color = 'green';
            form.reset();
        }, 1000);
    });

    // Expansão e colapso das respostas das perguntas frequentes
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
