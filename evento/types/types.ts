export type PageLink = {
  path: string;
  label: string;
};

/**
 * city
: 
"Austin"
date
: 
"2030-10-12T00:00:00.000Z"
description
: 
"Join us for an immersive DJ practice session at the DJ Beats Workshop! Whether you're a beginner aspiring to spin the decks or an experienced DJ looking to refine your skills, this event is tailored just for you. Dive into the world of beats, mixes, and electronic rhythms under the guidance of seasoned DJs and music producers. Showcase your skills during our open decks session. Share your favorite tracks, experiment with live remixing, and receive applause and feedback from a supportive audience."
id
: 
1
imageUrl
: 
"https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100"
location
: 
"Austin Music Hall"
name
: 
"DJ Practice Session"
organizerName
: 
"DJ Inc."
slug
: 
"dj-practice-session"
 */

export type Event = {
  id: number;
  city: string;
  date: string;
  description: string;
  imageUrl: string;
  location: string;
  name: string;
  slug: string;
  organizerName: string;
};
