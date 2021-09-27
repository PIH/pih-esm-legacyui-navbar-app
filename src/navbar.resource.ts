import { openmrsFetch } from '@openmrs/esm-framework';

export async function getLoggedInUser() {
  const session = await openmrsFetch(`/ws/rest/v1/session`);
  const personUuid = session.data.user.person.uuid;
  const person = await openmrsFetch(`/ws/rest/v1/person/${personUuid}/name`);
  return person.data.results[0];
}
