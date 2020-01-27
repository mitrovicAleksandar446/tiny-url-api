import Visit from '../../../database/stores/@types/Visit';

export default interface NewVisit {
  domain: Visit['domain'];
  visitedAt: Visit['visitedAt'];
}
