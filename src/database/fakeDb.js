import { id } from "date-fns/locale"

export const posts = [ //primeiro o array
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/lic3as.png",
        name: "Alice Aquino",
        role: "Estudante de Ciência da Computação"
      },
  
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉 jane.design/doctorcare'},
      ],
      publishedAt: new Date("2025-01-15 11:00:00")
    },
  
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/leu331.png",
        name: "Leuzimar Bezerra",
        role: "Estudante da Rocketseat"
      },
  
      content: [
        {type: 'paragraph', content: 'Opa, 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉 jane.design/doctorcare'},
      ],
      publishedAt: new Date("2025-01-15 11:00:00")
    },
  
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO @Rocketseat"
      },
  
      content: [
        {type: 'paragraph', content: 'Opa, 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉 jane.design/doctorcare'},
      ],
      publishedAt: new Date("2025-01-15 11:00:00")
    },
  
    {
      id: 4,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Brito",
        role: "Educator @Rocketseat"
      },
  
      content: [
        {type: 'paragraph', content: 'Opa, 👋'},
        {type: 'paragraph', content: 'Fala, cambada de viado'},
        {type: 'link', content: '👉 chupemeuzovo'},
      ],
      publishedAt: new Date("2025-01-12 11:00:00")
    },
  ]

