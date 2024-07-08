import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
imageLogo ="./assets/logo-raisin-fruits-ferme-vecteur-conception-fruits-frais-violets-icone-produit-raisin-boutique-fruits_557439-10620.avif"


}
