import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCoursesService {
  private tabCourses = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      keywords: ['Binding', 'Services', 'Routing'],
    },
    {
      id: 2,
      title: 'Android',
      author: 'Homer Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png',
      keywords: ['Activity', 'Intents', 'RecyclerView'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Homer Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LogoIonic.png/220px-LogoIonic.png',
      keywords: ['Page', 'Pipe', 'Routing'],
    },
  ];

  getAllCourses() {
    return this.tabCourses;
  }

  getCourseById(selectedId) {
    return this.tabCourses.find((c) => c.id == selectedId);
  }

  constructor() {}

  deleteCourse(course) {
    let i = this.tabCourses.indexOf(course);
    this.tabCourses.splice(i, 1);
  }

  addCourse(newC) {
    newC.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    this.tabCourses.push(newC);
  }
}
