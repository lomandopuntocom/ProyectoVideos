import { Component } from '@angular/core';

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls:['./videos.component.css']
})
export class VideosComponent {
  videos = [
    {
      thumbnail: 'path/to/image1.jpg',
      title: 'Diseño en Películas',
      channel: 'Movieclips Trailers',
      date: '3 years ago'
    },
    {
      thumbnail: 'path/to/image2.jpg',
      title: 'Beneficios de dormir bien',
      channel: 'Movieclips Trailers',
      date: '3 years ago'
    },
    {
      thumbnail: 'path/to/image3.jpg',
      title: 'Ingeniería social',
      channel: 'Movieclips Trailers',
      date: '3 years ago'
    },
    {
      thumbnail: 'path/to/image4.jpg',
      title: 'Combatir el racismo',
      channel: 'Movieclips Trailers',
      date: '3 years ago'
    },
    {
      thumbnail: 'path/to/image5.jpg',
      title: 'Innovación en tecnología',
      channel: 'Tech Talks',
      date: '2 years ago'
    },
    {
      thumbnail: 'path/to/image6.jpg',
      title: 'La importancia de la educación',
      channel: 'EducaTV',
      date: '1 year ago'
    },
    {
      thumbnail: 'path/to/image7.jpg',
      title: 'La vida en el espacio',
      channel: 'Space Exploration',
      date: '6 months ago'
    },
    {
      thumbnail: 'path/to/image8.jpg',
      title: 'El arte de la fotografía',
      channel: 'Creative Minds',
      date: '5 months ago'
    },
    {
      thumbnail: 'path/to/image9.jpg',
      title: 'Psicología y emociones',
      channel: 'Mind and Health',
      date: '4 months ago'
    },
    {
      thumbnail: 'path/to/image10.jpg',
      title: 'Cultura japonesa',
      channel: 'Japan Explorer',
      date: '3 months ago'
    },
    {
      thumbnail: 'path/to/image11.jpg',
      title: 'Cómo emprender un negocio',
      channel: 'Business Academy',
      date: '2 months ago'
    },
    {
      thumbnail: 'path/to/image12.jpg',
      title: 'El futuro del trabajo',
      channel: 'Future Trends',
      date: '1 month ago'
    },
    {
      thumbnail: 'path/to/image13.jpg',
      title: 'Meditación para principiantes',
      channel: 'Mindful Living',
      date: '3 weeks ago'
    },
    {
      thumbnail: 'path/to/image14.jpg',
      title: 'El poder de la resiliencia',
      channel: 'Self Growth',
      date: '2 weeks ago'
    },
    {
      thumbnail: 'path/to/image15.jpg',
      title: 'La inteligencia artificial',
      channel: 'Tech World',
      date: '1 week ago'
    },
    {
      thumbnail: 'path/to/image16.jpg',
      title: 'Creciendo como líder',
      channel: 'Leadership Hub',
      date: '4 days ago'
    },
    {
      thumbnail: 'path/to/image17.jpg',
      title: 'La evolución del cine',
      channel: 'Film Society',
      date: '3 days ago'
    },
    {
      thumbnail: 'path/to/image18.jpg',
      title: 'Historia del arte moderno',
      channel: 'Art History Channel',
      date: '2 days ago'
    },
    {
      thumbnail: 'path/to/image19.jpg',
      title: 'El cambio climático',
      channel: 'Eco World',
      date: '1 day ago'
    },
    {
      thumbnail: 'path/to/image20.jpg',
      title: 'Exploración de Marte',
      channel: 'NASA',
      date: 'Just now'
    }
];

}
