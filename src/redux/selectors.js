export const getAllContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contacts => {
    const normolizedName = contacts.name.toLowerCase();
    return normolizedName.includes(normalizedFilter);
  });
  return filteredContacts;
};
