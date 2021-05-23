/*
    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios
        - contar o número de categorias e o número de livros em cada categoria
        - contar o número de autores
        - mostrar livros do autor Augusto Cury
        - transformar a função acima em uma função que irá receber o nome do autor
            e devolver os livros desse autor.
*/    



const  booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos de pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];