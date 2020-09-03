import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../core/clases/noticia.model';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [
    { titulo: 'Nuevos fichajes',
      fecha: new Date('2020/05/15'),
      subtitulo: 'El Jasson arranca la pretemporada con nuevos fichajes',
      imagen: '1.jpeg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada leo. Cras fermentum quam ac enim finibus, quis egestas augue tincidunt. In pharetra mauris porta magna sollicitudin pharetra. Sed sodales lorem malesuada, faucibus odio at, varius metus. Mauris arcu dolor, eleifend a tortor eget, volutpat aliquet odio. Phasellus non volutpat sapien. Nunc tincidunt efficitur nisi, id molestie turpis. Duis interdum felis nisl, vitae tincidunt risus sagittis quis. Proin vel fringilla turpis, sed ultrices arcu. Fusce blandit nunc vel nisi placerat suscipit. Curabitur eget molestie nibh. Praesent sit amet sollicitudin orci. In vitae ex metus. Sed feugiat diam sed ante auctor auctor. Nunc a velit at odio tincidunt dictum quis ut nulla. Mauris tristique justo vel rhoncus tincidunt. Duis sodales tempor luctus. Integer elit dolor, convallis in pharetra feugiat, efficitur nec risus. Fusce ultricies massa ipsum, eu accumsan nisl tempor sit amet.'
    },
    { titulo: 'Arranca la Liga',
      fecha: new Date('2020/06/18'),
      subtitulo: 'La liga arranca a mediados de julio y el Jasson ya se prepara para eso',
      imagen: '2.jpeg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada leo. Cras fermentum quam ac enim finibus, quis egestas augue tincidunt. In pharetra mauris porta magna sollicitudin pharetra. Sed sodales lorem malesuada, faucibus odio at, varius metus. Mauris arcu dolor, eleifend a tortor eget, volutpat aliquet odio. Phasellus non volutpat sapien. Nunc tincidunt efficitur nisi, id molestie turpis. Duis interdum felis nisl, vitae tincidunt risus sagittis quis. Proin vel fringilla turpis, sed ultrices arcu. Fusce blandit nunc vel nisi placerat suscipit. Curabitur eget molestie nibh. Praesent sit amet sollicitudin orci. In vitae ex metus. Sed feugiat diam sed ante auctor auctor. Nunc a velit at odio tincidunt dictum quis ut nulla. Mauris tristique justo vel rhoncus tincidunt.'
    },
    { titulo: 'Nueva cancha',
      fecha: new Date('2020/07/15'),
      subtitulo: 'La nueva cancha que el Jasson usara de local será: La Academia, ya que la del colegio no cumple con las medidas que pide la liga',
      imagen: '3.jpeg',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel malesuada leo. Cras fermentum quam ac enim finibus, quis egestas augue tincidunt. In pharetra mauris porta magna sollicitudin pharetra. Sed sodales lorem malesuada, faucibus odio at, varius metus. Mauris arcu dolor, eleifend a tortor eget, volutpat aliquet odio. Phasellus non volutpat sapien. Nunc tincidunt efficitur nisi, id molestie turpis. Duis interdum felis nisl, vitae tincidunt risus sagittis quis. Proin vel fringilla turpis, sed ultrices arcu. Fusce blandit nunc vel nisi placerat suscipit. Curabitur eget molestie nibh. Praesent sit amet sollicitudin orci. In vitae ex metus'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
