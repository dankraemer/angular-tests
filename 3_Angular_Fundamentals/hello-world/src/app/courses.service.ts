// In angular, services are just plain TypeScript class.
// Because of that there is no decorators for it.
export class CoursesService {

    getCourses() {
      return ["course1", "course2", "course3"];
    }
}
