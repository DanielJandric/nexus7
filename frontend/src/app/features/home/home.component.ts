import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h2>Welcome to Nexus7</h2>
      <p>Your Digital Workspace</p>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 2rem;
      text-align: center;
    }
    h2 {
      color: #333;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
    }
  `]
})
export class HomeComponent {} 