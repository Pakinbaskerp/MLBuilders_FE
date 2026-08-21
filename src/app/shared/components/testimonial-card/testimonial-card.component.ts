import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {

  testimonials = [
    {
      quote: 'ML Builders built our dream home with excellent quality and timely delivery.',
      name: 'Janarthanam',
      role: 'Home Owner',
      location: 'Chennai'
    },
    {
      quote: 'Professional team with transparent pricing. Highly recommended.',
      name: 'Arun Kumar',
      role: 'Business Owner',
      location: 'Coimbatore'
    },
    {
      quote: 'Our renovation was completed beyond expectations.',
      name: 'Priya Sharma',
      role: 'Interior Client',
      location: 'Bangalore'
    },
    {
      quote: 'Very satisfied with the construction quality.',
      name: 'Vignesh',
      role: 'Villa Owner',
      location: 'Chennai'
    },
    {
      quote: 'Excellent planning and project management.',
      name: 'Ramesh',
      role: 'Property Owner',
      location: 'Salem'
    },
    {
      quote: 'Best construction company I have worked with.',
      name: 'Karthik',
      role: 'Customer',
      location: 'Madurai'
    }
  ];

}
