import { Injectable } from '@angular/core';

interface Artisan {
  id: number;
  imageUrl: string; //imageUrl est actuellement une image par défault, elle sera ensuite remplacée par un lien vers une image du site
  name: string;     // de l'artisan s'il en a un ou par une image fournie par celui-ci.
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private artisans: Artisan[] = [
    { id: 1,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Vallis Bellemare',
      specialty: 'Plombier',
      note : 4,
      location: 'Vienne',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'v.bellemare@gmail.com',
      website: 'https://plomberie-bellemare.com',
      category: 'Bâtiment',
      top: false,
    },
    { id: 2,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Amitee Lécuyer',
      specialty: 'Couturier',
      note : 4.5,
      location: 'Annecy',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'a.amitee@hotmail.com',
      website: 'https://lecuyer-couture.com',
      category: 'Fabrication',
      top: false,
    },
    { id: 3,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Leala Dennis',
      specialty: 'Coiffeur',
      note : 3.8,
      location: 'Chambéry',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'l.dennos@hotmail.fr',
      website: 'https://coiffure-leala-chambery.fr',
      category: 'Services',
      top: false,
    },
    { id: 4,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Chocolaterie Labbé',
      specialty: 'Chocolatier',
      note : 4.9,
      location: 'Grenoble',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'chocolaterie-labbe@gmail.com',
      website: 'https://chocolaterie-labbe.fr',
      category: 'Alimentation',
      top: true,
    },
    { id: 5,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Claude Quinn',
      specialty: 'Bijoutier',
      note : 4.2,
      location: 'Aix-les-bains',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'claude.quinn@gmail.com',
      website: '',
      category: 'Fabrication',
      top: false,
    },
    { id: 6,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Valérie Laderoute',
      specialty: 'Toiletteur',
      note : 4.5,
      location: 'Valence',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'v-laredoute@gmail.com',
      website: '',
      category: 'Services',
      top: false,
    },
    { id: 7,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Boutot & fils',
      specialty: 'Menuisier',
      note : 4.7,
      location: 'Bourg-en-bresse',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'boutot-menuiserie@gmail.com',
      website: 'https://boutot-menuiserie.com',
      category: 'Bâtiment',
      top: false,
    },
    { id: 8,
      imageUrl: '/img/icons8-image-100.png',
      name: 'CM Graphisme',
      specialty: 'Webdesign',
      note : 4.4,
      location: 'Valence',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'contact@cm-graphisme.com',
      website: 'https://cm-graphisme.com',
      category: 'Services',
      top: false,
    },
    { id: 9,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Orville Salmons',
      specialty: 'Chauffagiste',
      note : 5,
      location: 'Evian',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'o-salmons@live.com',
      website: '',
      category: 'Bâtiment',
      top: true,
    },
    { id: 10,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Au pain chaud',
      specialty: 'Boulanger',
      note : 4.8,
      location: 'Montélimar',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'aupainchaud@hotmail.com',
      website: '',
      category: 'Alimentation',
      top: true,
    },
    { id: 11,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Boucherie Dumont',
      specialty: 'Boucher',
      note : 4.5,
      location: 'Lyon',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'boucherie.dumond@gmail.com',
      website: '',
      category: 'Alimentation',
      top: false,
    },
    { id: 12,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Mont Blanc Eléctricité',
      specialty: 'Electricien',
      note : 4.5,
      location: 'Chamonix',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'contact@mont-blanc-electricite.com',
      website: 'https://mont-blanc-electricite.com',
      category: 'Bâtiment',
      top: false,
    },
    { id: 13,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Traiteur Truchon',
      specialty: 'Traiteur',
      note : 4.1,
      location: 'Privas',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'contact@truchon-traiteur.fr',
      website: 'https://truchon-traiteur.fr',
      category: 'Bâtiment',
      top: false,
    },
    { id: 14,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Le monde des fleurs',
      specialty: 'Fleuriste',
      note : 4.6,
      location: 'Annonay',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'contact@le-monde-des-fleurs-annonay.fr',
      website: 'https://le-monde-des-fleurs-annonay.fr',
      category: 'Services',
      top: false,
    },
    { id: 15,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Royden Charbonneau',
      specialty: 'Carrossier',
      note : 3.8,
      location: 'Saint-Priest',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'r.charbonneau@gmail.com',
      website: '',
      category: 'Services',
      top: false,
    },
    { id: 16,
      imageUrl: '/img/icons8-image-100.png',
      name: 'Ernest Carignan',
      specialty: 'Ferronier',
      note : 5,
      location: 'Le Puy-en-Velay',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'e-carigan@hotmail.com',
      website: '',
      category: 'Fabrication',
      top: false,
    },
    { id: 17,
      imageUrl: '/img/icons8-image-100.png',
      name: 'C\'est sup\'hair',
      specialty: 'Coiffeur',
      note : 4.1,
      location: 'Romans-sur-Isère',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
      email: 'sup-hair@gmail.com',
      website: 'https://sup-hair.fr',
      category: 'Services',
      top: false,
    },

  ];

  constructor() { }

  //retourne les artisans disponibles
  getArtisans(): Artisan[] {
    return this.artisans;
  }

  //retourne un artisan par son nom, ou null s'il n'existe pas
  getArtisanByName(name: string): Artisan | null {
    return this.artisans.find(artisan => artisan.name === name) || null;
  }

/**rechercher des artisans en fonction d'une requête
  * @param query - la chaîne de recherche
  * @returns un tableau d'artisans correspondant à la recherche
*/

  searchArtisans(query: string): Artisan[] {
    if (!query.trim()) return this.artisans;

    const lowerCaseQuery = query.toLowerCase();
    return this.artisans.filter((artisan) =>
    [artisan.name, artisan.specialty, artisan.location]
    .some((field) => field.toLowerCase().includes(lowerCaseQuery))
    );
  }
}
