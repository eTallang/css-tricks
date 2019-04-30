import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ right: '-30%', opacity: 0 })], { optional: true }),
    group([
      query(':leave', [animate('400ms ease', style({ right: '30%', opacity: 0 }))], {
        optional: true
      }),
      query(':enter', [animate('400ms ease', style({ right: '0%', opacity: 1 }))], {
        optional: true
      })
    ])
  ])
]);
