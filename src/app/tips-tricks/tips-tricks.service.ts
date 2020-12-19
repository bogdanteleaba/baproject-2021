import { Injectable } from '@angular/core';
import { Tip } from './tip.model'

@Injectable({
  providedIn: 'root'
})

export class TipsTricksService {
  private _tips: Tip[] = [
    new Tip(
      'p1',
      'This is a tip',
      'Why not getting a fully personalized workout program according to your needs and made so you can reach your objectives asap?',
      'https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2390&q=80',
    ),
    new Tip(
      'p2',
      'This is a tip',
      'Why not getting a fully personalized workout program according to your needs and made so you can reach your objectives asap?',
      'https://images.unsplash.com/photo-1570655652364-2e0a67455ac6?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2018&q=80',
    ),
    new Tip(
      'p3',
      'This is a tip',
      'Why not getting a fully personalized workout program according to your needs and made so you can reach your objectives asap?',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    ),
    new Tip(
      'p4',
      'This is a tip',
      'Why not getting a fully personalized workout program according to your needs and made so you can reach your objectives asap?',
      'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80',
    ),
    new Tip(
      'p5',
      'This is a tip',
      'Why not getting a fully personalized workout program according to your needs and made so you can reach your objectives asap?',
      'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    ),
    new Tip(
      'p6',
      'This is a tip',
      'Why not getting a fully personalized workout program according to your needs and made so you can reach your objectives asap?',
      'https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2390&q=80',
    )
  ];

  get tips() {
    return [...this._tips];
  }

  constructor() { }
}